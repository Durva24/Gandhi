module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/chat/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-rsc] (ecmascript) <export OpenAI as default>");
(()=>{
    const e = new Error("Cannot find module './context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
// Initialize Supabase client
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://rhwvcophxeimzkusgcte.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJod3Zjb3BoeGVpbXprdXNnY3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMjk4NzEsImV4cCI6MjA3OTcwNTg3MX0.YhaSI-NgqbTjfFHa96PdlSsoPbZZtG-vBQ9dtpwCMvI"));
// Initialize Neysa client via PipeShift (OpenAI-compatible)
const neysa = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    baseURL: 'https://api.pipeshift.com/api/v0/',
    apiKey: process.env.NEYSA_GROQ_API_KEY
});
async function POST(req) {
    try {
        const { chatId, message } = await req.json();
        if (!message || typeof message !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Message is required'
            }, {
                status: 400
            });
        }
        let activeChatId = chatId;
        let chatHistory = [];
        // Get user's financial data from context
        const financialData = await getFinancialContext();
        // If no chatId provided, create a new chat
        if (!activeChatId) {
            const { data: newChat, error: chatError } = await supabase.from('chats').insert({
                name: `Financial Chat ${new Date().toLocaleDateString('en-GB')}`,
                context: 'New conversation with financial advisor'
            }).select().single();
            if (chatError) {
                console.error('Error creating chat:', chatError);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to create chat'
                }, {
                    status: 500
                });
            }
            activeChatId = newChat.id;
        } else {
            // Fetch conversation history (last 15 messages for better context)
            const { data: messages, error: messagesError } = await supabase.from('messages').select('role, content').eq('chat_id', activeChatId).order('created_at', {
                ascending: true
            }).limit(15);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to save message'
            }, {
                status: 500
            });
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
        // Get AI response using Neysa API
        const completion = await neysa.chat.completions.create({
            model: 'neysa-qwen3-vl-30b-a3b',
            messages: apiMessages,
            max_tokens: 500,
            temperature: 0.8,
            top_p: 0.9,
            frequency_penalty: 0.5,
            presence_penalty: 0.3
        });
        const aiResponse = completion.choices[0]?.message?.content || 'My friend, something went wrong. Ask again?';
        // Save AI response to database
        const { error: aiMsgError } = await supabase.from('messages').insert({
            chat_id: activeChatId,
            role: 'assistant',
            content: aiResponse
        });
        if (aiMsgError) {
            console.error('Error saving AI message:', aiMsgError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to save AI response'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            chatId: activeChatId,
            message: aiResponse
        });
    } catch (error) {
        console.error('Error in chat API:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to fetch chats'
                }, {
                    status: 500
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                chats
            });
        }
        // Fetch specific chat with messages
        const { data: chat, error: chatError } = await supabase.from('chats').select('*').eq('id', chatId).single();
        if (chatError) {
            console.error('Error fetching chat:', chatError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to fetch messages'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            chat,
            messages
        });
    } catch (error) {
        console.error('Error in chat API GET:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
"[project]/app/chat/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/chat/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6ed2c420._.js.map