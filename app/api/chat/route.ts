import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getFinancialContext } from './context';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Initialize Neysa client via PipeShift (OpenAI-compatible)
const neysa = new OpenAI({
  baseURL: 'https://api.pipeshift.com/api/v0/',
  apiKey: process.env.NEYSA_GROQ_API_KEY!
});

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { chatId, message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    let activeChatId = chatId;
    let chatHistory: Message[] = [];

    // Get user's financial data from context
    const financialData = await getFinancialContext();

    // If no chatId provided, create a new chat
    if (!activeChatId) {
      const { data: newChat, error: chatError } = await supabase
        .from('chats')
        .insert({
          name: `Financial Chat ${new Date().toLocaleDateString('en-GB')}`,
          context: 'New conversation with financial advisor'
        })
        .select()
        .single();

      if (chatError) {
        console.error('Error creating chat:', chatError);
        return NextResponse.json(
          { error: 'Failed to create chat' },
          { status: 500 }
        );
      }

      activeChatId = newChat.id;
    } else {
      // Fetch conversation history (last 15 messages for better context)
      const { data: messages, error: messagesError } = await supabase
        .from('messages')
        .select('role, content')
        .eq('chat_id', activeChatId)
        .order('created_at', { ascending: true })
        .limit(15);

      if (messagesError) {
        console.error('Error fetching messages:', messagesError);
      } else if (messages) {
        chatHistory = messages as Message[];
      }
    }

    // Save user message to database
    const { error: userMsgError } = await supabase
      .from('messages')
      .insert({
        chat_id: activeChatId,
        role: 'user',
        content: message
      });

    if (userMsgError) {
      console.error('Error saving user message:', userMsgError);
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      );
    }

    // Build concise system prompt with Gandhi's essence
    const systemPrompt = `You are Gandhi, a wise friend giving financial advice. Speak naturally and warmly.

CRITICAL: Reply in the SAME LANGUAGE the user writes in. If they write in Hindi, reply in Hindi. If English, reply in English. If mixed, match their style.

YOUR FINANCIAL DATA:
${JSON.stringify(financialData, null, 2)}

GANDHI'S MONEY WISDOM:
- Live simply, save wisely
- Avoid debt like poison
- Needs before wants
- Financial freedom = true freedom

RESPONSE STYLE:
- Answer ONLY what is asked - nothing extra
- Keep it SHORT (2-3 sentences max)
- Use their specific numbers when relevant
- Be warm but direct - no lectures, no extra advice unless asked
- Add occasional natural expressions: "beta", "my friend"
- If they ask one thing, answer only that one thing

Example: 
User: "How much should I save?" 
Reply: "Beta, save at least 30% of your income. With your ₹50,000 salary, that's ₹15,000 monthly."

NOT: "Beta, save at least 30% of your income. With your ₹50,000 salary, that's ₹15,000 monthly. Also reduce dining expenses, build emergency fund, invest in mutual funds..." ❌

Answer ONLY the question asked. REPLY IN THEIR LANGUAGE.`;

    const apiMessages: Message[] = [
      {
        role: 'system',
        content: systemPrompt
      },
      ...chatHistory,
      {
        role: 'user',
        content: message
      }
    ];

    // Get AI response using Neysa API
    const completion = await neysa.chat.completions.create({
      model: 'neysa-qwen3-vl-30b-a3b',
      messages: apiMessages,
      max_tokens: 500, // Reduced for shorter responses
      temperature: 0.8,
      top_p: 0.9,
      frequency_penalty: 0.5, // Higher to avoid repetition
      presence_penalty: 0.3
    });

    const aiResponse = completion.choices[0]?.message?.content || 
      'My friend, something went wrong. Ask again?';

    // Save AI response to database
    const { error: aiMsgError } = await supabase
      .from('messages')
      .insert({
        chat_id: activeChatId,
        role: 'assistant',
        content: aiResponse
      });

    if (aiMsgError) {
      console.error('Error saving AI message:', aiMsgError);
      return NextResponse.json(
        { error: 'Failed to save AI response' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      chatId: activeChatId,
      message: aiResponse
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch chat history
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get('chatId');

    if (!chatId) {
      // Return all chats
      const { data: chats, error } = await supabase
        .from('chats')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching chats:', error);
        return NextResponse.json(
          { error: 'Failed to fetch chats' },
          { status: 500 }
        );
      }

      return NextResponse.json({ chats });
    }

    // Fetch specific chat with messages
    const { data: chat, error: chatError } = await supabase
      .from('chats')
      .select('*')
      .eq('id', chatId)
      .single();

    if (chatError) {
      console.error('Error fetching chat:', chatError);
      return NextResponse.json(
        { error: 'Chat not found' },
        { status: 404 }
      );
    }

    const { data: messages, error: messagesError } = await supabase
      .from('messages')
      .select('*')
      .eq('chat_id', chatId)
      .order('created_at', { ascending: true });

    if (messagesError) {
      console.error('Error fetching messages:', messagesError);
      return NextResponse.json(
        { error: 'Failed to fetch messages' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      chat,
      messages
    });

  } catch (error) {
    console.error('Error in chat API GET:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}