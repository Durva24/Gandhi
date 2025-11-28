'use client';
import { useState, useEffect, useRef } from 'react';
import { Plus, Send } from 'lucide-react';

interface Message {
  id: string;
  role: string;
  content: string;
  createdAt: string;
}

interface Chat {
  id: string;
  name: string;
  created_at: string;
}

interface ChatDetail {
  chat: {
    id: string;
    name: string;
    context: string;
    createdAt: string;
  };
  messages: Message[];
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
      const response = await fetch('/api/get/chats');
      const data = await response.json();
      if (data.success) {
        setChats(data.chats);
      }
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const fetchChatHistory = async (chatId: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/get/chat?chatId=${chatId}`);
      const data = await response.json();
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
    } finally {
      setLoading(false);
    }
  };

  const createNewChat = async () => {
    const newChatName = `Chat ${new Date().toLocaleDateString('en-IN')}`;
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
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      createdAt: new Date().toISOString()
    };

    setMessages(prev => [...prev, tempUserMsg]);

    try {
      const response = await fetch('/api/chat', {
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
        if (!selectedChatId) {
          setSelectedChatId(data.chatId);
          fetchAllChats();
        }

        const aiMsg: Message = {
          id: data.aiMessageId,
          role: 'assistant',
          content: data.aiMessage,
          createdAt: new Date().toISOString()
        };

        setMessages(prev => {
          const filtered = prev.filter(m => m.id !== tempUserMsg.id);
          return [...filtered, 
            { ...tempUserMsg, id: data.userMessageId }, 
            aiMsg
          ];
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
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
    <div style={{
      height: '100vh',
      background: '#ffffff',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <div style={{
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '2px solid #050505'
      }}>
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '16px',
          fontWeight: 800,
          letterSpacing: '1.5px',
          color: '#050505'
        }}>
          FINANCIAL WISDOM CHAT
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <div style={{
          width: '280px',
          borderRight: '2px solid #050505',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '16px',
            borderBottom: '2px solid #050505'
          }}>
            <button
              onClick={createNewChat}
              style={{
                width: '100%',
                background: '#C4F000',
                border: '2px solid #050505',
                padding: '12px',
                fontSize: '11px',
                fontWeight: 700,
                color: '#050505',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Plus size={16} strokeWidth={3} />
              NEW CHAT
            </button>
          </div>

          <div style={{
            flex: 1,
            overflow: 'auto',
            padding: '12px'
          }}>
            {chats.length === 0 ? (
              <div style={{
                padding: '20px',
                textAlign: 'center',
                fontSize: '11px',
                fontWeight: 600,
                color: '#050505',
                opacity: 0.5
              }}>
                No chats yet
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {chats.map(chat => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChatId(chat.id)}
                    style={{
                      background: selectedChatId === chat.id ? '#C4F000' : '#fafafa',
                      border: selectedChatId === chat.id ? '2px solid #050505' : '1px solid #e5e5e5',
                      padding: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#050505',
                      marginBottom: '4px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {chat.name}
                    </div>
                    <div style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#050505',
                      opacity: 0.6
                    }}>
                      {new Date(chat.created_at).toLocaleDateString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div style={{
            flex: 1,
            overflow: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {loading ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#050505',
                  opacity: 0.6
                }}>
                  Loading messages...
                </div>
              </div>
            ) : messages.length === 0 ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap: '12px'
              }}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  color: '#050505',
                  letterSpacing: '1px'
                }}>
                  START A CONVERSATION
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#050505',
                  opacity: 0.6,
                  textAlign: 'center',
                  maxWidth: '400px'
                }}>
                  Ask for financial wisdom inspired by Gandhi's principles of simplicity and mindful spending
                </div>
              </div>
            ) : (
              <>
                {messages.map(message => (
                  <div
                    key={message.id}
                    style={{
                      display: 'flex',
                      justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                    }}
                  >
                    <div style={{
                      maxWidth: '70%',
                      background: message.role === 'user' ? '#C4F000' : '#ffffff',
                      border: '2px solid #050505',
                      padding: '14px 16px',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#050505',
                      lineHeight: '1.6'
                    }}>
                      {message.content}
                    </div>
                  </div>
                ))}
                {sending && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                  }}>
                    <div style={{
                      background: '#fafafa',
                      border: '2px solid #e5e5e5',
                      padding: '14px 16px',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#050505',
                      animation: 'pulse 1.5s ease-in-out infinite'
                    }}>
                      Thinking...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <div style={{
            padding: '16px 20px',
            borderTop: '2px solid #050505',
            display: 'flex',
            gap: '12px'
          }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask for financial wisdom..."
              disabled={sending}
              style={{
                flex: 1,
                background: '#fafafa',
                border: '2px solid #050505',
                padding: '12px 16px',
                fontSize: '13px',
                fontWeight: 500,
                color: '#050505',
                outline: 'none'
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || sending}
              style={{
                background: sending || !inputMessage.trim() ? '#f5f5f5' : '#C4F000',
                border: '2px solid #050505',
                padding: '12px 20px',
                cursor: sending || !inputMessage.trim() ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: sending || !inputMessage.trim() ? 0.5 : 1
              }}
            >
              <Send size={18} strokeWidth={2.5} color="#050505" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
