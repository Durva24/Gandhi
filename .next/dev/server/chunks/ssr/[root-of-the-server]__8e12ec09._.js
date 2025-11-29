module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/api/chat/context.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/tax/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaxAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$chat$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/chat/context.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function TaxAssistant() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedIncome, setSelectedIncome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [selectedExpenses, setSelectedExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [analyzing, setAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generating, setGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [taxReport, setTaxReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$chat$2f$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFinancialContext"])();
            setData(result);
            setSelectedIncome(new Set([
                'salary',
                'freelance'
            ]));
            setSelectedExpenses(new Set([
                'rent',
                'investments'
            ]));
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };
    const generateTaxReport = async ()=>{
        setAnalyzing(true);
        await new Promise((resolve)=>setTimeout(resolve, 2500));
        const totalIncome = data.income.monthly_salary * 12 + 56050;
        const standardDeduction = 50000;
        const section80C = 150000;
        const taxableIncome = Math.max(0, totalIncome - standardDeduction - section80C);
        let tax = 0;
        if (taxableIncome > 1500000) {
            tax = 187500 + (taxableIncome - 1500000) * 0.30;
        } else if (taxableIncome > 1200000) {
            tax = 150000 + (taxableIncome - 1200000) * 0.20;
        } else if (taxableIncome > 900000) {
            tax = 90000 + (taxableIncome - 900000) * 0.15;
        } else if (taxableIncome > 600000) {
            tax = 45000 + (taxableIncome - 600000) * 0.10;
        } else if (taxableIncome > 300000) {
            tax = (taxableIncome - 300000) * 0.05;
        }
        const cess = tax * 0.04;
        const totalTax = tax + cess;
        const report = {
            totalIncome,
            standardDeduction,
            section80C,
            taxableIncome,
            tax,
            cess,
            totalTax,
            effectiveRate: (totalTax / totalIncome * 100).toFixed(2)
        };
        setTaxReport(report);
        setAnalyzing(false);
    };
    const downloadPDF = ()=>{
        setGenerating(true);
        setTimeout(()=>{
            const { jsPDF } = window.jsPDF;
            const doc = new jsPDF();
            doc.setFillColor(196, 240, 0);
            doc.rect(0, 0, 210, 40, 'F');
            doc.setFontSize(24);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(5, 5, 5);
            doc.text('TAX REPORT FY 2025-26', 20, 25);
            doc.setFontSize(10);
            doc.text('Generated by Gandhi AI Tax Assistant', 20, 33);
            doc.setFontSize(11);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(5, 5, 5);
            doc.text('INCOME SUMMARY', 20, 55);
            doc.setDrawColor(5, 5, 5);
            doc.setLineWidth(0.5);
            doc.line(20, 58, 190, 58);
            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');
            doc.text(`Salary Income (Annual)`, 20, 68);
            doc.text(`₹${(data.income.monthly_salary * 12).toLocaleString('en-IN')}`, 160, 68, {
                align: 'right'
            });
            doc.text(`Freelance Income (Annual)`, 20, 76);
            doc.text(`₹56,050`, 160, 76, {
                align: 'right'
            });
            doc.setFont(undefined, 'bold');
            doc.text(`Total Gross Income`, 20, 86);
            doc.text(`₹${taxReport.totalIncome.toLocaleString('en-IN')}`, 160, 86, {
                align: 'right'
            });
            doc.setFont(undefined, 'bold');
            doc.text('DEDUCTIONS', 20, 100);
            doc.line(20, 103, 190, 103);
            doc.setFont(undefined, 'normal');
            doc.text(`Standard Deduction u/s 16`, 20, 113);
            doc.text(`₹${taxReport.standardDeduction.toLocaleString('en-IN')}`, 160, 113, {
                align: 'right'
            });
            doc.text(`Section 80C (PPF, ELSS, Insurance)`, 20, 121);
            doc.text(`₹${taxReport.section80C.toLocaleString('en-IN')}`, 160, 121, {
                align: 'right'
            });
            doc.setFont(undefined, 'bold');
            doc.text(`Total Deductions`, 20, 131);
            doc.text(`₹${(taxReport.standardDeduction + taxReport.section80C).toLocaleString('en-IN')}`, 160, 131, {
                align: 'right'
            });
            doc.setFillColor(196, 240, 0);
            doc.rect(15, 140, 180, 12, 'F');
            doc.setFont(undefined, 'bold');
            doc.setFontSize(11);
            doc.text(`TAXABLE INCOME`, 20, 148);
            doc.text(`₹${taxReport.taxableIncome.toLocaleString('en-IN')}`, 160, 148, {
                align: 'right'
            });
            doc.setFontSize(10);
            doc.setFont(undefined, 'bold');
            doc.text('TAX CALCULATION', 20, 165);
            doc.line(20, 168, 190, 168);
            doc.setFont(undefined, 'normal');
            doc.text(`Income Tax`, 20, 178);
            doc.text(`₹${Math.round(taxReport.tax).toLocaleString('en-IN')}`, 160, 178, {
                align: 'right'
            });
            doc.text(`Health & Education Cess (4%)`, 20, 186);
            doc.text(`₹${Math.round(taxReport.cess).toLocaleString('en-IN')}`, 160, 186, {
                align: 'right'
            });
            doc.setFillColor(220, 38, 38);
            doc.rect(15, 195, 180, 12, 'F');
            doc.setFont(undefined, 'bold');
            doc.setFontSize(11);
            doc.setTextColor(255, 255, 255);
            doc.text(`TOTAL TAX LIABILITY`, 20, 203);
            doc.text(`₹${Math.round(taxReport.totalTax).toLocaleString('en-IN')}`, 160, 203, {
                align: 'right'
            });
            doc.setTextColor(5, 5, 5);
            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');
            doc.text(`Effective Tax Rate: ${taxReport.effectiveRate}%`, 20, 215);
            doc.setFont(undefined, 'bold');
            doc.text('AI RECOMMENDATIONS', 20, 230);
            doc.line(20, 233, 190, 233);
            doc.setFont(undefined, 'normal');
            const recommendations = [
                'Maximize 80C deductions - Currently using ₹1,50,000',
                'Consider 80D for health insurance premium (up to ₹25,000)',
                'Explore NPS for additional ₹50,000 deduction under 80CCD(1B)',
                'Home loan interest can be claimed under 24(b) if applicable',
                'HRA exemption if rent > 10% of salary'
            ];
            let yPos = 243;
            recommendations.forEach((rec)=>{
                doc.text(rec, 25, yPos);
                yPos += 8;
            });
            doc.setFontSize(8);
            doc.setTextColor(100, 100, 100);
            doc.text('This report is generated by AI and should be reviewed by a tax professional.', 20, 280);
            doc.text(`Generated on: ${new Date().toLocaleDateString('en-IN')}`, 20, 285);
            doc.save('Tax_Report_FY2025-26.pdf');
            setGenerating(false);
        }, 1500);
    };
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: '100vh',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '14px',
                    fontWeight: 700
                },
                children: "LOADING..."
            }, void 0, false, {
                fileName: "[project]/app/tax/page.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tax/page.tsx",
            lineNumber: 207,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: '100vh',
            background: '#ffffff',
            fontFamily: "'Inter', sans-serif",
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '2px solid #050505'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/home",
                                style: {
                                    background: '#C4F000',
                                    border: '2px solid #050505',
                                    padding: '8px 10px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    color: '#050505'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 18,
                                    strokeWidth: 3
                                }, void 0, false, {
                                    fileName: "[project]/app/tax/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: '16px',
                                    fontWeight: 800,
                                    letterSpacing: '1.5px',
                                    color: '#050505'
                                },
                                children: "TAX ASSISTANT"
                            }, void 0, false, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#C4F000',
                                    padding: '4px 10px',
                                    fontSize: '9px',
                                    fontWeight: 800,
                                    letterSpacing: '0.5px',
                                    border: '1px solid #050505'
                                },
                                children: "AI POWERED"
                            }, void 0, false, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tax/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    taxReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: downloadPDF,
                        disabled: generating,
                        style: {
                            background: generating ? '#f5f5f5' : '#C4F000',
                            border: '2px solid #050505',
                            padding: '8px 16px',
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#050505',
                            cursor: generating ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            letterSpacing: '0.5px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 14,
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            generating ? 'GENERATING PDF...' : 'DOWNLOAD REPORT'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tax/page.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tax/page.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    overflow: 'auto'
                },
                children: [
                    !taxReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#ffffff',
                                    border: '2px solid #050505',
                                    padding: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            marginBottom: '16px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                size: 20,
                                                color: "#C4F000",
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '14px',
                                                    fontWeight: 800,
                                                    letterSpacing: '1px'
                                                },
                                                children: "INCOME SOURCES"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    background: selectedIncome.has('salary') ? '#f0fdf4' : '#fafafa',
                                                    border: selectedIncome.has('salary') ? '2px solid #C4F000' : '1px solid #e5e5e5',
                                                    padding: '14px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selectedIncome.has('salary'),
                                                                onChange: ()=>{},
                                                                style: {
                                                                    width: '18px',
                                                                    height: '18px',
                                                                    accentColor: '#C4F000'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tax/page.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: 700
                                                                },
                                                                children: "Monthly Salary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tax/page.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tax/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '15px',
                                                            fontWeight: 800
                                                        },
                                                        children: formatCurrency(data.income.monthly_salary)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tax/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    background: selectedIncome.has('freelance') ? '#f0fdf4' : '#fafafa',
                                                    border: selectedIncome.has('freelance') ? '2px solid #C4F000' : '1px solid #e5e5e5',
                                                    padding: '14px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selectedIncome.has('freelance'),
                                                                onChange: ()=>{},
                                                                style: {
                                                                    width: '18px',
                                                                    height: '18px',
                                                                    accentColor: '#C4F000'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tax/page.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: 700
                                                                },
                                                                children: "Freelance Income (Avg/month)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tax/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tax/page.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '15px',
                                                            fontWeight: 800
                                                        },
                                                        children: "₹14,012"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tax/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#ffffff',
                                    border: '2px solid #050505',
                                    padding: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            marginBottom: '16px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                size: 20,
                                                color: "#050505",
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '14px',
                                                    fontWeight: 800,
                                                    letterSpacing: '1px'
                                                },
                                                children: "ELIGIBLE DEDUCTIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    background: selectedExpenses.has('rent') ? '#f0fdf4' : '#fafafa',
                                                    border: selectedExpenses.has('rent') ? '2px solid #C4F000' : '1px solid #e5e5e5',
                                                    padding: '14px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selectedExpenses.has('rent'),
                                                                onChange: ()=>{},
                                                                style: {
                                                                    width: '18px',
                                                                    height: '18px',
                                                                    accentColor: '#C4F000'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tax/page.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            fontWeight: 700
                                                                        },
                                                                        children: "HRA / Rent (Monthly)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tax/page.tsx",
                                                                        lineNumber: 396,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '10px',
                                                                            color: '#666',
                                                                            marginTop: '2px'
                                                                        },
                                                                        children: "House Rent Allowance deduction"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tax/page.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tax/page.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tax/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '15px',
                                                            fontWeight: 800
                                                        },
                                                        children: formatCurrency(data.expenses.fixed.rent)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tax/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    background: selectedExpenses.has('investments') ? '#f0fdf4' : '#fafafa',
                                                    border: selectedExpenses.has('investments') ? '2px solid #C4F000' : '1px solid #e5e5e5',
                                                    padding: '14px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selectedExpenses.has('investments'),
                                                                onChange: ()=>{},
                                                                style: {
                                                                    width: '18px',
                                                                    height: '18px',
                                                                    accentColor: '#C4F000'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tax/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            fontWeight: 700
                                                                        },
                                                                        children: "Section 80C (PPF, ELSS, Insurance)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tax/page.tsx",
                                                                        lineNumber: 420,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '10px',
                                                                            color: '#666',
                                                                            marginTop: '2px'
                                                                        },
                                                                        children: "Up to ₹1.5 lakh deduction"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tax/page.tsx",
                                                                        lineNumber: 421,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tax/page.tsx",
                                                                lineNumber: 419,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tax/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '15px',
                                                            fontWeight: 800
                                                        },
                                                        children: "₹1,50,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tax/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: generateTaxReport,
                                disabled: analyzing,
                                style: {
                                    background: analyzing ? '#f5f5f5' : '#C4F000',
                                    border: '2px solid #050505',
                                    padding: '16px',
                                    fontSize: '12px',
                                    fontWeight: 800,
                                    color: '#050505',
                                    cursor: analyzing ? 'not-allowed' : 'pointer',
                                    letterSpacing: '1px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px'
                                },
                                children: analyzing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 16,
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 19
                                        }, this),
                                        "AI ANALYZING YOUR DATA..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                            size: 16,
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 19
                                        }, this),
                                        "GENERATE TAX REPORT"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    analyzing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#ffffff',
                            border: '2px solid #050505',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '60px',
                                    height: '60px',
                                    border: '3px solid #C4F000',
                                    borderTop: '3px solid transparent',
                                    borderRadius: '50%',
                                    animation: 'spin 1s linear infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 472,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    lineHeight: 1.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Analyzing income sources..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Calculating deductions..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Generating insights..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 483,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tax/page.tsx",
                        lineNumber: 463,
                        columnNumber: 11
                    }, this),
                    taxReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#ffffff',
                            border: '2px solid #050505',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    paddingBottom: '16px',
                                    borderBottom: '2px solid #f5f5f5'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 20,
                                        color: "#C4F000",
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: 800,
                                            letterSpacing: '1px'
                                        },
                                        children: "TAX CALCULATION SUMMARY"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '14px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#C4F000',
                                            padding: '16px',
                                            border: '2px solid #050505'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: 700,
                                                    marginBottom: '6px'
                                                },
                                                children: "TOTAL INCOME"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 516,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '24px',
                                                    fontWeight: 800
                                                },
                                                children: formatCurrency(taxReport.totalIncome)
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#fafafa',
                                            padding: '14px',
                                            border: '1px solid #e5e5e5'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: 600,
                                                    marginBottom: '4px'
                                                },
                                                children: "Standard Deduction"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: 800
                                                },
                                                children: [
                                                    "- ",
                                                    formatCurrency(taxReport.standardDeduction)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 520,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#fafafa',
                                            padding: '14px',
                                            border: '1px solid #e5e5e5'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: 600,
                                                    marginBottom: '4px'
                                                },
                                                children: "Section 80C"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: 800
                                                },
                                                children: [
                                                    "- ",
                                                    formatCurrency(taxReport.section80C)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 525,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#ffffff',
                                            padding: '16px',
                                            border: '2px solid #050505'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: 700,
                                                    marginBottom: '6px'
                                                },
                                                children: "TAXABLE INCOME"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '24px',
                                                    fontWeight: 800
                                                },
                                                children: formatCurrency(taxReport.taxableIncome)
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#DC2626',
                                            padding: '16px',
                                            border: '2px solid #050505'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: 700,
                                                    marginBottom: '6px',
                                                    color: '#fff'
                                                },
                                                children: "TOTAL TAX LIABILITY"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '24px',
                                                    fontWeight: 800,
                                                    color: '#fff'
                                                },
                                                children: formatCurrency(Math.round(taxReport.totalTax))
                                            }, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '10px',
                                                    fontWeight: 600,
                                                    marginTop: '4px',
                                                    color: '#fff',
                                                    opacity: 0.9
                                                },
                                                children: [
                                                    "Effective Rate: ",
                                                    taxReport.effectiveRate,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 510,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#f0fdf4',
                                    border: '2px solid #C4F000',
                                    padding: '16px',
                                    marginTop: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: 800,
                                            marginBottom: '10px',
                                            letterSpacing: '0.5px'
                                        },
                                        children: "AI RECOMMENDATIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            lineHeight: 1.7,
                                            color: '#050505'
                                        },
                                        children: [
                                            "Consider maximizing HRA exemption",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 562,
                                                columnNumber: 50
                                            }, this),
                                            "Explore NPS for additional ₹50K deduction",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 58
                                            }, this),
                                            "Health insurance premium under 80D",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/tax/page.tsx",
                                                lineNumber: 564,
                                                columnNumber: 51
                                            }, this),
                                            "Review investment portfolio for tax efficiency"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tax/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tax/page.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tax/page.tsx",
                        lineNumber: 489,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tax/page.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/tax/page.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
            }, void 0, false, {
                fileName: "[project]/app/tax/page.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tax/page.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8e12ec09._.js.map