'use client';
import { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Sparkles, Brain, Calculator, Download } from 'lucide-react';

interface IncomeItem {
  id: string;
  label: string;
  amount: number;
  months: number;
  total: number;
}

interface ExpenseItem {
  id: string;
  label: string;
  amount: number;
  months: number;
  total: number;
  deductible: boolean;
}

export default function TaxAssistant() {
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('');
  const [incomeItems, setIncomeItems] = useState<IncomeItem[]>([]);
  const [expenseItems, setExpenseItems] = useState<ExpenseItem[]>([]);
  const [selectedIncome, setSelectedIncome] = useState<Set<string>>(new Set());
  const [selectedExpenses, setSelectedExpenses] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setTimeout(() => {
      const income: IncomeItem[] = [
        { id: 'salary', label: 'Monthly Salary', amount: 55000, months: 4, total: 220000 },
        { id: 'freelance_aug', label: 'Freelance - August', amount: 20550, months: 1, total: 20550 },
        { id: 'freelance_sep', label: 'Freelance - September', amount: 15000, months: 1, total: 15000 },
        { id: 'freelance_oct', label: 'Freelance - October', amount: 9500, months: 1, total: 9500 },
        { id: 'freelance_nov', label: 'Freelance - November', amount: 11000, months: 1, total: 11000 },
        { id: 'hackathon', label: 'Hackathon Prize', amount: 250000, months: 1, total: 250000 }
      ];

      const expenses: ExpenseItem[] = [
        { id: 'rent', label: 'Rent', amount: 18000, months: 4, total: 72000, deductible: true },
        { id: 'electricity', label: 'Electricity', amount: 1925, months: 4, total: 7700, deductible: false },
        { id: 'internet', label: 'Internet (Business Use)', amount: 999, months: 4, total: 3996, deductible: true },
        { id: 'mobile', label: 'Mobile', amount: 599, months: 4, total: 2396, deductible: false },
        { id: 'equipment', label: 'Work Equipment', amount: 3000, months: 1, total: 3000, deductible: true },
        { id: 'insurance', label: 'Health Insurance', amount: 4500, months: 1, total: 4500, deductible: true },
        { id: 'loan_interest', label: 'Loan Interest Paid', amount: 18500, months: 1, total: 18500, deductible: true }
      ];

      setIncomeItems(income);
      setExpenseItems(expenses);

      setSelectedIncome(new Set(income.map(i => i.id)));
      setSelectedExpenses(new Set(expenses.filter(e => e.deductible).map(e => e.id)));

      setLoading(false);
    }, 1200);
  };

  const toggleIncome = (id: string) => {
    const newSet = new Set(selectedIncome);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedIncome(newSet);
  };

  const toggleExpense = (id: string) => {
    const newSet = new Set(selectedExpenses);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedExpenses(newSet);
  };

  const generateReport = async () => {
    setAnalyzing(true);
    setProgress(0);
    setStage('Analyzing income sources...');

    await new Promise(r => setTimeout(r, 800));
    setProgress(25);
    setStage('Categorizing expenses...');

    await new Promise(r => setTimeout(r, 800));
    setProgress(50);
    setStage('Computing deductions...');

    await new Promise(r => setTimeout(r, 800));
    setProgress(75);
    setStage('Generating tax report...');

    await new Promise(r => setTimeout(r, 1000));
    setProgress(100);

    setTimeout(() => {
      generatePDF();
      setAnalyzing(false);
      setProgress(0);
    }, 500);
  };

  const generatePDF = () => {
    const totalIncome = incomeItems
      .filter(i => selectedIncome.has(i.id))
      .reduce((sum, i) => sum + i.total, 0);

    const totalDeductions = expenseItems
      .filter(e => selectedExpenses.has(e.id))
      .reduce((sum, e) => sum + e.total, 0);

    const taxableIncome = totalIncome - totalDeductions;

    let tax = 0;
    if (taxableIncome > 300000) {
      tax += (taxableIncome - 300000) * 0.05;
    }
    if (taxableIncome > 600000) {
      tax += (taxableIncome - 600000) * 0.05;
    }

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tax Report FY 2025-26</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; padding: 40px; background: #fff; }
    .header { border-bottom: 4px solid #050505; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { font-size: 32px; font-weight: 800; letter-spacing: 2px; color: #050505; margin-bottom: 8px; }
    .header .subtitle { font-size: 14px; font-weight: 600; color: #666; }
    .ai-badge { display: inline-block; background: #C4F000; color: #050505; padding: 6px 12px; font-size: 11px; font-weight: 800; letter-spacing: 1px; border: 2px solid #050505; margin-top: 12px; }
    .section { margin-bottom: 30px; }
    .section-title { font-size: 16px; font-weight: 800; color: #050505; letter-spacing: 1px; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #f5f5f5; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
    .card { background: #fafafa; border: 2px solid #050505; padding: 20px; }
    .card-label { font-size: 11px; font-weight: 700; color: #050505; opacity: 0.6; margin-bottom: 8px; letter-spacing: 0.5px; }
    .card-value { font-size: 24px; font-weight: 800; color: #050505; }
    .highlight { background: #C4F000; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
    th { background: #050505; color: #fff; padding: 12px; text-align: left; font-size: 11px; font-weight: 800; letter-spacing: 0.5px; }
    td { padding: 12px; border-bottom: 1px solid #e5e5e5; font-size: 13px; font-weight: 600; color: #050505; }
    .amount { text-align: right; font-weight: 800; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #f5f5f5; font-size: 11px; color: #666; font-weight: 600; }
    .disclaimer { background: #fef2f2; border: 2px solid #DC2626; padding: 16px; margin-top: 30px; font-size: 11px; font-weight: 700; color: #DC2626; }
  </style>
</head>
<body>
  <div class="header">
    <h1>TAX REPORT FY 2025-26</h1>
    <div class="subtitle">Generated for: Om | Assessment Period: Aug - Nov 2025</div>
    <div class="ai-badge">✨ AI-POWERED ANALYSIS</div>
  </div>

  <div class="section">
    <div class="section-title">EXECUTIVE SUMMARY</div>
    <div class="grid">
      <div class="card">
        <div class="card-label">GROSS TOTAL INCOME</div>
        <div class="card-value">₹${totalIncome.toLocaleString('en-IN')}</div>
      </div>
      <div class="card">
        <div class="card-label">TOTAL DEDUCTIONS</div>
        <div class="card-value">₹${totalDeductions.toLocaleString('en-IN')}</div>
      </div>
      <div class="card highlight">
        <div class="card-label">TAXABLE INCOME</div>
        <div class="card-value">₹${taxableIncome.toLocaleString('en-IN')}</div>
      </div>
      <div class="card highlight">
        <div class="card-label">ESTIMATED TAX LIABILITY</div>
        <div class="card-value">₹${Math.round(tax).toLocaleString('en-IN')}</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">INCOME BREAKDOWN</div>
    <table>
      <thead>
        <tr>
          <th>SOURCE</th>
          <th>PERIOD</th>
          <th class="amount">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        ${incomeItems.filter(i => selectedIncome.has(i.id)).map(i => `
        <tr>
          <td>${i.label}</td>
          <td>${i.months} month${i.months > 1 ? 's' : ''}</td>
          <td class="amount">₹${i.total.toLocaleString('en-IN')}</td>
        </tr>
        `).join('')}
        <tr style="background: #f5f5f5; font-weight: 800;">
          <td colspan="2">TOTAL INCOME</td>
          <td class="amount">₹${totalIncome.toLocaleString('en-IN')}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <div class="section-title">DEDUCTIONS CLAIMED</div>
    <table>
      <thead>
        <tr>
          <th>CATEGORY</th>
          <th>PERIOD</th>
          <th class="amount">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        ${expenseItems.filter(e => selectedExpenses.has(e.id)).map(e => `
        <tr>
          <td>${e.label}</td>
          <td>${e.months} month${e.months > 1 ? 's' : ''}</td>
          <td class="amount">₹${e.total.toLocaleString('en-IN')}</td>
        </tr>
        `).join('')}
        <tr style="background: #f5f5f5; font-weight: 800;">
          <td colspan="2">TOTAL DEDUCTIONS</td>
          <td class="amount">₹${totalDeductions.toLocaleString('en-IN')}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <div class="section-title">TAX COMPUTATION</div>
    <table>
      <thead>
        <tr>
          <th>DESCRIPTION</th>
          <th class="amount">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gross Total Income</td>
          <td class="amount">₹${totalIncome.toLocaleString('en-IN')}</td>
        </tr>
        <tr>
          <td>Less: Deductions</td>
          <td class="amount">₹${totalDeductions.toLocaleString('en-IN')}</td>
        </tr>
        <tr style="background: #C4F000;">
          <td style="font-weight: 800;">Taxable Income</td>
          <td class="amount" style="font-weight: 800;">₹${taxableIncome.toLocaleString('en-IN')}</td>
        </tr>
        <tr>
          <td>Tax Rate Applied</td>
          <td class="amount">${taxableIncome > 600000 ? '10%' : taxableIncome > 300000 ? '5%' : '0%'}</td>
        </tr>
        <tr style="background: #C4F000;">
          <td style="font-weight: 800;">Estimated Tax Liability</td>
          <td class="amount" style="font-weight: 800;">₹${Math.round(tax).toLocaleString('en-IN')}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="disclaimer">
    ⚠️ DISCLAIMER: This is an AI-generated estimate for informational purposes only. Actual tax liability may vary based on additional factors, exemptions, and current tax laws. Please consult a qualified tax professional for accurate filing.
  </div>

  <div class="footer">
    Generated on ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} | Powered by Gandhi AI Tax Assistant<br>
    This report uses artificial intelligence to analyze your financial data and estimate tax obligations.
  </div>
</body>
</html>`;

    // Convert HTML to PDF using html2pdf library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = () => {
      const element = document.createElement('div');
      element.innerHTML = htmlContent;
      
      const opt = {
        margin: 10,
        filename: `Tax_Report_FY2025-26_${new Date().getTime()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
      };

      (window as any).html2pdf().set(opt).from(element).save();
    };
    document.head.appendChild(script);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        background: '#ffffff',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: '#C4F000',
            border: '2px solid #050505',
            animation: 'pulse 1.5s ease-in-out infinite'
          }} />
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#050505', letterSpacing: '1px' }}>
            LOADING DATA...
          </div>
        </div>
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(0.95); }
          }
        `}</style>
      </div>
    );
  }

  const totalIncome = incomeItems
    .filter(i => selectedIncome.has(i.id))
    .reduce((sum, i) => sum + i.total, 0);

  const totalDeductions = expenseItems
    .filter(e => selectedExpenses.has(e.id))
    .reduce((sum, e) => sum + e.total, 0);

  const taxableIncome = totalIncome - totalDeductions;

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              background: '#C4F000',
              border: '2px solid #050505',
              padding: '8px 10px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#050505'
            }}
          >
            <ArrowLeft size={18} strokeWidth={3} />
          </div>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '16px',
            fontWeight: 800,
            letterSpacing: '1.5px',
            color: '#050505',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Sparkles size={18} strokeWidth={3} />
            AI TAX ASSISTANT
          </div>
        </div>

        <button
          onClick={generateReport}
          disabled={analyzing || selectedIncome.size === 0}
          style={{
            background: analyzing ? '#f5f5f5' : '#C4F000',
            border: '2px solid #050505',
            padding: '8px 16px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#050505',
            cursor: analyzing || selectedIncome.size === 0 ? 'not-allowed' : 'pointer',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: analyzing || selectedIncome.size === 0 ? 0.6 : 1
          }}
        >
          <Download size={14} strokeWidth={3} />
          {analyzing ? 'GENERATING...' : 'GENERATE PDF REPORT'}
        </button>
      </div>

      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        overflow: 'auto'
      }}>
        {analyzing && (
          <div style={{
            background: '#ffffff',
            border: '2px solid #050505',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#050505',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Brain size={20} strokeWidth={3} style={{ color: '#C4F000' }} />
                {stage}
              </div>
              <div style={{
                fontSize: '18px',
                fontWeight: 800,
                color: '#C4F000'
              }}>
                {progress}%
              </div>
            </div>
            <div style={{
              height: '8px',
              background: '#f5f5f5',
              border: '2px solid #050505',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                background: '#C4F000',
                width: `${progress}%`,
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{
            flex: 1,
            background: '#C4F000',
            border: '2px solid #050505',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#050505', marginBottom: '8px', letterSpacing: '0.5px' }}>
              TOTAL INCOME
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#050505' }}>
              {formatCurrency(totalIncome)}
            </div>
          </div>

          <div style={{
            flex: 1,
            background: '#ffffff',
            border: '2px solid #050505',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#050505', marginBottom: '8px', letterSpacing: '0.5px' }}>
              DEDUCTIONS
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#050505' }}>
              {formatCurrency(totalDeductions)}
            </div>
          </div>

          <div style={{
            flex: 1,
            background: '#C4F000',
            border: '2px solid #050505',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#050505', marginBottom: '8px', letterSpacing: '0.5px' }}>
              TAXABLE INCOME
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#050505' }}>
              {formatCurrency(taxableIncome)}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{
            flex: 1,
            background: '#ffffff',
            border: '2px solid #050505',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 800,
              color: '#050505',
              letterSpacing: '1px',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '2px solid #f5f5f5'
            }}>
              INCOME SOURCES ({selectedIncome.size}/{incomeItems.length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {incomeItems.map(item => {
                const isSelected = selectedIncome.has(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleIncome(item.id)}
                    style={{
                      background: isSelected ? '#f0fdf4' : '#fafafa',
                      border: isSelected ? '2px solid #C4F000' : '2px solid #e5e5e5',
                      padding: '14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #050505',
                        background: isSelected ? '#C4F000' : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {isSelected && <Calculator size={12} strokeWidth={3} />}
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#050505' }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '10px', fontWeight: 600, color: '#050505', opacity: 0.6 }}>
                          {item.months} month{item.months > 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#050505' }}>
                      {formatCurrency(item.total)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{
            flex: 1,
            background: '#ffffff',
            border: '2px solid #050505',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 800,
              color: '#050505',
              letterSpacing: '1px',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '2px solid #f5f5f5'
            }}>
              TAX DEDUCTIONS ({selectedExpenses.size}/{expenseItems.length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {expenseItems.map(item => {
                const isSelected = selectedExpenses.has(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleExpense(item.id)}
                    style={{
                      background: isSelected ? '#f0fdf4' : '#fafafa',
                      border: isSelected ? '2px solid #C4F000' : '2px solid #e5e5e5',
                      padding: '14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      opacity: item.deductible ? 1 : 0.5
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #050505',
                        background: isSelected ? '#C4F000' : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {isSelected && <Calculator size={12} strokeWidth={3} />}
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#050505', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {item.label}
                          {!item.deductible && (
                            <span style={{
                              fontSize: '8px',
                              padding: '2px 6px',
                              background: '#f5f5f5',
                              border: '1px solid #e5e5e5',
                              fontWeight: 800
                            }}>
                              NON-DEDUCTIBLE
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '10px', fontWeight: 600, color: '#050505', opacity: 0.6 }}>
                          {item.months} month{item.months > 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#050505' }}>
                      {formatCurrency(item.total)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}