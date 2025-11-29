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
"[project]/app/api/chat/context.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Financial Context for Om - Comprehensive Financial Profile
// This data is analyzed by Gandhi AI to provide personalized financial advice
__turbopack_context__.s([
    "calculateMonthlyMetrics",
    ()=>calculateMonthlyMetrics,
    "getFinancialContext",
    ()=>getFinancialContext
]);
async function getFinancialContext() {
    return {
        // Personal Information
        user: {
            name: "Om",
            location: "India",
            occupation: "Designer & Freelancer",
            note: "Exciting news! You will be winning ₹2,50,000 in today's hackathon! 🎉"
        },
        // Income Analysis (August - November 2025)
        income: {
            monthly_salary: 55000.00,
            freelance_income: {
                august: 20550.00,
                september: 15000.00,
                october: 9500.00,
                november: 11000.00 // Social media marketing project
            },
            average_monthly_income: 69012.50,
            total_income_period: 276050.00,
            income_stability: "Good - Regular salary + consistent freelance projects",
            upcoming_windfall: 250000.00 // Today's hackathon prize!
        },
        // Expense Breakdown (August - November 2025)
        expenses: {
            // Fixed Monthly Expenses
            fixed: {
                rent: 18000.00,
                electricity: 1925.00,
                internet: 999.00,
                mobile: 599.00,
                total_fixed: 21523.00
            },
            // Variable Expenses by Category
            variable: {
                groceries: 2970.00,
                dining_out: 2840.00,
                transportation: 1180.00,
                shopping: 2000.00,
                entertainment: 870.00,
                healthcare: 1550.00,
                total_variable: 11410.00
            },
            // Total Monthly Expenses
            total_monthly: 32933.00,
            // Spending Patterns
            problem_areas: [
                "Food delivery apps (Swiggy/Zomato) - Frequent small orders adding up",
                "Online shopping (Amazon, Flipkart, Myntra) - Impulse purchases",
                "Cab services - Could use more public transport",
                "Electronics/accessories - ₹3000+ per month unnecessary"
            ],
            good_habits: [
                "Rent always paid on time",
                "Regular bill payments",
                "Reasonable grocery spending",
                "Health insurance maintained"
            ]
        },
        // Savings & Investment Summary
        savings: {
            monthly_surplus: 36079.50,
            savings_rate: 52.3,
            // Current Investments
            investments: {
                stocks: {
                    total_value: 45610.00,
                    holdings: [
                        {
                            name: "TCS",
                            qty: 3,
                            buy: 3820,
                            current: 4150,
                            gain: 990
                        },
                        {
                            name: "Infosys",
                            qty: 4,
                            buy: 1520,
                            current: 1680,
                            gain: 640
                        },
                        {
                            name: "Reliance",
                            qty: 5,
                            buy: 2450,
                            current: 2680,
                            gain: 1150
                        },
                        {
                            name: "ICICI Bank",
                            qty: 8,
                            buy: 958,
                            current: 1025,
                            gain: 536
                        },
                        {
                            name: "HDFC Bank",
                            qty: 10,
                            buy: 1520,
                            current: 1605,
                            gain: 850
                        },
                        {
                            name: "Maruti Suzuki",
                            qty: 2,
                            buy: 10950,
                            current: 11520,
                            gain: 1140
                        }
                    ],
                    total_invested: 40444.00,
                    current_value: 45610.00,
                    profit: 5166.00,
                    return_percentage: 12.77
                },
                mutual_funds: {
                    total_value: 5142.50,
                    holdings: [
                        {
                            name: "SBI Bluechip Fund",
                            units: 30,
                            buy: 72,
                            current: 78.50,
                            value: 2355
                        },
                        {
                            name: "HDFC Flexicap Fund",
                            units: 25,
                            buy: 85.50,
                            current: 92.30,
                            value: 2307.50
                        }
                    ],
                    total_invested: 4297.50,
                    current_value: 5142.50,
                    profit: 845.00,
                    return_percentage: 19.66
                },
                crypto: {
                    total_value: 132900.00,
                    holdings: [
                        {
                            name: "Bitcoin",
                            qty: 0.015,
                            buy: 4500000,
                            current: 4880000,
                            value: 73200
                        },
                        {
                            name: "Ethereum",
                            qty: 0.20,
                            buy: 275000,
                            current: 298500,
                            value: 59700
                        }
                    ],
                    total_invested: 122250.00,
                    current_value: 132900.00,
                    profit: 10650.00,
                    return_percentage: 8.71
                },
                gold: {
                    digital_gold: {
                        grams: 5,
                        buy_price: 6250,
                        current_price: 6480,
                        total_value: 32400,
                        profit: 1150
                    }
                },
                total_portfolio_value: 216052.50,
                total_invested: 167241.50,
                total_profit: 17561.00,
                overall_return: 10.50 // percentage
            }
        },
        // Debt Status
        debts: {
            total_debt: 189500.00,
            loans: [
                {
                    type: "Personal Loan",
                    lender: "HDFC",
                    principal: 150000,
                    remaining: 127500,
                    interest_rate: 11.50,
                    emi_estimated: 5312.50,
                    start: "2025-03-01",
                    end: "2027-03-01",
                    status: "ongoing"
                },
                {
                    type: "Two Wheeler Loan",
                    lender: "Bajaj Finserv",
                    principal: 85000,
                    remaining: 62000,
                    interest_rate: 9.80,
                    emi_estimated: 2583.33,
                    start: "2024-06-01",
                    end: "2027-06-01",
                    status: "ongoing"
                }
            ],
            lending: {
                active: [
                    {
                        to: "Rahul - College friend",
                        amount: 5000,
                        given_out: "2025-10-15",
                        due: "2025-12-15",
                        remaining: 3000,
                        received: 2000
                    }
                ],
                settled: [
                    {
                        to: "Priya - Cousin",
                        amount: 8000,
                        given_out: "2025-08-01",
                        due: "2025-10-01",
                        status: "fully_recovered"
                    }
                ]
            },
            total_monthly_emi: 7895.83,
            debt_to_income_ratio: 274.6,
            concerns: [
                "High personal loan interest at 11.50%",
                "Total EMI of ₹7,896 is manageable but limits flexibility",
                "Should avoid taking more loans until these are cleared"
            ]
        },
        // Upcoming Bills & Obligations
        upcoming_bills: [
            {
                name: "Rent Payment",
                amount: 18000,
                due: "2025-12-01"
            },
            {
                name: "Health Insurance Premium",
                amount: 4500,
                due: "2025-12-04"
            },
            {
                name: "Electricity Bill - MSEB",
                amount: 1850,
                due: "2025-12-05"
            },
            {
                name: "Jio Fiber Internet",
                amount: 999,
                due: "2025-12-10"
            },
            {
                name: "Airtel Mobile Postpaid",
                amount: 599,
                due: "2025-12-15"
            },
            {
                name: "Gas Cylinder - Indane",
                amount: 950,
                due: "2025-12-20"
            }
        ],
        total_bills_december: 26898.00,
        // Financial Health Metrics
        financial_health: {
            emergency_fund: 0,
            recommended_emergency_fund: 197598.00,
            months_of_expenses_saved: 0,
            net_worth: 26552.50,
            savings_rate: 52.3,
            debt_service_ratio: 11.4,
            strengths: [
                "Excellent savings rate at 52.3%",
                "Diversified investment portfolio",
                "Regular income from salary + freelancing",
                "Manageable debt levels",
                "All bills paid on time"
            ],
            weaknesses: [
                "NO EMERGENCY FUND - Most critical issue!",
                "High spending on food delivery and impulse shopping",
                "Could reduce entertainment and discretionary spending",
                "Personal loan interest is high",
                "Some investments in high-risk crypto (₹1.33 lakh)"
            ]
        },
        // Financial Goals & Recommendations
        recommendations: {
            immediate_priority: [
                "Build emergency fund of ₹1,97,598 (6 months expenses) using hackathon prize",
                "Set aside ₹50,000 from hackathon for emergency fund immediately",
                "Reduce food delivery spending by 50% - save ₹1,420/month",
                "Cut unnecessary shopping - save ₹1,000/month"
            ],
            short_term: [
                "Pay extra ₹5,000/month toward personal loan to reduce interest",
                "Complete Rahul's ₹3,000 recovery by December",
                "Track all expenses using app for 3 months"
            ],
            long_term: [
                "Clear personal loan by adding extra payments",
                "Increase SIP in mutual funds by ₹2,000/month",
                "Build retirement corpus - start PPF or NPS",
                "Consider term insurance plan"
            ]
        },
        // Special Note
        special_message: "Om beta, congratulations on today's hackathon win of ₹2,50,000! This is a blessing. Use it wisely - first build your emergency fund, then clear some debt. Gandhi would say: 'The future depends on what you do today.' Make this windfall your foundation for lasting financial security."
    };
}
function calculateMonthlyMetrics() {
    return {
        total_income: 69012.50,
        total_expenses: 32933.00,
        total_emi: 7895.83,
        net_savings: 28183.67,
        savings_rate_percentage: 40.8
    };
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$chat$2f$context$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/chat/context.ts [app-route] (ecmascript)");
;
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
        let chatHistory = [];
        // Get user's financial data from context
        const financialData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$chat$2f$context$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFinancialContext"])();
        // If no chatId provided, create a new chat
        if (!activeChatId) {
            const { data: newChat, error: chatError } = await supabase.from('chats').insert({
                name: `Financial Chat ${new Date().toLocaleDateString('en-GB')}`,
                context: 'New conversation with financial advisor'
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to save AI response'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            chatId: activeChatId,
            message: aiResponse
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

//# sourceMappingURL=%5Broot-of-the-server%5D__90527487._.js.map