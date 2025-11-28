'use client';
import { useState, useEffect, useRef } from 'react';
import { Plus, Send } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

interface Chat {
  id: string;
  name: string;
  created_at: string;
}

export default function ChatInterface() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchAllChats();
  }, []);

  useEffect(() => {
    if (selectedChatId) {
      fetchChatHistory(selectedChatId);
    }
  }, [selectedChatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchAllChats = async () => {
    try {
      const response = await fetch('/api/chat/route');
      const data = await response.json();
      if (data.success && data.chats) {
        setChats(data.chats);
      }
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const fetchChatHistory = async (chatId: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/get/chat/route?chatId=${chatId}`);
      const data = await response.json();
      if (data.success && data.messages) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const createNewChat = () => {
    setSelectedChatId(null);
    setMessages([]);
    setInputMessage('');
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || sending) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setSending(true);

    const tempUserMsg: Message = {
      id: `temp-${Date.now()}`,
      role: 'user',
      content: userMessage,
      createdAt: new Date().toISOString()
    };

    setMessages(prev => [...prev, tempUserMsg]);

    try {
      const response = await fetch('/api/chat/route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatId: selectedChatId,
          message: userMessage,
          chatName: `Chat ${new Date().toLocaleDateString('en-IN')}`
        })
      });

      const data = await response.json();

      if (data.success) {
        if (!selectedChatId && data.chatId) {
          setSelectedChatId(data.chatId);
          fetchAllChats();
        }

        const aiMsg: Message = {
          id: data.aiMessageId || `ai-${Date.now()}`,
          role: 'assistant',
          content: data.aiMessage || data.response,
          createdAt: new Date().toISOString()
        };

        setMessages(prev => {
          const filtered = prev.filter(m => m.id !== tempUserMsg.id);
          return [
            ...filtered,
            { ...tempUserMsg, id: data.userMessageId || tempUserMsg.id },
            aiMsg
          ];
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => prev.filter(m => m.id !== tempUserMsg.id));
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen bg-white font-sans flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between border-b-2 border-black">
        <div className="font-bold text-base tracking-widest text-black">
          FINANCIAL WISDOM CHAT
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-[280px] border-r-2 border-black flex flex-col overflow-hidden">
          <div className="p-4 border-b-2 border-black">
            <button
              onClick={createNewChat}
              className="w-full bg-[#C4F000] border-2 border-black px-3 py-3 text-xs font-bold text-black cursor-pointer tracking-wide flex items-center justify-center gap-2 hover:bg-[#B0E000] active:scale-95 transition-all"
            >
              <Plus size={16} strokeWidth={3} />
              NEW CHAT
            </button>
          </div>

          <div className="flex-1 overflow-auto p-3">
            {chats.length === 0 ? (
              <div className="p-5 text-center text-xs font-semibold text-black opacity-50">
                No chats yet
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {chats.map(chat => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChatId(chat.id)}
                    className={`p-3 cursor-pointer transition-all ${
                      selectedChatId === chat.id
                        ? 'bg-[#C4F000] border-2 border-black'
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className="text-xs font-bold text-black mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      {chat.name}
                    </div>
                    <div className="text-[10px] font-semibold text-black opacity-60">
                      {new Date(chat.created_at).toLocaleDateString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto p-5 flex flex-col gap-4">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-xs font-bold text-black opacity-60">
                  Loading messages...
                </div>
              </div>
            ) : messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-3">
                <div className="text-base font-extrabold text-black tracking-wide">
                  START A CONVERSATION
                </div>
                <div className="text-xs font-semibold text-black opacity-60 text-center max-w-md">
                  Ask for financial wisdom inspired by Gandhi's principles of simplicity and mindful spending
                </div>
              </div>
            ) : (
              <>
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] border-2 border-black px-4 py-3.5 text-[13px] font-medium text-black leading-relaxed ${
                        message.role === 'user' ? 'bg-[#C4F000]' : 'bg-white'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {sending && (
                  <div className="flex justify-start">
                    <div className="bg-gray-50 border-2 border-gray-200 px-4 py-3.5 text-[13px] font-medium text-black animate-pulse">
                      Thinking...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="px-5 py-4 border-t-2 border-black flex gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask for financial wisdom..."
              disabled={sending}
              className="flex-1 bg-gray-50 border-2 border-black px-4 py-3 text-[13px] font-medium text-black outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || sending}
              className={`border-2 border-black px-5 py-3 flex items-center justify-center transition-all ${
                sending || !inputMessage.trim()
                  ? 'bg-gray-100 cursor-not-allowed opacity-50'
                  : 'bg-[#C4F000] cursor-pointer hover:bg-[#B0E000] active:scale-95'
              }`}
            >
              <Send size={18} strokeWidth={2.5} color="#050505" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
