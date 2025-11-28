(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/home/components/Balance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const BalanceCard = ()=>{
    _s();
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BalanceCard.useEffect": ()=>{
            const fetchBalance = {
                "BalanceCard.useEffect.fetchBalance": async ()=>{
                    try {
                        const response = await fetch('/api/get/users');
                        const result = await response.json();
                        if (result.success) {
                            setBalance(result.data.balance);
                        }
                    } catch (error) {
                        console.error('Error fetching balance:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["BalanceCard.useEffect.fetchBalance"];
            fetchBalance();
        }
    }["BalanceCard.useEffect"], []);
    // Convert numbers to Devanagari
    const toDevanagariNumber = (num)=>{
        const devanagariDigits = [
            '०',
            '१',
            '२',
            '३',
            '४',
            '५',
            '६',
            '७',
            '८',
            '९'
        ];
        return num.toString().split('').map((digit)=>devanagariDigits[parseInt(digit)]).join('');
    };
    // Mumbai money slang converter - पेटी for lakh, खोका for crore
    const convertToMumbaiSlang = (amount)=>{
        if (amount === 0) return 'शून्य';
        const crore = Math.floor(amount / 10000000);
        const lakh = Math.floor(amount % 10000000 / 100000);
        const thousand = Math.floor(amount % 100000 / 1000);
        const hundred = Math.floor(amount % 1000 / 100);
        const remaining = amount % 100;
        const parts = [];
        // Crore (खोका)
        if (crore > 0) {
            const croreWords = [
                '',
                'एक',
                'दो',
                'तीन',
                'चार',
                'पांच',
                'छह',
                'सात',
                'आठ',
                'नौ'
            ];
            if (crore <= 9) {
                parts.push(`${croreWords[crore]} खोका`);
            } else {
                parts.push(`${toDevanagariNumber(crore)} खोका`);
            }
        }
        // Lakh (पेटी)
        if (lakh > 0) {
            const lakhWords = [
                '',
                'एक',
                'दो',
                'तीन',
                'चार',
                'पांच',
                'छह',
                'सात',
                'आठ',
                'नौ'
            ];
            if (lakh <= 9) {
                parts.push(`${lakhWords[lakh]} पेटी`);
            } else if (lakh === 25) {
                parts.push('पच्चीस पेटी');
            } else if (lakh === 50) {
                parts.push('पचास पेटी');
            } else if (lakh === 75) {
                parts.push('पचहत्तर पेटी');
            } else {
                parts.push(`${toDevanagariNumber(lakh)} पेटी`);
            }
        }
        // Thousand
        if (thousand > 0) {
            const thousandWords = {
                1: 'एक हजार',
                2: 'दो हजार',
                3: 'तीन हजार',
                4: 'चार हजार',
                5: 'पांच हजार',
                10: 'दस हजार',
                15: 'पंद्रह हजार',
                20: 'बीस हजार',
                25: 'पच्चीस हजार',
                50: 'पचास हजार',
                75: 'पचहत्तर हजार'
            };
            parts.push(thousandWords[thousand] || `${toDevanagariNumber(thousand)} हजार`);
        }
        // Hundred
        if (hundred > 0) {
            const hundredWords = [
                '',
                'एक',
                'दो',
                'तीन',
                'चार',
                'पांच',
                'छह',
                'सात',
                'आठ',
                'नौ'
            ];
            if (hundred <= 9) {
                parts.push(`${hundredWords[hundred]} सौ`);
            } else {
                parts.push(`${toDevanagariNumber(hundred)} सौ`);
            }
        }
        // Remaining (1-99)
        if (remaining > 0) {
            const ones = [
                '',
                'एक',
                'दो',
                'तीन',
                'चार',
                'पांच',
                'छह',
                'सात',
                'आठ',
                'नौ'
            ];
            const teens = [
                'दस',
                'ग्यारह',
                'बारह',
                'तेरह',
                'चौदह',
                'पंद्रह',
                'सोलह',
                'सत्रह',
                'अठारह',
                'उन्नीस'
            ];
            const tens = [
                '',
                '',
                'बीस',
                'तीस',
                'चालीस',
                'पचास',
                'साठ',
                'सत्तर',
                'अस्सी',
                'नब्बे'
            ];
            if (remaining < 10) {
                parts.push(ones[remaining]);
            } else if (remaining < 20) {
                parts.push(teens[remaining - 10]);
            } else {
                const tensDigit = Math.floor(remaining / 10);
                const onesDigit = remaining % 10;
                if (onesDigit === 0) {
                    parts.push(tens[tensDigit]);
                } else {
                    parts.push(`${tens[tensDigit]} ${ones[onesDigit]}`);
                }
            }
        }
        return parts.join(' ') || 'शून्य';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#C4F000',
            border: '3px solid #050505',
            padding: 'clamp(12px, 1.2vw, 18px)',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        },
        className: "jsx-5dfbabb52964cc9e" + " " + "brutal-shadow",
        children: [
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(10px, 1vw, 14px)',
                            fontWeight: 800,
                            marginBottom: '8px',
                            letterSpacing: '1px',
                            color: '#050505'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: "BALANCE"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Balance.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#050505',
                            opacity: 0.1,
                            height: 'clamp(24px, 2.5vw, 36px)',
                            width: '70%',
                            marginBottom: '8px',
                            borderRadius: '4px',
                            animation: 'pulse 1.5s ease-in-out infinite'
                        },
                        className: "jsx-5dfbabb52964cc9e"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Balance.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#050505',
                            opacity: 0.1,
                            height: 'clamp(12px, 1vw, 16px)',
                            width: '90%',
                            marginTop: 'auto',
                            borderRadius: '4px',
                            animation: 'pulse 1.5s ease-in-out infinite',
                            animationDelay: '0.2s'
                        },
                        className: "jsx-5dfbabb52964cc9e"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Balance.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(10px, 1vw, 14px)',
                            fontWeight: 800,
                            marginBottom: '8px',
                            letterSpacing: '1px',
                            color: '#050505'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: "BALANCE"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Balance.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Syne', sans-serif",
                            fontSize: 'clamp(24px, 2.5vw, 36px)',
                            fontWeight: 800,
                            marginBottom: '6px',
                            color: '#050505'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: [
                            "₹",
                            balance?.toLocaleString('en-IN') ?? '0'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/components/Balance.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Hind Guntur', sans-serif",
                            fontSize: 'clamp(10px, 1vw, 14px)',
                            fontWeight: 700,
                            color: '#050505',
                            marginTop: 'auto',
                            lineHeight: '1.4'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: balance !== null ? convertToMumbaiSlang(balance) : ''
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Balance.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "5dfbabb52964cc9e",
                children: "@keyframes pulse{0%,to{opacity:.1}50%{opacity:.2}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/Balance.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BalanceCard, "oUIzEhhe9NpCErBlOa43wnTUeZ0=");
_c = BalanceCard;
const __TURBOPACK__default__export__ = BalanceCard;
var _c;
__turbopack_context__.k.register(_c, "BalanceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/SpendMeter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SpendMeterCard = ()=>{
    _s();
    const [spent, setSpent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [budget, setBudget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpendMeterCard.useEffect": ()=>{
            const fetchTransactions = {
                "SpendMeterCard.useEffect.fetchTransactions": async ()=>{
                    try {
                        // Get current month in YYYY-MM format
                        const now = new Date();
                        const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
                        const response = await fetch(`/api/get/transactions?type=debit&month=${currentMonth}`);
                        const result = await response.json();
                        if (result.success) {
                            // Calculate total spent from transactions
                            const totalSpent = result.data.reduce({
                                "SpendMeterCard.useEffect.fetchTransactions.totalSpent": (sum, transaction)=>sum + transaction.amount
                            }["SpendMeterCard.useEffect.fetchTransactions.totalSpent"], 0);
                            setSpent(totalSpent);
                            // Set a default budget or fetch from user settings
                            // For now using a default budget of 50000
                            setBudget(50000);
                        }
                    } catch (error) {
                        console.error('Error fetching transactions:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["SpendMeterCard.useEffect.fetchTransactions"];
            fetchTransactions();
        }
    }["SpendMeterCard.useEffect"], []);
    const percentage = spent !== null && budget !== null ? spent / budget * 100 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#FFFFFF',
            border: '3px solid #050505',
            padding: 'clamp(12px, 1.2vw, 18px)',
            color: '#050505',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        },
        className: "jsx-5dfbabb52964cc9e" + " " + "brutal-shadow",
        children: [
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(10px, 1vw, 14px)',
                            fontWeight: 800,
                            marginBottom: '8px',
                            letterSpacing: '1px',
                            color: '#050505'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: "SPEND METER"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/SpendMeter.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#050505',
                            opacity: 0.1,
                            height: 'clamp(20px, 2vw, 28px)',
                            width: '60%',
                            marginBottom: '12px',
                            borderRadius: '4px',
                            animation: 'pulse 1.5s ease-in-out infinite'
                        },
                        className: "jsx-5dfbabb52964cc9e"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/SpendMeter.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#F5F5F5',
                            height: 'clamp(16px, 1.4vw, 20px)',
                            border: '2px solid #050505',
                            marginTop: 'auto',
                            marginBottom: '6px',
                            position: 'relative',
                            overflow: 'hidden'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#050505',
                                opacity: 0.1,
                                height: '100%',
                                width: '50%',
                                animation: 'pulse 1.5s ease-in-out infinite',
                                animationDelay: '0.2s'
                            },
                            className: "jsx-5dfbabb52964cc9e"
                        }, void 0, false, {
                            fileName: "[project]/app/home/components/SpendMeter.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/SpendMeter.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#050505',
                            opacity: 0.1,
                            height: 'clamp(10px, 0.9vw, 12px)',
                            width: '45%',
                            borderRadius: '4px',
                            animation: 'pulse 1.5s ease-in-out infinite',
                            animationDelay: '0.4s'
                        },
                        className: "jsx-5dfbabb52964cc9e"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/SpendMeter.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(10px, 1vw, 14px)',
                            fontWeight: 800,
                            marginBottom: '8px',
                            letterSpacing: '1px',
                            color: '#050505'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: "SPEND METER"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/SpendMeter.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Syne', sans-serif",
                            fontSize: 'clamp(20px, 2vw, 28px)',
                            fontWeight: 800,
                            marginBottom: '12px',
                            color: '#050505'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: [
                            "₹",
                            spent?.toLocaleString('en-IN') ?? '0'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/components/SpendMeter.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#F5F5F5',
                            height: 'clamp(16px, 1.4vw, 20px)',
                            border: '2px solid #050505',
                            position: 'relative',
                            marginTop: 'auto',
                            marginBottom: '6px'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: percentage >= 80 ? '#FF0000' : '#C4F000',
                                height: '100%',
                                width: `${Math.min(percentage, 100)}%`,
                                transition: 'width 0.5s ease-out, background 0.3s ease-out'
                            },
                            className: "jsx-5dfbabb52964cc9e"
                        }, void 0, false, {
                            fileName: "[project]/app/home/components/SpendMeter.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/SpendMeter.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(9px, 0.9vw, 12px)',
                            fontWeight: 700,
                            color: '#050505'
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: [
                            percentage.toFixed(0),
                            "% OF ₹",
                            budget?.toLocaleString('en-IN') ?? '0'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/components/SpendMeter.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "5dfbabb52964cc9e",
                children: "@keyframes pulse{0%,to{opacity:.1}50%{opacity:.2}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/SpendMeter.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SpendMeterCard, "iBKp6w+zjJhmGcNhacCYctwobNo=");
_c = SpendMeterCard;
const __TURBOPACK__default__export__ = SpendMeterCard;
var _c;
__turbopack_context__.k.register(_c, "SpendMeterCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/Forecast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ForecastCard = ()=>{
    _s();
    const [forecast, setForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        amount: null,
        daysUntil: null,
        date: null
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForecastCard.useEffect": ()=>{
            fetchAndPredict();
        }
    }["ForecastCard.useEffect"], []);
    const fetchAndPredict = async ()=>{
        try {
            setLoading(true);
            const response = await fetch('/api/get/transactions?type=credit');
            if (!response.ok) throw new Error('Failed to fetch transactions');
            const result = await response.json();
            if (!result.success || !result.data || result.data.length === 0) {
                throw new Error('No transaction data available');
            }
            const transactions = result.data;
            const sortedTx = transactions.map((tx)=>({
                    date: new Date(tx.date),
                    amount: parseFloat(tx.amount)
                })).sort((a, b)=>a.date.getTime() - b.date.getTime());
            const intervals = [];
            for(let i = 1; i < sortedTx.length; i++){
                const daysDiff = (sortedTx[i].date.getTime() - sortedTx[i - 1].date.getTime()) / (1000 * 60 * 60 * 24);
                intervals.push(daysDiff);
            }
            const amounts = sortedTx.map((tx)=>tx.amount);
            const { slope: amountSlope, intercept: amountIntercept } = linearRegression(amounts.map((_, i)=>i), amounts);
            const nextAmount = amountSlope * amounts.length + amountIntercept;
            const avgInterval = intervals.reduce((a, b)=>a + b, 0) / intervals.length;
            const lastDate = sortedTx[sortedTx.length - 1].date;
            const nextDate = new Date(lastDate.getTime() + avgInterval * 24 * 60 * 60 * 1000);
            const today = new Date();
            const daysUntil = Math.ceil((nextDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
            setForecast({
                amount: Math.max(0, nextAmount),
                daysUntil: Math.max(0, daysUntil),
                date: nextDate
            });
            const chartPoints = sortedTx.slice(-6).map((tx, i)=>({
                    x: i / 7 * 100,
                    y: normalizeToChart(tx.amount, amounts)
                }));
            chartPoints.push({
                x: 100,
                y: normalizeToChart(nextAmount, amounts),
                isPrediction: true
            });
            setChartData(chartPoints);
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            setLoading(false);
        }
    };
    const linearRegression = (x, y)=>{
        const n = x.length;
        const sumX = x.reduce((a, b)=>a + b, 0);
        const sumY = y.reduce((a, b)=>a + b, 0);
        const sumXY = x.reduce((acc, xi, i)=>acc + xi * y[i], 0);
        const sumX2 = x.reduce((acc, xi)=>acc + xi * xi, 0);
        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;
        return {
            slope,
            intercept
        };
    };
    const normalizeToChart = (value, allValues)=>{
        const min = Math.min(...allValues);
        const max = Math.max(...allValues);
        const range = max - min || 1;
        return 30 - (value - min) / range * 25;
    };
    const formatAmount = (amount)=>{
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brutal-shadow",
            style: {
                background: '#C4F000',
                border: '3px solid #050505',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '11px',
                        fontWeight: 800,
                        marginBottom: '6px',
                        letterSpacing: '1px',
                        color: '#050505'
                    },
                    children: "FORECAST"
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Forecast.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        minHeight: 0,
                        marginBottom: '6px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 100 35",
                        preserveAspectRatio: "none",
                        style: {
                            display: 'block'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "0,20 16,25 33,10 50,18 66,8 83,15 100,10",
                            fill: "none",
                            stroke: "#050505",
                            strokeWidth: "1.5",
                            opacity: "0.2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                attributeName: "opacity",
                                values: "0.15;0.3;0.15",
                                dur: "2s",
                                repeatCount: "indefinite"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Forecast.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/home/components/Forecast.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Forecast.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Forecast.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '18px',
                        fontWeight: 900,
                        color: '#050505',
                        opacity: 0.15,
                        background: '#050505',
                        width: '60%',
                        height: '18px',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        marginBottom: '6px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            animation: 'shimmer 1.5s infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Forecast.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Forecast.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '9px',
                        fontWeight: 700,
                        color: '#050505',
                        opacity: 0.15,
                        background: '#050505',
                        width: '70%',
                        height: '10px',
                        borderRadius: '3px',
                        overflow: 'hidden'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            animation: 'shimmer 1.5s infinite 0.2s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Forecast.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Forecast.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Forecast.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/components/Forecast.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brutal-shadow",
            style: {
                background: '#C4F000',
                border: '3px solid #050505',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '10px',
                        fontWeight: 800,
                        color: '#050505',
                        marginBottom: '4px'
                    },
                    children: "NO DATA"
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Forecast.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '8px',
                        fontWeight: 600,
                        color: '#050505',
                        opacity: 0.6
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Forecast.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/components/Forecast.tsx",
            lineNumber: 219,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const polylinePoints = chartData.map((point)=>`${point.x},${point.y}`).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brutal-shadow",
        style: {
            background: '#C4F000',
            border: '3px solid #050505',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    fontWeight: 800,
                    marginBottom: '6px',
                    letterSpacing: '1px',
                    color: '#050505'
                },
                children: "FORECAST"
            }, void 0, false, {
                fileName: "[project]/app/home/components/Forecast.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    minHeight: 0,
                    marginBottom: '6px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 100 35",
                    preserveAspectRatio: "none",
                    style: {
                        display: 'block'
                    },
                    children: chartData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: polylinePoints,
                        fill: "none",
                        stroke: "#050505",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        opacity: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Forecast.tsx",
                        lineNumber: 268,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Forecast.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/home/components/Forecast.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '18px',
                    fontWeight: 900,
                    color: '#050505',
                    letterSpacing: '-0.5px',
                    marginBottom: '4px'
                },
                children: forecast.amount !== null && formatAmount(forecast.amount)
            }, void 0, false, {
                fileName: "[project]/app/home/components/Forecast.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '9px',
                    fontWeight: 700,
                    color: '#050505',
                    opacity: 0.6,
                    letterSpacing: '0.3px'
                },
                children: forecast.daysUntil !== null && `Next in ${forecast.daysUntil} ${forecast.daysUntil === 1 ? 'day' : 'days'}`
            }, void 0, false, {
                fileName: "[project]/app/home/components/Forecast.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/Forecast.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ForecastCard, "WAPhxRGuDPJrRvul6LB+EU0hSFQ=");
_c = ForecastCard;
const __TURBOPACK__default__export__ = ForecastCard;
var _c;
__turbopack_context__.k.register(_c, "ForecastCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/Funds.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FundsCard = ()=>{
    _s();
    const [funds, setFunds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FundsCard.useEffect": ()=>{
            const fetchFunds = {
                "FundsCard.useEffect.fetchFunds": async ()=>{
                    try {
                        const response = await fetch('/api/get/funds');
                        const result = await response.json();
                        if (result.success) {
                            // Filter out Education Fund and limit to 3 funds
                            const filteredFunds = result.data.filter({
                                "FundsCard.useEffect.fetchFunds.filteredFunds": (fund)=>fund.name !== 'Education Fund'
                            }["FundsCard.useEffect.fetchFunds.filteredFunds"]).slice(0, 3);
                            setFunds(filteredFunds);
                        }
                    } catch (error) {
                        console.error('Error fetching funds:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["FundsCard.useEffect.fetchFunds"];
            fetchFunds();
        }
    }["FundsCard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#FFFFFF',
            border: '3px solid #050505',
            padding: 'clamp(12px, 1.2vw, 18px)',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        },
        className: "jsx-5dfbabb52964cc9e" + " " + "brutal-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(10px, 1vw, 14px)',
                    fontWeight: 800,
                    marginBottom: '12px',
                    letterSpacing: '1px',
                    color: '#050505'
                },
                className: "jsx-5dfbabb52964cc9e",
                children: "FUNDS"
            }, void 0, false, {
                fileName: "[project]/app/home/components/Funds.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(8px, 0.8vw, 12px)',
                    flex: 1,
                    minHeight: 0
                },
                className: "jsx-5dfbabb52964cc9e",
                children: [
                    1,
                    2,
                    3
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minHeight: 0
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#050505',
                                    opacity: 0.1,
                                    height: 'clamp(10px, 0.9vw, 12px)',
                                    width: '70%',
                                    marginBottom: '6px',
                                    borderRadius: '4px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: `${i * 0.1}s`
                                },
                                className: "jsx-5dfbabb52964cc9e"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Funds.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#F5F5F5',
                                    height: 'clamp(8px, 0.7vw, 10px)',
                                    border: '2px solid #050505',
                                    position: 'relative',
                                    overflow: 'hidden'
                                },
                                className: "jsx-5dfbabb52964cc9e",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#050505',
                                        opacity: 0.1,
                                        height: '100%',
                                        width: '40%',
                                        animation: 'pulse 1.5s ease-in-out infinite',
                                        animationDelay: `${i * 0.1 + 0.2}s`
                                    },
                                    className: "jsx-5dfbabb52964cc9e"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/Funds.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Funds.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/app/home/components/Funds.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/home/components/Funds.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(8px, 0.8vw, 12px)',
                    flex: 1,
                    minHeight: 0
                },
                className: "jsx-5dfbabb52964cc9e",
                children: funds.map((fund)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minHeight: 0
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: 'clamp(8px, 0.75vw, 10px)',
                                    fontWeight: 700,
                                    marginBottom: '5px',
                                    color: '#050505'
                                },
                                className: "jsx-5dfbabb52964cc9e",
                                children: [
                                    fund.name.toUpperCase(),
                                    ": ₹",
                                    fund.current_amount.toLocaleString('en-IN'),
                                    "/₹",
                                    fund.target_amount.toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/Funds.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#F5F5F5',
                                    height: 'clamp(8px, 0.7vw, 10px)',
                                    border: '2px solid #050505',
                                    position: 'relative'
                                },
                                className: "jsx-5dfbabb52964cc9e",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#C4F000',
                                        height: '100%',
                                        width: `${parseFloat(fund.progress)}%`,
                                        transition: 'width 0.5s ease-out'
                                    },
                                    className: "jsx-5dfbabb52964cc9e"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/Funds.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Funds.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, fund.id, true, {
                        fileName: "[project]/app/home/components/Funds.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/home/components/Funds.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "5dfbabb52964cc9e",
                children: "@keyframes pulse{0%,to{opacity:.1}50%{opacity:.2}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/Funds.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FundsCard, "2NHLzZbJQsZA1lUtBHV+bx78PFk=");
_c = FundsCard;
const __TURBOPACK__default__export__ = FundsCard;
var _c;
__turbopack_context__.k.register(_c, "FundsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/ExpenseIncome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ExpenseIncomeCard = ()=>{
    _s();
    const [pieMode, setPieMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('expense');
    const [expenseData, setExpenseData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [incomeData, setIncomeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const categories = [
        {
            "id": "69143d7e-37f8-498b-ba46-a6b5d4af6086",
            "name": "Shopping",
            "type": "expense"
        },
        {
            "id": "6ef718a3-ac9a-492b-b30b-6f80a2855f4b",
            "name": "Freelancing",
            "type": "income"
        },
        {
            "id": "711eac3a-33c6-4011-9f86-548d8fc31e37",
            "name": "Housing",
            "type": "expense"
        },
        {
            "id": "9bcdaf57-3903-42bd-80df-756b29b2be02",
            "name": "Food",
            "type": "expense"
        },
        {
            "id": "e008c9cc-3c5d-46d2-be5a-262f3dce00cd",
            "name": "Health",
            "type": "expense"
        },
        {
            "id": "ee7ddc86-ba98-4c1e-aa02-ae819b388f47",
            "name": "Salary",
            "type": "income"
        },
        {
            "id": "f109cc76-44f8-41e2-883f-d5cee776c885",
            "name": "Transport",
            "type": "expense"
        }
    ];
    const colors = [
        '#C4F000',
        '#050505',
        '#FFFFFF'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpenseIncomeCard.useEffect": ()=>{
            fetchTransactions();
        }
    }["ExpenseIncomeCard.useEffect"], []);
    const fetchTransactions = async ()=>{
        try {
            const response = await fetch('/api/get/transactions');
            const result = await response.json();
            if (result.success && result.data) {
                processTransactions(result.data);
            }
        } catch (error) {
            console.error('Error fetching transactions:', error);
        } finally{
            setLoading(false);
        }
    };
    const processTransactions = (transactions)=>{
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const filteredTransactions = transactions.filter((t)=>{
            const date = new Date(t.date);
            return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
        });
        const expenseMap = {};
        const incomeMap = {};
        filteredTransactions.forEach((t)=>{
            const category = categories.find((c)=>c.id === t.category_id);
            if (!category) return;
            const amount = parseFloat(String(t.amount));
            const categoryName = category.name.toUpperCase();
            if (t.type === 'debit' && category.type === 'expense') {
                expenseMap[categoryName] = (expenseMap[categoryName] || 0) + amount;
            } else if (t.type === 'credit' && category.type === 'income') {
                incomeMap[categoryName] = (incomeMap[categoryName] || 0) + amount;
            }
        });
        const expenseArray = Object.entries(expenseMap).map(([name, value])=>({
                name,
                value
            })).sort((a, b)=>b.value - a.value).slice(0, 3).map((item, i)=>({
                ...item,
                color: colors[i]
            }));
        const incomeArray = Object.entries(incomeMap).map(([name, value])=>({
                name,
                value
            })).sort((a, b)=>b.value - a.value).slice(0, 3).map((item, i)=>({
                ...item,
                color: colors[i]
            }));
        setExpenseData(expenseArray);
        setIncomeData(incomeArray);
    };
    const currentData = pieMode === 'expense' ? expenseData : incomeData;
    const total = currentData.reduce((sum, item)=>sum + item.value, 0);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brutal-shadow",
            style: {
                background: '#FFFFFF',
                border: '3px solid #050505',
                padding: 'clamp(8px, 0.8vw, 12px)',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                minWidth: 0,
                minHeight: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#E5E5E5',
                                height: 'clamp(9px, 0.85vw, 12px)',
                                width: '45%',
                                borderRadius: '2px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#E5E5E5',
                                width: 'clamp(45px, 4.5vw, 55px)',
                                height: 'clamp(16px, 1.5vw, 20px)',
                                borderRadius: '2px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '10px',
                        flex: 1,
                        minHeight: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 200 200",
                        style: {
                            maxWidth: '130px',
                            maxHeight: '130px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "100",
                            r: "80",
                            fill: "#F5F5F5"
                        }, void 0, false, {
                            fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        1,
                        2,
                        3
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '5px',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '11px',
                                                height: '11px',
                                                background: '#E5E5E5',
                                                borderRadius: '2px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: '#E5E5E5',
                                                height: 'clamp(8px, 0.75vw, 10px)',
                                                width: `${70 - i * 15}px`,
                                                borderRadius: '2px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#E5E5E5',
                                        height: 'clamp(8px, 0.75vw, 10px)',
                                        width: `${50 - i * 5}px`,
                                        borderRadius: '2px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/components/ExpenseIncome.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brutal-shadow",
        style: {
            background: '#FFFFFF',
            border: '3px solid #050505',
            padding: 'clamp(8px, 0.8vw, 12px)',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            minWidth: 0,
            minHeight: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(10px, 0.9vw, 12px)',
                            fontWeight: 800,
                            letterSpacing: '1px',
                            color: '#050505'
                        },
                        children: pieMode.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPieMode(pieMode === 'expense' ? 'income' : 'expense'),
                        style: {
                            background: pieMode === 'expense' ? '#C4F000' : '#FFFFFF',
                            color: '#050505',
                            border: '2px solid #050505',
                            padding: 'clamp(4px, 0.45vw, 6px) clamp(8px, 0.8vw, 11px)',
                            fontFamily: "'Syne', sans-serif",
                            fontSize: 'clamp(7px, 0.7vw, 9px)',
                            fontWeight: 800,
                            cursor: 'pointer',
                            letterSpacing: '0.5px'
                        },
                        children: "TOGGLE"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px',
                    flex: 1,
                    minHeight: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 200 200",
                    style: {
                        maxWidth: '130px',
                        maxHeight: '130px'
                    },
                    children: currentData.length > 0 && currentData.map((item, i)=>{
                        const prevTotal = currentData.slice(0, i).reduce((sum, d)=>sum + d.value, 0);
                        const startAngle = prevTotal / total * 360;
                        const endAngle = (prevTotal + item.value) / total * 360;
                        const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                        const startRad = (startAngle - 90) * Math.PI / 180;
                        const endRad = (endAngle - 90) * Math.PI / 180;
                        const x1 = 100 + 80 * Math.cos(startRad);
                        const y1 = 100 + 80 * Math.sin(startRad);
                        const x2 = 100 + 80 * Math.cos(endRad);
                        const y2 = 100 + 80 * Math.sin(endRad);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`,
                            fill: item.color,
                            stroke: "#050505",
                            strokeWidth: "3"
                        }, i, false, {
                            fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                            lineNumber: 235,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: currentData.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '5px',
                            fontSize: 'clamp(9px, 0.85vw, 11px)',
                            fontWeight: 700,
                            color: '#050505'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '11px',
                                            height: '11px',
                                            background: item.color,
                                            border: '2px solid #050505'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "₹",
                                    item.value.toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/home/components/ExpenseIncome.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/ExpenseIncome.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ExpenseIncomeCard, "JO995r7sXkTY7d8aaoqVOY3lsFs=");
_c = ExpenseIncomeCard;
const __TURBOPACK__default__export__ = ExpenseIncomeCard;
var _c;
__turbopack_context__.k.register(_c, "ExpenseIncomeCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/IncomeExpenseChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const IncomeExpenseChartCard = ()=>{
    _s();
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IncomeExpenseChartCard.useEffect": ()=>{
            setMounted(true);
        }
    }["IncomeExpenseChartCard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IncomeExpenseChartCard.useEffect": ()=>{
            if (!mounted) return;
            const fetchTransactions = {
                "IncomeExpenseChartCard.useEffect.fetchTransactions": async ()=>{
                    try {
                        const response = await fetch('api/get/transactions');
                        const result = await response.json();
                        if (result.success) {
                            // Group transactions by month
                            const monthlyData = {};
                            result.data.forEach({
                                "IncomeExpenseChartCard.useEffect.fetchTransactions": (transaction)=>{
                                    const date = new Date(transaction.date);
                                    const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                                    if (!monthlyData[monthYear]) {
                                        monthlyData[monthYear] = {
                                            income: 0,
                                            expense: 0,
                                            month: date.toLocaleDateString('en-US', {
                                                month: 'short'
                                            })
                                        };
                                    }
                                    if (transaction.type === 'credit') {
                                        monthlyData[monthYear].income += transaction.amount;
                                    } else if (transaction.type === 'debit') {
                                        monthlyData[monthYear].expense += transaction.amount;
                                    }
                                }
                            }["IncomeExpenseChartCard.useEffect.fetchTransactions"]);
                            // Get last 4 months
                            const sortedMonths = Object.keys(monthlyData).sort().slice(-4);
                            const chartArray = sortedMonths.map({
                                "IncomeExpenseChartCard.useEffect.fetchTransactions.chartArray": (key)=>monthlyData[key]
                            }["IncomeExpenseChartCard.useEffect.fetchTransactions.chartArray"]);
                            // Calculate max value for percentage scaling
                            const maxValue = Math.max(...chartArray.map({
                                "IncomeExpenseChartCard.useEffect.fetchTransactions.maxValue": (d)=>Math.max(d.income, d.expense)
                            }["IncomeExpenseChartCard.useEffect.fetchTransactions.maxValue"]));
                            // Convert to percentages
                            const chartWithPercentages = chartArray.map({
                                "IncomeExpenseChartCard.useEffect.fetchTransactions.chartWithPercentages": (data)=>({
                                        income: maxValue > 0 ? data.income / maxValue * 100 : 0,
                                        expense: maxValue > 0 ? data.expense / maxValue * 100 : 0,
                                        month: data.month
                                    })
                            }["IncomeExpenseChartCard.useEffect.fetchTransactions.chartWithPercentages"]);
                            setChartData(chartWithPercentages);
                        }
                        setLoading(false);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : 'An error occurred');
                        setLoading(false);
                    }
                }
            }["IncomeExpenseChartCard.useEffect.fetchTransactions"];
            fetchTransactions();
        }
    }["IncomeExpenseChartCard.useEffect"], [
        mounted
    ]);
    // Don't render anything during SSR
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brutal-shadow",
            style: {
                background: '#C4F000',
                border: '3px solid #050505',
                padding: 'clamp(8px, 0.8vw, 12px)',
                color: '#050505',
                display: 'flex',
                flexDirection: 'column',
                flex: '6 1 0',
                minHeight: 0,
                overflow: 'hidden',
                minWidth: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(8px, 1vw, 14px)',
                    fontWeight: 800,
                    marginBottom: '8px',
                    letterSpacing: '1px',
                    color: '#050505'
                },
                children: "INCOME VS EXPENSE"
            }, void 0, false, {
                fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const loadingHeights = [
        {
            income: 65,
            expense: 55
        },
        {
            income: 45,
            expense: 70
        },
        {
            income: 55,
            expense: 60
        },
        {
            income: 70,
            expense: 50
        }
    ];
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brutal-shadow",
            style: {
                background: '#C4F000',
                border: '3px solid #050505',
                padding: 'clamp(8px, 0.8vw, 12px)',
                color: '#050505',
                display: 'flex',
                flexDirection: 'column',
                flex: '6 1 0',
                minHeight: 0,
                overflow: 'hidden',
                minWidth: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(8px, 1vw, 14px)',
                        fontWeight: 800,
                        marginBottom: '8px',
                        letterSpacing: '1px',
                        color: '#050505'
                    },
                    children: "INCOME VS EXPENSE"
                }, void 0, false, {
                    fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: '4px',
                        flex: 1,
                        alignItems: 'flex-end',
                        minHeight: 0
                    },
                    children: loadingHeights.map((heights, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '2px',
                                        alignItems: 'flex-end',
                                        flex: 1,
                                        width: '100%'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                background: '#050505',
                                                height: `${heights.income}%`,
                                                border: '2px solid #050505',
                                                opacity: 0.3,
                                                animation: 'pulse 1.5s ease-in-out infinite'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                background: '#FFFFFF',
                                                height: `${heights.expense}%`,
                                                border: '2px solid #050505',
                                                opacity: 0.3,
                                                animation: 'pulse 1.5s ease-in-out infinite 0.2s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 'clamp(7px, 0.7vw, 10px)',
                                        fontWeight: 700,
                                        marginTop: '4px',
                                        color: '#050505',
                                        opacity: 0.3,
                                        width: '20px',
                                        height: '10px',
                                        background: '#050505',
                                        animation: 'pulse 1.5s ease-in-out infinite 0.4s'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: '10px',
                        marginTop: '6px',
                        fontSize: 'clamp(7px, 0.7vw, 10px)',
                        fontWeight: 700,
                        color: '#050505'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '7px',
                                        height: '7px',
                                        background: '#050505',
                                        border: '2px solid #050505'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "INCOME"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '7px',
                                        height: '7px',
                                        background: '#FFFFFF',
                                        border: '2px solid #050505'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "EXPENSE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.5; }
          }
        `
                }, void 0, false, {
                    fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brutal-shadow",
            style: {
                background: '#C4F000',
                border: '3px solid #050505',
                padding: 'clamp(8px, 0.8vw, 12px)',
                color: '#050505',
                flex: '6 1 0',
                minHeight: 0
            },
            children: [
                "Error: ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
            lineNumber: 207,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brutal-shadow",
        style: {
            background: '#C4F000',
            border: '3px solid #050505',
            padding: 'clamp(8px, 0.8vw, 12px)',
            color: '#050505',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            flex: '6 1 0',
            minHeight: 0,
            overflow: 'hidden',
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(8px, 1vw, 14px)',
                    fontWeight: 800,
                    marginBottom: '8px',
                    letterSpacing: '1px',
                    color: '#050505'
                },
                children: "INCOME VS EXPENSE"
            }, void 0, false, {
                fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '4px',
                    flex: 1,
                    alignItems: 'flex-end',
                    minHeight: 0
                },
                children: chartData.map((data, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '2px',
                                    alignItems: 'flex-end',
                                    flex: 1,
                                    width: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            background: '#050505',
                                            height: `${data.income}%`,
                                            border: '2px solid #050505'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            background: '#FFFFFF',
                                            height: `${data.expense}%`,
                                            border: '2px solid #050505'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 'clamp(7px, 0.7vw, 10px)',
                                    fontWeight: 700,
                                    marginTop: '4px',
                                    color: '#050505'
                                },
                                children: data.month
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '10px',
                    marginTop: '6px',
                    fontSize: 'clamp(7px, 0.7vw, 10px)',
                    fontWeight: 700,
                    color: '#050505'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '7px',
                                    height: '7px',
                                    background: '#050505',
                                    border: '2px solid #050505'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "INCOME"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '7px',
                                    height: '7px',
                                    background: '#FFFFFF',
                                    border: '2px solid #050505'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "EXPENSE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/IncomeExpenseChart.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(IncomeExpenseChartCard, "42gSoj7dbrjeKNr0PFdB2iVMX24=");
_c = IncomeExpenseChartCard;
const __TURBOPACK__default__export__ = IncomeExpenseChartCard;
var _c;
__turbopack_context__.k.register(_c, "IncomeExpenseChartCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/Transactions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const SkeletonLoader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            [
                ...Array(3)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#E8E8E8',
                        border: '2px solid #050505',
                        padding: 'clamp(8px, 0.8vw, 12px)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexShrink: 0,
                        animation: 'pulse 2s infinite'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '12px',
                                        background: '#D0D0D0',
                                        marginBottom: '8px',
                                        width: '70%',
                                        borderRadius: '2px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/Transactions.tsx",
                                    lineNumber: 33,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '10px',
                                        background: '#D0D0D0',
                                        width: '40%',
                                        borderRadius: '2px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/Transactions.tsx",
                                    lineNumber: 40,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/components/Transactions.tsx",
                            lineNumber: 32,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: '16px',
                                background: '#D0D0D0',
                                width: '80px',
                                borderRadius: '2px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/home/components/Transactions.tsx",
                            lineNumber: 47,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/app/home/components/Transactions.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `
            }, void 0, false, {
                fileName: "[project]/app/home/components/Transactions.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
_c = SkeletonLoader;
const TransactionsCard = ()=>{
    _s();
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: 'expense',
        categoryId: '',
        amount: '',
        description: ''
    });
    const accountId = 'b3f6e214-39b2-4689-bdcf-e178497d16da';
    // Hardcoded categories matching your database
    const spendingCategories = [
        {
            id: '9bcdaf57-3903-42bd-80df-756b29b2be02',
            name: 'Food'
        },
        {
            id: 'f109cc76-44f8-41e2-883f-d5cee776c885',
            name: 'Transport'
        },
        {
            id: '711eac3a-33c6-4011-9f86-548d8fc31e37',
            name: 'Housing'
        },
        {
            id: '69143d7e-37f8-498b-ba46-a6b5d4af6086',
            name: 'Shopping'
        },
        {
            id: 'e008c9cc-3c5d-46d2-be5a-262f3dce00cd',
            name: 'Health'
        }
    ];
    const incomeCategories = [
        {
            id: 'ee7ddc86-ba98-4c1e-aa02-ae819b388f47',
            name: 'Salary'
        },
        {
            id: '6ef718a3-ac9a-492b-b30b-6f80a2855f4b',
            name: 'Freelancing'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionsCard.useEffect": ()=>{
            fetchTransactions();
        }
    }["TransactionsCard.useEffect"], []);
    const fetchTransactions = async ()=>{
        try {
            setLoading(true);
            const response = await fetch('/api/get/transactions');
            const result = await response.json();
            if (result.success) {
                setTransactions(result.data);
            }
        } catch (error) {
            console.error('Failed to fetch transactions:', error);
        } finally{
            setLoading(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleTypeChange = (e)=>{
        const type = e.target.value;
        setFormData((prev)=>({
                ...prev,
                type: type,
                categoryId: ''
            }));
    };
    const handleSubmit = async ()=>{
        if (!formData.amount || !formData.description) {
            alert('Please fill all required fields');
            return;
        }
        setSubmitting(true);
        try {
            const today = new Date();
            const dateString = today.toISOString().split('T')[0];
            // Convert expense/income to debit/credit for database
            const dbType = formData.type === 'expense' ? 'debit' : 'credit';
            const response = await fetch('/api/put/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    accountId: accountId,
                    type: dbType,
                    categoryId: formData.categoryId || null,
                    amount: parseFloat(formData.amount),
                    description: formData.description,
                    date: dateString
                })
            });
            const result = await response.json();
            if (result.success) {
                await fetchTransactions();
                setShowAddForm(false);
                setFormData({
                    type: 'expense',
                    categoryId: '',
                    amount: '',
                    description: ''
                });
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            console.error('Failed to create transaction:', error);
            alert('Failed to create transaction');
        } finally{
            setSubmitting(false);
        }
    };
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short'
        }).toUpperCase();
    };
    const getCategories = ()=>{
        return formData.type === 'expense' ? spendingCategories : incomeCategories;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brutal-shadow",
        style: {
            background: '#FFFFFF',
            border: '3px solid #050505',
            padding: 'clamp(8px, 0.8vw, 12px)',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            minWidth: 0,
            minHeight: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(10px, 0.9vw, 13px)',
                            fontWeight: 800,
                            letterSpacing: '1px',
                            color: '#050505'
                        },
                        children: "TRANSACTIONS"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAddForm(!showAddForm),
                        style: {
                            background: showAddForm ? '#FF0000' : '#C4F000',
                            border: '2px solid #050505',
                            width: 'clamp(18px, 1.8vw, 24px)',
                            height: 'clamp(18px, 1.8vw, 24px)',
                            cursor: 'pointer',
                            fontWeight: 800,
                            fontSize: 'clamp(10px, 1vw, 14px)',
                            color: '#050505',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        },
                        children: showAddForm ? '×' : '+'
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/components/Transactions.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '10px',
                    paddingBottom: '10px',
                    borderBottom: '2px solid #050505',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(6px, 0.6vw, 8px)',
                    maxHeight: '300px',
                    overflowY: 'auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontSize: 'clamp(8px, 0.7vw, 9px)',
                            fontWeight: 700,
                            color: '#050505',
                            letterSpacing: '0.5px'
                        },
                        children: "TYPE"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "type",
                        value: formData.type,
                        onChange: handleTypeChange,
                        style: {
                            background: '#FFFFFF',
                            border: '2px solid #050505',
                            padding: 'clamp(8px, 0.8vw, 10px)',
                            fontSize: 'clamp(9px, 0.8vw, 11px)',
                            fontWeight: 600,
                            color: '#050505'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "expense",
                                children: "SPENDING"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Transactions.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "income",
                                children: "INCOME"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Transactions.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontSize: 'clamp(8px, 0.7vw, 9px)',
                            fontWeight: 700,
                            color: '#050505',
                            letterSpacing: '0.5px',
                            marginTop: '4px'
                        },
                        children: "CATEGORY (OPTIONAL)"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "categoryId",
                        value: formData.categoryId,
                        onChange: handleInputChange,
                        style: {
                            background: '#FFFFFF',
                            border: '2px solid #050505',
                            padding: 'clamp(8px, 0.8vw, 10px)',
                            fontSize: 'clamp(9px, 0.8vw, 11px)',
                            fontWeight: 600,
                            color: '#050505'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "SELECT CATEGORY"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Transactions.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            getCategories().map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: cat.id,
                                    children: cat.name.toUpperCase()
                                }, cat.id, false, {
                                    fileName: "[project]/app/home/components/Transactions.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontSize: 'clamp(8px, 0.7vw, 9px)',
                            fontWeight: 700,
                            color: '#050505',
                            letterSpacing: '0.5px',
                            marginTop: '4px'
                        },
                        children: "AMOUNT"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        name: "amount",
                        placeholder: "Enter amount",
                        value: formData.amount,
                        onChange: handleInputChange,
                        min: "0.01",
                        step: "0.01",
                        style: {
                            background: '#FFFFFF',
                            border: '2px solid #050505',
                            padding: 'clamp(8px, 0.8vw, 10px)',
                            fontSize: 'clamp(9px, 0.8vw, 11px)',
                            fontWeight: 600,
                            color: '#050505'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontSize: 'clamp(8px, 0.7vw, 9px)',
                            fontWeight: 700,
                            color: '#050505',
                            letterSpacing: '0.5px',
                            marginTop: '4px'
                        },
                        children: "TRANSACTION NAME"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "description",
                        placeholder: "Enter transaction name",
                        value: formData.description,
                        onChange: handleInputChange,
                        style: {
                            background: '#FFFFFF',
                            border: '2px solid #050505',
                            padding: 'clamp(8px, 0.8vw, 10px)',
                            fontSize: 'clamp(9px, 0.8vw, 11px)',
                            fontWeight: 600,
                            color: '#050505'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        disabled: submitting,
                        style: {
                            background: '#C4F000',
                            border: '2px solid #050505',
                            padding: 'clamp(8px, 0.8vw, 10px)',
                            fontSize: 'clamp(9px, 0.8vw, 11px)',
                            fontWeight: 800,
                            cursor: submitting ? 'not-allowed' : 'pointer',
                            opacity: submitting ? 0.6 : 1,
                            marginTop: '4px',
                            color: '#050505'
                        },
                        children: submitting ? 'ADDING...' : 'ADD TRANSACTION'
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/components/Transactions.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(6px, 0.6vw, 10px)',
                    minHeight: 0,
                    overflow: 'auto'
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {}, void 0, false, {
                    fileName: "[project]/app/home/components/Transactions.tsx",
                    lineNumber: 380,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: 'clamp(12px, 1.2vw, 16px)',
                        textAlign: 'center',
                        fontSize: 'clamp(7px, 0.6vw, 9px)',
                        fontWeight: 600,
                        color: '#050505'
                    },
                    children: "NO TRANSACTIONS"
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Transactions.tsx",
                    lineNumber: 382,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : transactions.map((txn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: txn.type === 'credit' ? '#C4F000' : '#FFFFFF',
                            border: '2px solid #050505',
                            padding: 'clamp(8px, 0.8vw, 12px)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 'clamp(10px, 0.9vw, 13px)',
                                            fontWeight: 700,
                                            color: '#050505'
                                        },
                                        children: txn.description || 'TRANSACTION'
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/components/Transactions.tsx",
                                        lineNumber: 403,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 'clamp(8px, 0.7vw, 10px)',
                                            color: '#050505',
                                            marginTop: '2px'
                                        },
                                        children: formatDate(txn.date)
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/components/Transactions.tsx",
                                        lineNumber: 410,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/Transactions.tsx",
                                lineNumber: 402,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: 'clamp(12px, 1.1vw, 15px)',
                                    fontWeight: 800,
                                    color: txn.type === 'credit' ? '#00AA00' : '#FF0000'
                                },
                                children: [
                                    txn.type === 'credit' ? '+' : '-',
                                    "₹",
                                    Math.abs(txn.amount).toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/Transactions.tsx",
                                lineNumber: 418,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, txn.id, true, {
                        fileName: "[project]/app/home/components/Transactions.tsx",
                        lineNumber: 393,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/home/components/Transactions.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/Transactions.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TransactionsCard, "6P3ViEEleIC3D8FpRX4txnyylyM=");
_c1 = TransactionsCard;
const __TURBOPACK__default__export__ = TransactionsCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "SkeletonLoader");
__turbopack_context__.k.register(_c1, "TransactionsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/Borrowings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const LendingBorrowingCard = ()=>{
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LendingBorrowingCard.useEffect": ()=>{
            const fetchLendings = {
                "LendingBorrowingCard.useEffect.fetchLendings": async ()=>{
                    try {
                        const response = await fetch('/api/get/lendings');
                        const result = await response.json();
                        if (result.success && result.data) {
                            const ongoing = result.data.filter({
                                "LendingBorrowingCard.useEffect.fetchLendings.ongoing": (item)=>item.status === 'ongoing'
                            }["LendingBorrowingCard.useEffect.fetchLendings.ongoing"]).slice(0, 2);
                            setItems(ongoing);
                        }
                        setLoading(false);
                    } catch (error) {
                        console.error('Error fetching lendings:', error);
                        setLoading(false);
                    }
                }
            }["LendingBorrowingCard.useEffect.fetchLendings"];
            fetchLendings();
        }
    }["LendingBorrowingCard.useEffect"], []);
    const formatAmount = (amount)=>{
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };
    const calculateMonthlyEMI = (principal, rate, months)=>{
        if (rate === 0) return 0;
        const monthlyRate = rate / (12 * 100);
        const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
        return emi;
    };
    const getMonthsRemaining = (startDate, dueDate)=>{
        const start = new Date(startDate);
        const end = new Date(dueDate);
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        return months;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brutal-shadow",
        style: {
            background: '#C4F000',
            border: '3px solid #050505',
            padding: 'clamp(8px, 0.8vw, 12px)',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            minWidth: 0,
            minHeight: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '10px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(8px, 0.7vw, 10px)',
                        fontWeight: 800,
                        letterSpacing: '1px',
                        color: '#050505'
                    },
                    children: "BORROWINGS & LENDINGS"
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Borrowings.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/home/components/Borrowings.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(6px, 0.6vw, 10px)',
                    flex: 1,
                    minHeight: 0
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#FFFFFF',
                                border: '2px solid #050505',
                                padding: 'clamp(8px, 0.8vw, 12px)',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '12px',
                                        background: '#E5E7EB',
                                        marginBottom: '6px',
                                        width: '40%',
                                        marginLeft: 'auto'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/Borrowings.tsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '14px',
                                        background: '#E5E7EB',
                                        marginBottom: '6px',
                                        width: '70%'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/Borrowings.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '8px',
                                        background: '#E5E7EB',
                                        border: '2px solid #050505',
                                        marginBottom: '6px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/Borrowings.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '10px',
                                        background: '#E5E7EB',
                                        width: '60%'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/Borrowings.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/app/home/components/Borrowings.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false) : items.length > 0 ? items.map((item, i)=>{
                    const percentPaid = (item.principal - item.remaining_amount) / item.principal * 100;
                    const percentRemaining = 100 - percentPaid;
                    const totalMonths = getMonthsRemaining(item.start_date, item.due_date);
                    const monthlyEMI = item.recurrence === 'emi' ? calculateMonthlyEMI(item.principal, item.interest_rate, totalMonths) : 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#FFFFFF',
                            border: '2px solid #050505',
                            padding: 'clamp(8px, 0.8vw, 12px)',
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#C4F000',
                                    border: '2px solid #050505',
                                    padding: '2px 6px',
                                    alignSelf: 'flex-end',
                                    marginBottom: '6px',
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: 'clamp(7px, 0.6vw, 8px)',
                                    fontWeight: 800,
                                    letterSpacing: '0.5px',
                                    color: '#050505'
                                },
                                children: item.type === 'borrowed' ? 'BORROWED' : 'LENT'
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Borrowings.tsx",
                                lineNumber: 144,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: 'clamp(9px, 0.8vw, 11px)',
                                    fontWeight: 800,
                                    lineHeight: '1.3',
                                    color: '#050505',
                                    marginBottom: '6px'
                                },
                                children: item.party_name
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Borrowings.tsx",
                                lineNumber: 160,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '8px',
                                    background: '#FFFFFF',
                                    border: '2px solid #050505',
                                    display: 'flex',
                                    marginBottom: '6px',
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: `${percentPaid}%`,
                                        background: '#C4F000',
                                        borderRight: percentPaid > 0 && percentPaid < 100 ? '1px solid #050505' : 'none',
                                        transition: 'width 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/Borrowings.tsx",
                                    lineNumber: 180,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Borrowings.tsx",
                                lineNumber: 172,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 'clamp(8px, 0.75vw, 10px)',
                                            fontWeight: 700,
                                            color: '#050505'
                                        },
                                        children: [
                                            formatAmount(item.remaining_amount),
                                            " DUE"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/components/Borrowings.tsx",
                                        lineNumber: 190,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    monthlyEMI > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 'clamp(8px, 0.75vw, 10px)',
                                            fontWeight: 700,
                                            color: '#050505'
                                        },
                                        children: [
                                            "EMI: ",
                                            formatAmount(monthlyEMI)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/components/Borrowings.tsx",
                                        lineNumber: 198,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/Borrowings.tsx",
                                lineNumber: 189,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/app/home/components/Borrowings.tsx",
                        lineNumber: 134,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#FFFFFF',
                        border: '2px solid #050505',
                        padding: 'clamp(8px, 0.8vw, 12px)',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(8px, 0.7vw, 10px)',
                        fontWeight: 600,
                        color: '#050505'
                    },
                    children: "NO ACTIVE LOANS"
                }, void 0, false, {
                    fileName: "[project]/app/home/components/Borrowings.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/home/components/Borrowings.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/Borrowings.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LendingBorrowingCard, "X0A+44AtCQpjgFsTFhgdow3TGVs=");
_c = LendingBorrowingCard;
const __TURBOPACK__default__export__ = LendingBorrowingCard;
var _c;
__turbopack_context__.k.register(_c, "LendingBorrowingCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/Portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PortfolioCard = ()=>{
    _s();
    const [portfolio, setPortfolio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        stocks: {
            value: 0,
            returns: 0
        },
        mf: {
            value: 0,
            returns: 0
        },
        gold: {
            value: 0,
            returns: 0
        }
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioCard.useEffect": ()=>{
            const fetchPortfolio = {
                "PortfolioCard.useEffect.fetchPortfolio": async ()=>{
                    try {
                        const response = await fetch('/api/get/portfolio');
                        const result = await response.json();
                        if (result.success) {
                            // Group by type and calculate cumulative values
                            const grouped = {
                                stocks: {
                                    value: 0,
                                    returns: 0
                                },
                                mf: {
                                    value: 0,
                                    returns: 0
                                },
                                gold: {
                                    value: 0,
                                    returns: 0
                                }
                            };
                            let stocksInvestment = 0;
                            let stocksProfit = 0;
                            let mfInvestment = 0;
                            let mfProfit = 0;
                            result.data.forEach({
                                "PortfolioCard.useEffect.fetchPortfolio": (item)=>{
                                    const currentValue = parseFloat(item.current_value);
                                    const profitLoss = parseFloat(item.profit_loss);
                                    if (item.type === 'stock') {
                                        grouped.stocks.value += currentValue;
                                        stocksInvestment += currentValue - profitLoss;
                                        stocksProfit += profitLoss;
                                    } else if (item.type === 'mf') {
                                        grouped.mf.value += currentValue;
                                        mfInvestment += currentValue - profitLoss;
                                        mfProfit += profitLoss;
                                    } else if (item.type === 'gold') {
                                        grouped.gold.value += currentValue;
                                    }
                                }
                            }["PortfolioCard.useEffect.fetchPortfolio"]);
                            // Calculate returns percentage
                            if (stocksInvestment > 0) {
                                grouped.stocks.returns = stocksProfit / stocksInvestment * 100;
                            }
                            if (mfInvestment > 0) {
                                grouped.mf.returns = mfProfit / mfInvestment * 100;
                            }
                            setPortfolio(grouped);
                        }
                    } catch (error) {
                        console.error('Error fetching portfolio:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["PortfolioCard.useEffect.fetchPortfolio"];
            fetchPortfolio();
        }
    }["PortfolioCard.useEffect"], []);
    const portfolioDisplay = [
        {
            name: 'SIP',
            amount: portfolio.mf.value,
            returns: portfolio.mf.returns
        },
        {
            name: 'GOLD',
            amount: portfolio.gold.value,
            returns: portfolio.gold.returns
        },
        {
            name: 'STOCKS',
            amount: portfolio.stocks.value,
            returns: portfolio.stocks.returns
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            gridColumn: 'span 2',
            background: '#C4F000',
            border: '3px solid #050505',
            padding: 'clamp(10px, 1vw, 14px)',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            minWidth: 0,
            minHeight: 0
        },
        className: "jsx-5dfbabb52964cc9e" + " " + "brutal-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(10px, 1vw, 14px)',
                    fontWeight: 800,
                    marginBottom: '12px',
                    letterSpacing: '1px',
                    color: '#050505'
                },
                className: "jsx-5dfbabb52964cc9e",
                children: "PORTFOLIO"
            }, void 0, false, {
                fileName: "[project]/app/home/components/Portfolio.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 'clamp(8px, 0.8vw, 10px)',
                    flex: 1,
                    minHeight: 0
                },
                className: "jsx-5dfbabb52964cc9e",
                children: [
                    1,
                    2,
                    3
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: '#FFFFFF',
                            border: '2px solid #050505',
                            padding: 'clamp(10px, 1vw, 14px)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minWidth: 0
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#050505',
                                    opacity: 0.1,
                                    height: 'clamp(8px, 0.7vw, 10px)',
                                    width: '50%',
                                    marginBottom: '8px',
                                    borderRadius: '4px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: `${i * 0.1}s`
                                },
                                className: "jsx-5dfbabb52964cc9e"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Portfolio.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#050505',
                                    opacity: 0.1,
                                    height: 'clamp(12px, 1.1vw, 15px)',
                                    width: '70%',
                                    marginBottom: '6px',
                                    borderRadius: '4px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: `${i * 0.1 + 0.2}s`
                                },
                                className: "jsx-5dfbabb52964cc9e"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Portfolio.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#050505',
                                    opacity: 0.1,
                                    height: 'clamp(10px, 0.9vw, 12px)',
                                    width: '40%',
                                    borderRadius: '4px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: `${i * 0.1 + 0.4}s`
                                },
                                className: "jsx-5dfbabb52964cc9e"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Portfolio.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/app/home/components/Portfolio.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/home/components/Portfolio.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 'clamp(8px, 0.8vw, 10px)',
                    flex: 1,
                    minHeight: 0
                },
                className: "jsx-5dfbabb52964cc9e",
                children: portfolioDisplay.map((item, i)=>{
                    const bgColor = item.name === 'SIP' ? '#FFFFFF' : '#FFFFFF';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: bgColor,
                            border: '2px solid #050505',
                            padding: 'clamp(10px, 1vw, 14px)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minWidth: 0
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 'clamp(8px, 0.75vw, 10px)',
                                    fontWeight: 700,
                                    marginBottom: '8px',
                                    color: '#050505'
                                },
                                className: "jsx-5dfbabb52964cc9e",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Portfolio.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: 'clamp(14px, 1.3vw, 18px)',
                                    fontWeight: 800,
                                    marginBottom: '6px',
                                    color: '#050505'
                                },
                                className: "jsx-5dfbabb52964cc9e",
                                children: [
                                    "₹",
                                    Math.round(item.amount).toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/Portfolio.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 'clamp(8px, 0.7vw, 9px)',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    color: item.returns > 0 ? '#050505' : '#FF0000'
                                },
                                className: "jsx-5dfbabb52964cc9e",
                                children: item.returns !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        item.returns > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            size: 11
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/components/Portfolio.tsx",
                                            lineNumber: 194,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                            size: 11
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/components/Portfolio.tsx",
                                            lineNumber: 194,
                                            columnNumber: 68
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        item.returns > 0 ? '+' : '',
                                        item.returns.toFixed(2),
                                        "%"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Portfolio.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/app/home/components/Portfolio.tsx",
                        lineNumber: 157,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/app/home/components/Portfolio.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "5dfbabb52964cc9e",
                children: "@keyframes pulse{0%,to{opacity:.1}50%{opacity:.2}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/Portfolio.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PortfolioCard, "4X+l5/2voL/1N0bjC6KeWDQCqzI=");
_c = PortfolioCard;
const __TURBOPACK__default__export__ = PortfolioCard;
var _c;
__turbopack_context__.k.register(_c, "PortfolioCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/Billboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const BillboardCard = ()=>{
    _s();
    const [bills, setBills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BillboardCard.useEffect": ()=>{
            const fetchBills = {
                "BillboardCard.useEffect.fetchBills": async ()=>{
                    try {
                        const response = await fetch('/api/get/bills');
                        const result = await response.json();
                        if (result.success) {
                            // Get the first 2 bills
                            const topBills = result.data.slice(0, 2);
                            setBills(topBills);
                        }
                    } catch (error) {
                        console.error('Error fetching bills:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["BillboardCard.useEffect.fetchBills"];
            fetchBills();
        }
    }["BillboardCard.useEffect"], []);
    const formatDueDate = (dateString)=>{
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('en-US', {
            month: 'short'
        }).toUpperCase();
        return `${day} ${month}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            gridColumn: 'span 2',
            background: '#FFFFFF',
            border: '3px solid #050505',
            padding: 'clamp(10px, 1vw, 14px)',
            color: '#050505',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            minWidth: 0,
            minHeight: 0
        },
        className: "jsx-5dfbabb52964cc9e" + " " + "brutal-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(10px, 1vw, 14px)',
                    fontWeight: 800,
                    marginBottom: '12px',
                    letterSpacing: '1px',
                    color: '#050505'
                },
                className: "jsx-5dfbabb52964cc9e",
                children: "BILLBOARD"
            }, void 0, false, {
                fileName: "[project]/app/home/components/Billboard.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 'clamp(10px, 1vw, 12px)',
                    flex: 1,
                    minHeight: 0
                },
                className: "jsx-5dfbabb52964cc9e",
                children: [
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: '#F5F5F5',
                            border: '2px solid #050505',
                            padding: 'clamp(10px, 1vw, 14px)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minWidth: 0
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#050505',
                                    opacity: 0.1,
                                    height: 'clamp(8px, 0.7vw, 10px)',
                                    width: '60%',
                                    marginBottom: '8px',
                                    borderRadius: '4px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: `${i * 0.1}s`
                                },
                                className: "jsx-5dfbabb52964cc9e"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Billboard.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#050505',
                                    opacity: 0.1,
                                    height: 'clamp(14px, 1.2vw, 18px)',
                                    width: '80%',
                                    marginBottom: '6px',
                                    borderRadius: '4px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: `${i * 0.1 + 0.2}s`
                                },
                                className: "jsx-5dfbabb52964cc9e"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Billboard.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#050505',
                                    opacity: 0.1,
                                    height: 'clamp(7px, 0.6vw, 9px)',
                                    width: '50%',
                                    borderRadius: '4px',
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: `${i * 0.1 + 0.4}s`
                                },
                                className: "jsx-5dfbabb52964cc9e"
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Billboard.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/app/home/components/Billboard.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/home/components/Billboard.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 'clamp(10px, 1vw, 12px)',
                    flex: 1,
                    minHeight: 0
                },
                className: "jsx-5dfbabb52964cc9e",
                children: bills.map((bill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: '#C4F000',
                            border: '2px solid #050505',
                            padding: 'clamp(10px, 1vw, 14px)',
                            color: '#050505',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minWidth: 0
                        },
                        className: "jsx-5dfbabb52964cc9e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 'clamp(8px, 0.75vw, 10px)',
                                    fontWeight: 700,
                                    marginBottom: '8px',
                                    color: '#050505'
                                },
                                className: "jsx-5dfbabb52964cc9e",
                                children: bill.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/home/components/Billboard.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: 'clamp(14px, 1.3vw, 18px)',
                                    fontWeight: 800,
                                    marginBottom: '6px',
                                    color: '#050505'
                                },
                                className: "jsx-5dfbabb52964cc9e",
                                children: [
                                    "₹",
                                    bill.amount.toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/Billboard.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 'clamp(8px, 0.7vw, 9px)',
                                    fontWeight: 700,
                                    color: '#050505'
                                },
                                className: "jsx-5dfbabb52964cc9e",
                                children: [
                                    "DUE: ",
                                    formatDueDate(bill.due_date)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/components/Billboard.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, bill.id, true, {
                        fileName: "[project]/app/home/components/Billboard.tsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/home/components/Billboard.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "5dfbabb52964cc9e",
                children: "@keyframes pulse{0%,to{opacity:.1}50%{opacity:.2}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/Billboard.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BillboardCard, "W/CfOH0oLFMJtZDuAcG3ayUN7zU=");
_c = BillboardCard;
const __TURBOPACK__default__export__ = BillboardCard;
var _c;
__turbopack_context__.k.register(_c, "BillboardCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/components/ui/Notification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
;
;
const NotificationPopup = ({ showNotifications, setShowNotifications })=>{
    const notifications = [
        {
            id: 1,
            text: "Your rent payment is due in 3 days",
            time: "2h ago",
            type: "warning"
        },
        {
            id: 2,
            text: "You've earned 50 PAISHE points!",
            time: "5h ago",
            type: "success"
        },
        {
            id: 3,
            text: "New tax filing deadline approaching",
            time: "1d ago",
            type: "info"
        },
        {
            id: 4,
            text: "Budget limit reached for Shopping",
            time: "2d ago",
            type: "alert"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onMouseEnter: ()=>setShowNotifications(true),
                onMouseLeave: ()=>setShowNotifications(false),
                style: {
                    background: '#FFFFFF',
                    border: '2px solid #050505',
                    padding: '6px',
                    cursor: 'pointer',
                    boxShadow: showNotifications ? '1px 1px 0 #050505' : '2px 2px 0 #050505',
                    transform: showNotifications ? 'translate(1px, 1px)' : 'translate(0, 0)',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    size: 14,
                    strokeWidth: 2.5
                }, void 0, false, {
                    fileName: "[project]/app/home/components/ui/Notification.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/home/components/ui/Notification.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showNotifications && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: ()=>setShowNotifications(true),
                onMouseLeave: ()=>setShowNotifications(false),
                style: {
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    background: '#FFFFFF',
                    border: '3px solid #050505',
                    boxShadow: '4px 4px 0 #050505',
                    width: '320px',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    zIndex: 1000,
                    fontFamily: "'Space Grotesk', monospace"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '12px 16px',
                            borderBottom: '2px solid #050505',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '12px',
                            fontWeight: 800,
                            letterSpacing: '0.5px'
                        },
                        children: "NOTIFICATIONS"
                    }, void 0, false, {
                        fileName: "[project]/app/home/components/ui/Notification.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    notifications.map((notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '12px 16px',
                                borderBottom: '2px solid #E8E8E8',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = '#F5F5F5';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = '#FFFFFF';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        marginBottom: '4px',
                                        color: '#050505'
                                    },
                                    children: notif.text
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/ui/Notification.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '9px',
                                        color: '#666',
                                        fontWeight: 500
                                    },
                                    children: notif.time
                                }, void 0, false, {
                                    fileName: "[project]/app/home/components/ui/Notification.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, notif.id, true, {
                            fileName: "[project]/app/home/components/ui/Notification.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/components/ui/Notification.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/components/ui/Notification.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NotificationPopup;
const __TURBOPACK__default__export__ = NotificationPopup;
var _c;
__turbopack_context__.k.register(_c, "NotificationPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/Balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$SpendMeter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/SpendMeter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Forecast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/Forecast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Funds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/Funds.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$ExpenseIncome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/ExpenseIncome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$IncomeExpenseChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/IncomeExpenseChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Transactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/Transactions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Borrowings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/Borrowings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Portfolio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/Portfolio.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Billboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/Billboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/home/components/ui/Notification.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Dashboard = ()=>{
    _s();
    const [hoveredButton, setHoveredButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showNotifications, setShowNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNavigation = (path)=>{
        window.location.href = path;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "'Space Grotesk', monospace",
            background: '#F5F5F5',
            minHeight: '100vh',
            padding: '1vw',
            boxSizing: 'border-box',
            backgroundImage: `repeating-conic-gradient(#050505 0% 25%, #E8E8E8 0% 50%) 50% / 40px 40px`,
            backgroundSize: '40px 40px',
            backgroundAttachment: 'fixed'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;700&family=Hind+Guntur:wght@700&family=Inter:wght@700;800&display=swap');
        
        .brutal-shadow {
          box-shadow: 0.3vw 0.3vw 0 #050505;
        }
        
        .brutal-shadow:hover {
          transform: translate(0.15vw, 0.15vw);
          box-shadow: 0.15vw 0.15vw 0 #050505;
        }

        button {
          transition: all 0.2s ease;
        }

        * {
          box-sizing: border-box;
        }

        .card-link {
          text-decoration: none;
          color: inherit;
          display: contents;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '4px 0',
                    marginBottom: '6px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Syne', sans-serif",
                            fontSize: 'clamp(14px, 1.4vw, 18px)',
                            fontWeight: 800,
                            color: '#050505',
                            letterSpacing: '1.5px'
                        },
                        children: "GANDHI"
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(8px, 0.7vw, 10px)',
                            fontWeight: 700,
                            color: '#050505'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                showNotifications: showNotifications,
                                setShowNotifications: setShowNotifications
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    letterSpacing: '0.5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#C4F000',
                                        border: '2px solid #050505',
                                        padding: '4px 8px',
                                        fontWeight: 800
                                    },
                                    children: "PAISHE: 2,450"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavigation('/leaderboard'),
                                style: {
                                    background: '#FFFFFF',
                                    border: '2px solid #050505',
                                    padding: '4px 8px',
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: 'clamp(8px, 0.7vw, 10px)',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    letterSpacing: '0.5px',
                                    color: '#050505',
                                    boxShadow: '2px 2px 0 #050505',
                                    transition: 'all 0.2s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = 'translate(1px, 1px)';
                                    e.currentTarget.style.boxShadow = '1px 1px 0 #050505';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = 'translate(0, 0)';
                                    e.currentTarget.style.boxShadow = '2px 2px 0 #050505';
                                },
                                children: "LEADERBOARD: #127"
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    letterSpacing: '0.5px',
                                    fontWeight: 600,
                                    color: '#666'
                                },
                                children: "demo@gandhi.money"
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: '1.4 fr 1.5fr 0.8fr 0.8fr',
                    gap: 'clamp(8px, 0.8vw, 12px)',
                    height: 'calc(100vh - 60px)',
                    maxWidth: '100%',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/balance",
                        className: "card-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                minHeight: 0,
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/spend",
                        className: "card-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                minHeight: 0,
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$SpendMeter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/forecast",
                        className: "card-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                minHeight: 0,
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Forecast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/funds",
                        className: "card-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                minHeight: 0,
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Funds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/expense-income",
                        className: "card-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$ExpenseIncome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'clamp(4px, 0.6vw, 8px)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/chart",
                                className: "card-link",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$IncomeExpenseChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gap: 'clamp(4px, 0.4vw, 6px)',
                                    flex: '0.02 0 auto'
                                },
                                children: [
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
                                        bg: '#C4F000',
                                        path: '/smartbuy'
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                        bg: '#FFFFFF',
                                        path: '/tax'
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
                                        bg: '#C4F000',
                                        path: '/plan'
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                        bg: '#FFFFFF',
                                        path: '/chat'
                                    }
                                ].map((btn, i)=>{
                                    const Icon = btn.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNavigation(btn.path),
                                        onMouseEnter: ()=>setHoveredButton(i),
                                        onMouseLeave: ()=>setHoveredButton(null),
                                        className: hoveredButton === i ? '' : 'brutal-shadow',
                                        style: {
                                            background: btn.bg,
                                            border: '3px solid #050505',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            color: '#050505',
                                            padding: '0',
                                            aspectRatio: '1 / 1',
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 14,
                                            strokeWidth: 3
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, i, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/transactions",
                        className: "card-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Transactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/borrowings",
                        className: "card-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Borrowings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/portfolio",
                        className: "card-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Portfolio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/billboard",
                        className: "card-link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$home$2f$components$2f$Billboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dashboard, "reWJwVz3eBbKIpopy0dUGIxTZT8=");
_c = Dashboard;
const __TURBOPACK__default__export__ = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_home_f9012e4c._.js.map