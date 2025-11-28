'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, Plus, X } from 'lucide-react';

interface Transaction {
  id: string;
  amount: number;
  date: string;
}

interface ChartPoint {
  x: number;
  y: number;
  amount: number;
  date: Date;
  isPrediction?: boolean;
}

export default function IncomeForecastDashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [predicting, setPredicting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ amount: '', date: '' });
  const [forecast, setForecast] = useState<any>(null);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/get/transactions?type=credit');
      const result = await response.json();
      
      if (result.success && result.data) {
        const creditTx = result.data
          .filter((t: any) => t.type === 'credit')
          .map((t: any) => ({
            id: t.id,
            amount: parseFloat(t.amount),
            date: t.date
          }));
        setTransactions(creditTx);
        if (creditTx.length > 0) {
          await predictIncome(creditTx);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const predictIncome = async (txList: Transaction[]) => {
    setPredicting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const sorted = txList
      .map(tx => ({ date: new Date(tx.date), amount: tx.amount }))
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    const intervals = sorted.slice(1).map((tx, i) => 
      (tx.date.getTime() - sorted[i].date.getTime()) / (1000 * 60 * 60 * 24)
    );

    const amounts = sorted.map(tx => tx.amount);
    const n = amounts.length;
    const sumY = amounts.reduce((a, b) => a + b, 0);
    const avgAmount = sumY / n;
    
    const slope = amounts.slice(1).reduce((sum, amt, i) => sum + (amt - amounts[i]), 0) / (n - 1) / 30;
    const nextAmount = Math.max(0, amounts[n - 1] + slope * 30);
    
    const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const lastDate = sorted[n - 1].date;
    const nextDate = new Date(lastDate.getTime() + avgInterval * 24 * 60 * 60 * 1000);
    const daysUntil = Math.ceil((nextDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    
    const variance = amounts.reduce((sum, amt) => sum + Math.pow(amt - avgAmount, 2), 0) / n;
    const confidence = Math.max(60, Math.min(95, 100 - (Math.sqrt(variance) / avgAmount) * 30));
    const growthRate = ((nextAmount - avgAmount) / avgAmount) * 100;

    setForecast({ amount: nextAmount, daysUntil: Math.max(0, daysUntil), date: nextDate, confidence, avgAmount, growthRate });

    const recent = sorted.slice(-8);
    const allAmounts = [...recent.map(t => t.amount), nextAmount];
    const minAmt = Math.min(...allAmounts);
    const maxAmt = Math.max(...allAmounts);
    const range = maxAmt - minAmt || 1;

    const points: ChartPoint[] = recent.map((tx, i) => ({
      x: i,
      y: 200 - ((tx.amount - minAmt) / range) * 150,
      amount: tx.amount,
      date: tx.date
    }));

    points.push({
      x: points.length,
      y: 200 - ((nextAmount - minAmt) / range) * 150,
      amount: nextAmount,
      date: nextDate,
      isPrediction: true
    });

    setChartData(points);
    setPredicting(false);
  };

  const handleAddIncome = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || !formData.date) return;

    const newTx: Transaction = {
      id: Date.now().toString(),
      amount: parseFloat(formData.amount),
      date: formData.date
    };

    const updated = [...transactions, newTx];
    setTransactions(updated);
    setFormData({ amount: '', date: '' });
    setShowForm(false);
    await predictIncome(updated);
  };

  const formatCurrency = (amt: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amt);

  const formatDate = (date: Date) => 
    date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#fff', fontFamily: 'Inter, sans-serif', padding: '24px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
          <div style={{ background: '#e0e0e0', border: '2px solid #050505', height: '44px', width: '44px' }} />
          <div style={{ background: '#e0e0e0', border: '2px solid #050505', height: '44px', width: '200px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ background: '#e0e0e0', border: '2px solid #050505', height: '140px' }} />
          ))}
        </div>
        <div style={{ background: '#e0e0e0', border: '2px solid #050505', height: '400px' }} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: 'Inter, sans-serif', padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
        <a href="/home" style={{ background: '#C4F000', border: '2px solid #050505', padding: '10px 12px', display: 'flex', textDecoration: 'none', color: '#050505' }}>
          <ArrowLeft size={20} strokeWidth={3} />
        </a>
        <div style={{ fontSize: '20px', fontWeight: 800, color: '#050505', flex: 1 }}>INCOME FORECAST</div>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{ background: '#C4F000', border: '2px solid #050505', padding: '10px 20px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          {showForm ? <X size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
          {showForm ? 'CANCEL' : 'ADD INCOME'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddIncome} style={{ background: '#f5f5f5', border: '2px solid #050505', padding: '20px', marginBottom: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '12px', alignItems: 'end' }}>
            <div>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#050505', display: 'block', marginBottom: '8px' }}>AMOUNT</label>
              <input
                type="number"
                value={formData.amount}
                onChange={e => setFormData({ ...formData, amount: e.target.value })}
                placeholder="5000"
                required
                style={{ width: '100%', padding: '12px', border: '2px solid #050505', fontSize: '14px', fontWeight: 600 }}
              />
            </div>
            <div>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#050505', display: 'block', marginBottom: '8px' }}>DATE</label>
              <input
                type="date"
                value={formData.date}
                onChange={e => setFormData({ ...formData, date: e.target.value })}
                required
                style={{ width: '100%', padding: '12px', border: '2px solid #050505', fontSize: '14px', fontWeight: 600 }}
              />
            </div>
            <button type="submit" style={{ background: '#16A34A', color: '#fff', border: '2px solid #050505', padding: '12px 24px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
              ADD
            </button>
          </div>
        </form>
      )}

      {predicting ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ background: '#e0e0e0', border: '2px solid #050505', height: '140px', animation: 'pulse 1.5s infinite' }} />
          ))}
        </div>
      ) : forecast ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          <div style={{ background: '#C4F000', border: '2px solid #050505', padding: '20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#050505', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <TrendingUp size={14} strokeWidth={3} /> PREDICTED INCOME
            </div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#050505' }}>{formatCurrency(forecast.amount)}</div>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#050505', opacity: 0.7, marginTop: '12px' }}>
              Expected in {forecast.daysUntil} days
            </div>
          </div>

          <div style={{ background: '#fff', border: '2px solid #050505', padding: '20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#050505', marginBottom: '8px' }}>CONFIDENCE</div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: forecast.confidence >= 70 ? '#16A34A' : '#CA8A04' }}>
              {forecast.confidence.toFixed(0)}%
            </div>
            <div style={{ marginTop: '12px', background: '#f5f5f5', height: '8px', border: '2px solid #050505', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${forecast.confidence}%`, background: forecast.confidence >= 70 ? '#16A34A' : '#CA8A04', transition: 'width 0.8s' }} />
            </div>
          </div>

          <div style={{ background: '#fff', border: '2px solid #050505', padding: '20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#050505', marginBottom: '8px' }}>GROWTH</div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: forecast.growthRate >= 0 ? '#16A34A' : '#DC2626' }}>
              {forecast.growthRate >= 0 ? '+' : ''}{forecast.growthRate.toFixed(1)}%
            </div>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#050505', opacity: 0.7, marginTop: '12px' }}>
              Avg: {formatCurrency(forecast.avgAmount)}
            </div>
          </div>
        </div>
      ) : null}

      {predicting ? (
        <div style={{ background: '#e0e0e0', border: '2px solid #050505', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#050505', marginBottom: '16px' }}>Analyzing patterns...</div>
            <div style={{ width: '40px', height: '40px', border: '4px solid #050505', borderTopColor: 'transparent', borderRadius: '50%', margin: '0 auto', animation: 'spin 1s linear infinite' }} />
          </div>
        </div>
      ) : chartData.length > 0 ? (
        <div style={{ background: '#fff', border: '2px solid #050505', padding: '24px', height: '400px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#050505', marginBottom: '16px' }}>INCOME TREND</div>
          <svg width="100%" height="320" viewBox="0 0 1000 320" preserveAspectRatio="none">
            <path
              d={chartData.filter(p => !p.isPrediction).map((p, i) => {
                const x = 60 + (p.x / (chartData.length - 1)) * 880;
                return `${i === 0 ? 'M' : 'L'} ${x} ${p.y}`;
              }).join(' ')}
              fill="none"
              stroke="#16A34A"
              strokeWidth="3"
            />
            
            {chartData.length > 1 && (
              <path
                d={chartData.slice(-2).map((p, i) => {
                  const x = 60 + (p.x / (chartData.length - 1)) * 880;
                  return `${i === 0 ? 'M' : 'L'} ${x} ${p.y}`;
                }).join(' ')}
                fill="none"
                stroke="#84CC16"
                strokeWidth="3"
                strokeDasharray="8,4"
              />
            )}

            {chartData.map((p, i) => {
              const x = 60 + (p.x / (chartData.length - 1)) * 880;
              return (
                <g key={i}>
                  <circle cx={x} cy={p.y} r="5" fill={p.isPrediction ? '#84CC16' : '#16A34A'} stroke="#050505" strokeWidth="2" />
                  <text x={x} y="290" textAnchor="middle" fontSize="10" fontWeight="600" fill="#050505" opacity="0.5">
                    {formatDate(p.date)}
                  </text>
                  {p.isPrediction && (
                    <text x={x} y={p.y - 15} textAnchor="middle" fontSize="11" fontWeight="700" fill="#84CC16">
                      {formatCurrency(p.amount)}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      ) : null}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}