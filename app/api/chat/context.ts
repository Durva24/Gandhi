// Financial Context for Om - Comprehensive Financial Profile
// This data is analyzed by Gandhi AI to provide personalized financial advice

export async function getFinancialContext() {
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
      monthly_salary: 55000.00, // Regular monthly salary
      freelance_income: {
        august: 20550.00, // Logo (8500) + Website (12000) + Durva payback (50)
        september: 15000.00, // Mobile app UI design
        october: 9500.00, // Branding project
        november: 11000.00 // Social media marketing project
      },
      average_monthly_income: 69012.50, // (55k*4 months + freelance total) / 4
      total_income_period: 276050.00, // Total from Aug-Nov
      income_stability: "Good - Regular salary + consistent freelance projects",
      upcoming_windfall: 250000.00 // Today's hackathon prize!
    },

    // Expense Breakdown (August - November 2025)
    expenses: {
      // Fixed Monthly Expenses
      fixed: {
        rent: 18000.00, // Paid 1st-2nd of every month
        electricity: 1925.00, // Average ₹1850-2500
        internet: 999.00, // Jio Fiber
        mobile: 599.00, // Airtel postpaid
        total_fixed: 21523.00
      },

      // Variable Expenses by Category
      variable: {
        groceries: 2970.00, // Average per month (DMart ₹3850, Reliance Fresh, local vendors)
        dining_out: 2840.00, // Restaurants, food delivery, cafes, street food
        transportation: 1180.00, // Petrol, Uber, Ola, auto, bus, metro
        shopping: 2000.00, // Clothing, electronics, home items
        entertainment: 870.00, // Netflix, movies, concerts
        healthcare: 1550.00, // Medicines, checkups, insurance
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
      monthly_surplus: 36079.50, // Average income - Average expenses
      savings_rate: 52.3, // Percentage of income saved
      
      // Current Investments
      investments: {
        stocks: {
          total_value: 45610.00,
          holdings: [
            { name: "TCS", qty: 3, buy: 3820, current: 4150, gain: 990 },
            { name: "Infosys", qty: 4, buy: 1520, current: 1680, gain: 640 },
            { name: "Reliance", qty: 5, buy: 2450, current: 2680, gain: 1150 },
            { name: "ICICI Bank", qty: 8, buy: 958, current: 1025, gain: 536 },
            { name: "HDFC Bank", qty: 10, buy: 1520, current: 1605, gain: 850 },
            { name: "Maruti Suzuki", qty: 2, buy: 10950, current: 11520, gain: 1140 }
          ],
          total_invested: 40444.00,
          current_value: 45610.00,
          profit: 5166.00,
          return_percentage: 12.77
        },
        
        mutual_funds: {
          total_value: 5142.50,
          holdings: [
            { name: "SBI Bluechip Fund", units: 30, buy: 72, current: 78.50, value: 2355 },
            { name: "HDFC Flexicap Fund", units: 25, buy: 85.50, current: 92.30, value: 2307.50 }
          ],
          total_invested: 4297.50,
          current_value: 5142.50,
          profit: 845.00,
          return_percentage: 19.66
        },
        
        crypto: {
          total_value: 132900.00,
          holdings: [
            { name: "Bitcoin", qty: 0.015, buy: 4500000, current: 4880000, value: 73200 },
            { name: "Ethereum", qty: 0.20, buy: 275000, current: 298500, value: 59700 }
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
          emi_estimated: 5312.50, // Approximate
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
          emi_estimated: 2583.33, // Approximate
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
      
      total_monthly_emi: 7895.83, // Both EMIs combined
      debt_to_income_ratio: 274.6, // Total debt / Monthly income percentage
      
      concerns: [
        "High personal loan interest at 11.50%",
        "Total EMI of ₹7,896 is manageable but limits flexibility",
        "Should avoid taking more loans until these are cleared"
      ]
    },

    // Upcoming Bills & Obligations
    upcoming_bills: [
      { name: "Rent Payment", amount: 18000, due: "2025-12-01" },
      { name: "Health Insurance Premium", amount: 4500, due: "2025-12-04" },
      { name: "Electricity Bill - MSEB", amount: 1850, due: "2025-12-05" },
      { name: "Jio Fiber Internet", amount: 999, due: "2025-12-10" },
      { name: "Airtel Mobile Postpaid", amount: 599, due: "2025-12-15" },
      { name: "Gas Cylinder - Indane", amount: 950, due: "2025-12-20" }
    ],
    total_bills_december: 26898.00,

    // Financial Health Metrics
    financial_health: {
      emergency_fund: 0, // No emergency fund identified!
      recommended_emergency_fund: 197598.00, // 6 months of expenses
      months_of_expenses_saved: 0,
      
      net_worth: 26552.50, // Total investments (216052.50) - Total debt (189500)
      
      savings_rate: 52.3, // Very good!
      debt_service_ratio: 11.4, // EMI / Income (Good - under 40%)
      
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

// Helper function to calculate specific metrics
export function calculateMonthlyMetrics() {
  return {
    total_income: 69012.50,
    total_expenses: 32933.00,
    total_emi: 7895.83,
    net_savings: 28183.67,
    savings_rate_percentage: 40.8
  };

};