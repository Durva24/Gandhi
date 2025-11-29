module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
;
;
// Initialize Supabase client
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://rhwvcophxeimzkusgcte.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJod3Zjb3BoeGVpbXprdXNnY3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMjk4NzEsImV4cCI6MjA3OTcwNTg3MX0.YhaSI-NgqbTjfFHa96PdlSsoPbZZtG-vBQ9dtpwCMvI"));
// Initialize Neysa client via PipeShift (OpenAI-compatible)
const neysa = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    baseURL: 'https://api.pipeshift.com/api/v0/',
    apiKey: process.env.NEYSA_GROQ_API_KEY
});
async function POST(req) {
    try {
        const { chatId, message } = await req.json();
        if (!message || typeof message !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Message is required'
            }, {
                status: 400
            });
        }
        let activeChatId = chatId;
        let chatContext = '';
        let chatHistory = [];
        // If no chatId provided, create a new chat
        if (!activeChatId) {
            const { data: newChat, error: chatError } = await supabase.from('chats').insert({
                name: `Chat ${new Date().toLocaleDateString('en-GB')}`,
                context: 'New financial conversation started.'
            }).select().single();
            if (chatError) {
                console.error('Error creating chat:', chatError);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to create chat'
                }, {
                    status: 500
                });
            }
            activeChatId = newChat.id;
            chatContext = newChat.context;
        } else {
            // Fetch existing chat and its context
            const { data: chat, error: chatError } = await supabase.from('chats').select('context').eq('id', activeChatId).single();
            if (chatError) {
                console.error('Error fetching chat:', chatError);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Chat not found'
                }, {
                    status: 404
                });
            }
            chatContext = chat.context || '';
            // Fetch conversation history (last 10 messages for context)
            const { data: messages, error: messagesError } = await supabase.from('messages').select('role, content').eq('chat_id', activeChatId).order('created_at', {
                ascending: true
            }).limit(10);
            if (messagesError) {
                console.error('Error fetching messages:', messagesError);
            } else if (messages) {
                chatHistory = messages;
            }
        }
        // Save user message to database
        const { error: userMsgError } = await supabase.from('messages').insert({
            chat_id: activeChatId,
            role: 'user',
            content: message
        });
        if (userMsgError) {
            console.error('Error saving user message:', userMsgError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to save message'
            }, {
                status: 500
            });
        }
        // Build messages array for Neysa API with JSON mode instruction
        const systemPrompt = `You are an expert financial advisor focused on Gandhi's principles of simplicity, mindful spending, and financial wisdom. Your role is to provide practical financial guidance grounded in values of:
- Simplicity and living within means
- Mindful consumption and avoiding waste
- Long-term financial security over short-term gains
- Ethical and responsible money management
- Self-reliance and financial independence

Current conversation context: ${chatContext}

You must respond in JSON format with exactly this structure:
{
  "response": "your helpful financial advice and guidance to the user",
  "context": "a brief 1-2 sentence summary of what this financial conversation is about"
}

Provide thoughtful financial wisdom and update the context based on the conversation.`;
        const apiMessages = [
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
        // Get AI response using Neysa (PipeShift) API
        const completion = await neysa.chat.completions.create({
            model: 'neysa-qwen3-vl-30b-a3b',
            messages: apiMessages,
            max_tokens: 5000,
            temperature: 0.6,
            response_format: {
                type: 'json_object'
            }
        });
        const aiResponseText = completion.choices[0]?.message?.content || '{"response": "Sorry, I could not generate a response.", "context": "Error occurred"}';
        // Parse JSON response
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(aiResponseText);
        } catch (parseError) {
            console.error('Error parsing AI response:', parseError);
            parsedResponse = {
                response: 'Sorry, I could not generate a proper response.',
                context: chatContext
            };
        }
        const { response: aiResponse, context: updatedContext } = parsedResponse;
        // Save AI response to database
        const { error: aiMsgError } = await supabase.from('messages').insert({
            chat_id: activeChatId,
            role: 'assistant',
            content: aiResponse
        });
        if (aiMsgError) {
            console.error('Error saving AI message:', aiMsgError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to save AI response'
            }, {
                status: 500
            });
        }
        // Update chat context
        const { error: updateError } = await supabase.from('chats').update({
            context: updatedContext
        }).eq('id', activeChatId);
        if (updateError) {
            console.error('Error updating context:', updateError);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            chatId: activeChatId,
            message: aiResponse,
            context: updatedContext
        });
    } catch (error) {
        console.error('Error in chat API:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const chatId = searchParams.get('chatId');
        if (!chatId) {
            // Return all chats
            const { data: chats, error } = await supabase.from('chats').select('*').order('created_at', {
                ascending: false
            });
            if (error) {
                console.error('Error fetching chats:', error);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to fetch chats'
                }, {
                    status: 500
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                chats
            });
        }
        // Fetch specific chat with messages
        const { data: chat, error: chatError } = await supabase.from('chats').select('*').eq('id', chatId).single();
        if (chatError) {
            console.error('Error fetching chat:', chatError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Chat not found'
            }, {
                status: 404
            });
        }
        const { data: messages, error: messagesError } = await supabase.from('messages').select('*').eq('chat_id', chatId).order('created_at', {
            ascending: true
        });
        if (messagesError) {
            console.error('Error fetching messages:', messagesError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to fetch messages'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            chat,
            messages
        });
    } catch (error) {
        console.error('Error in chat API GET:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e4f28f0._.js.map