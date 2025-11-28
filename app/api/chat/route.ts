import { createClient } from '@supabase/supabase-js';
import Groq from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';

// Initialize clients with error checking
function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!url || !key) {
    throw new Error('Supabase credentials not configured');
  }
  
  return createClient(url, key);
}

function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;
  
  if (!apiKey) {
    throw new Error('Groq API key not configured');
  }
  
  return new Groq({ apiKey });
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  chatId?: string;
  message: string;
  chatName?: string;
}

interface ChatResponse {
  success: boolean;
  chatId: string;
  userMessageId: string;
  aiMessageId: string;
  aiMessage: string;
  context: string;
}

async function handleChatMessage(request: ChatRequest): Promise<ChatResponse> {
  const supabase = getSupabaseClient();
  const groq = getGroqClient();
  
  let chatId: string = request.chatId || '';
  let chatName = request.chatName || `Financial Chat ${new Date().toLocaleDateString('en-IN')}`;
  let existingContext = '';

  if (!chatId) {
    const { data: newChat, error: chatError } = await supabase
      .from('chats')
      .insert({
        name: chatName,
        context: 'New financial wisdom conversation started.'
      })
      .select()
      .single();

    if (chatError || !newChat) throw new Error(`Failed to create chat: ${chatError?.message}`);
    chatId = newChat.id;
    existingContext = newChat.context || '';
  } else {
    const { data: existingChat, error: fetchError } = await supabase
      .from('chats')
      .select('context, name')
      .eq('id', chatId)
      .single();

    if (fetchError) throw new Error(`Failed to fetch chat: ${fetchError.message}`);
    existingContext = existingChat.context || '';
    chatName = existingChat.name;
  }

  const { data: userMessageData, error: userMsgError } = await supabase
    .from('messages')
    .insert({
      chat_id: chatId,
      role: 'user',
      content: request.message
    })
    .select()
    .single();

  if (userMsgError) throw new Error(`Failed to save user message: ${userMsgError.message}`);

  const { data: previousMessages, error: historyError } = await supabase
    .from('messages')
    .select('role, content')
    .eq('chat_id', chatId)
    .order('created_at', { ascending: true })
    .limit(10);

  if (historyError) throw new Error(`Failed to fetch message history: ${historyError.message}`);

  const conversationHistory: ChatMessage[] = previousMessages.map(msg => ({
    role: msg.role as 'user' | 'assistant' | 'system',
    content: msg.content
  }));

  const systemPrompt = `You are a wise financial advisor inspired by Mahatma Gandhi's principles of simplicity, frugality, and mindful living. Guide users on spending wisely, saving prudently, and living within their means.

Previous Context: ${existingContext}

You must respond with ONLY a valid JSON object in this exact format:
{
  "message": "Your Gandhi-inspired financial advice message here",
  "context": "Brief summary of this conversation for future reference"
}

The message should be warm, philosophical yet practical. The context should summarize what was discussed and any key financial topics mentioned.`;

  const completion = await groq.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      ...conversationHistory
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0.7,
    max_tokens: 1024,
    response_format: { type: 'json_object' }
  });

  const aiResponseText = completion.choices[0]?.message?.content || '{"message":"Spend wisely, dear friend.","context":"General financial discussion."}';
  
  let aiResponse;
  try {
    aiResponse = JSON.parse(aiResponseText);
  } catch (e) {
    aiResponse = {
      message: 'Dear friend, the path to financial wisdom begins with spending wisely and living simply.',
      context: 'User seeking financial guidance on wise spending and budgeting.'
    };
  }

  const { data: aiMessageData, error: aiMsgError } = await supabase
    .from('messages')
    .insert({
      chat_id: chatId,
      role: 'assistant',
      content: aiResponse.message
    })
    .select()
    .single();

  if (aiMsgError) throw new Error(`Failed to save AI message: ${aiMsgError.message}`);

  const updatedContext = `${existingContext}\n${aiResponse.context}`;

  const { error: updateError } = await supabase
    .from('chats')
    .update({ context: updatedContext })
    .eq('id', chatId);

  if (updateError) throw new Error(`Failed to update context: ${updateError.message}`);

  return {
    success: true,
    chatId,
    userMessageId: userMessageData.id,
    aiMessageId: aiMessageData.id,
    aiMessage: aiResponse.message,
    context: aiResponse.context
  };
}

async function getChatHistory(chatId: string) {
  const supabase = getSupabaseClient();
  
  const { data: chat, error: chatError } = await supabase
    .from('chats')
    .select('*')
    .eq('id', chatId)
    .single();

  if (chatError) throw new Error(`Failed to fetch chat: ${chatError.message}`);

  const { data: messages, error: messagesError } = await supabase
    .from('messages')
    .select('*')
    .eq('chat_id', chatId)
    .order('created_at', { ascending: true });

  if (messagesError) throw new Error(`Failed to fetch messages: ${messagesError.message}`);

  return {
    success: true,
    chat,
    messages
  };
}

async function getAllChats() {
  const supabase = getSupabaseClient();
  
  const { data: chats, error } = await supabase
    .from('chats')
    .select('id, name, created_at')
    .order('created_at', { ascending: false });

  if (error) throw new Error(`Failed to fetch chats: ${error.message}`);

  return {
    success: true,
    chats
  };
}

// Next.js API Route Handlers
export async function POST(req: NextRequest) {
  try {
    const body: ChatRequest = await req.json();
    
    // Validate request
    if (!body.message || typeof body.message !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }
    
    const result = await handleChatMessage(body);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Chat API Error:', error);
    
    // More specific error messages
    let errorMessage = 'Internal server error';
    let statusCode = 500;
    
    if (error.message?.includes('Supabase credentials')) {
      errorMessage = 'Database configuration error';
    } else if (error.message?.includes('Groq API key')) {
      errorMessage = 'AI service configuration error';
    } else if (error.message?.includes('Failed to')) {
      errorMessage = error.message;
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      errorMessage = 'Connection error';
    }
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: statusCode }
    );
  }
}
