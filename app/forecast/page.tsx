'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp } from 'lucide-react';

interface Transaction {
  id: string;
  user_id: string;
  account_id: string;
  category_id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  tags: any;
  created_at: string;
}

interface ChartPoint {
  x: number;
  y: number;
  amount: number;
  date: Date;
  isPrediction?: boolean;
}

interface ForecastData {
  amount: number;
  daysUntil: number;
  date: Date;
  confidence: number;
}

export default function IncomeForecastDashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);

  useEffect(() => {
    fetchAndPredict();
  }, []);

  const fetchAndPredict = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const response = await fetch('/api/get/transactions?type=credit');
      const result = await response.json();

      if (result.success && result.data && result.data.length > 0) {
        const creditTx = result.data.filter((t: Transaction) => t.type === 'credit');
        setTransactions(creditTx);
        setLoading(false);

        await new Promise(resolve => setTimeout(resolve, 400));
        setAnalyzing(true);
        await new Promise(resolve => setTimeout(resolve, 2000));

        const sortedTx = creditTx
          .map((tx: Transaction) => ({
            date: new Date(tx.date),
            amount: parseFloat(tx.amount.toString())
          }))
          .sort((a: any, b: any) => a.date.getTime() - b.date.getTime());

        const intervals: number[] = [];
        for (let i = 1; i < sortedTx.length; i++) {
          const daysDiff = (sortedTx[i].date.getTime() - sortedTx[i - 1].date.getTime()) / (1000 * 60 * 60 * 24);
          intervals.push(daysDiff);
        }

        const amounts = sortedTx.map((tx: any) => tx.amount);
        const xValues = amounts.map((_: number, i: number) => i);
        
        const n = xValues.length;
        const sumX = xValues.reduce((a: number, b: number) => a + b, 0);
        const sumY = amounts.reduce((a: number, b: number) => a + b, 0);
        const sumXY = xValues.reduce((acc: number, xi: number, i: number) => acc + xi * amounts[i], 0);
        const sumX2 = xValues.reduce((acc: number, xi: number) => acc + xi * xi, 0);

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        const nextAmount = Math.max(0, slope * amounts.length + intercept);
        const avgInterval = intervals.reduce((a: number, b: number) => a + b, 0) / intervals.length;
        const lastDate = sortedTx[sortedTx.length - 1].date;
        const nextDate = new Date(lastDate.getTime() + avgInterval * 24 * 60 * 60 * 1000);
        const today = new Date();
        const daysUntil = Math.ceil((nextDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

        const variance = amounts.reduce((sum: number, amt: number, i: number) => {
          const predicted = slope * i + intercept;
          return sum + Math.pow(amt - predicted, 2);
        }, 0) / amounts.length;
        const confidence = Math.max(0, Math.min(100, 100 - (Math.sqrt(variance) / (sumY / n)) * 50));

        setForecast({
          amount: nextAmount,
          daysUntil: Math.max(0, daysUntil),
          date: nextDate,
          confidence
        });

        const recentTx = sortedTx.slice(-8);
        const allAmounts = [...amounts.slice(-8), nextAmount];
        const minAmount = Math.min(...allAmounts);
        const maxAmount = Math.max(...allAmounts);
        const range = maxAmount - minAmount || 1;
        const padding = 50;
        const chartHeight = 240;

        const points: ChartPoint[] = recentTx.map((tx: any, i: number) => ({
          x: i,
          y: chartHeight - ((tx.amount - minAmount) / range) * (chartHeight - padding),
          amount: tx.amount,
          date: tx.date
        }));

        points.push({
          x: points.length,
          y: chartHeight - ((nextAmount - minAmount) / range) * (chartHeight - padding),
          amount: nextAmount,
          date: nextDate,
          isPrediction: true
        });

        setChartData(points);
        setAnalyzing(false);

        await new Promise(resolve => setTimeout(resolve, 600));
        setShowPrediction(true);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      setAnalyzing(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#ffffff',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            border: '2px solid #050505',
            height: '44px',
            width: '44px'
          }} />
          <div style={{
            background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            height: '20px',
            width: '200px',
            border: '2px solid #050505'
          }} />
        </div>

        <div style={{
          flex: 1,
          padding: '0 24px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px'
          }}>
            <div style={{
              background: 'linear-gradient(90deg, #C4F000 25%, #d4ff30 50%, #C4F000 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
              border: '2px solid #050505',
              padding: '20px',
              height: '140px'
            }} />
            <div style={{
              background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
              border: '2px solid #050505',
              padding: '20px',
              height: '140px'
            }} />
            <div style={{
              background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
              border: '2px solid #050505',
              padding: '20px',
              height: '140px'
            }} />
          </div>

          <div style={{
            background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            border: '2px solid #050505',
            padding: '24px',
            flex: 1,
            minHeight: '400px'
          }} />
        </div>

        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    );
  }

  if (!forecast || chartData.length === 0) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#ffffff',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}>
        <div style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#050505',
          marginBottom: '8px'
        }}>
          NO DATA AVAILABLE
        </div>
        <div style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#050505',
          opacity: 0.5
        }}>
          Not enough income transactions to generate forecast
        </div>
      </div>
    );
  }

  const totalIncome = transactions.reduce((sum, t) => sum + t.amount, 0);
  const avgIncome = totalIncome / transactions.length;
  const growthRate = ((forecast.amount - avgIncome) / avgIncome) * 100;

  const historicalData = chartData.filter(p => !p.isPrediction);
  const predictionData = chartData.slice(-2);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <a
          href="/home"
          style={{
            background: '#C4F000',
            border: '2px solid #050505',
            padding: '10px 12px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            textDecoration: 'none',
            color: '#050505',
            fontWeight: 800,
            transition: 'all 0.2s'
          }}
        >
          <ArrowLeft size={20} strokeWidth={3} />
        </a>
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '20px',
          fontWeight: 800,
          letterSpacing: '1.5px',
          color: '#050505',
          lineHeight: '44px'
        }}>
          INCOME FORECAST
        </div>
      </div>

      <div style={{
        flex: 1,
        padding: '0 24px 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px'
        }}>
          <div style={{
            background: analyzing ? 'linear-gradient(90deg, #C4F000 25%, #d4ff30 50%, #C4F000 75%)' : (showPrediction ? '#C4F000' : '#C4F000'),
            backgroundSize: '200% 100%',
            animation: analyzing ? 'shimmer 1.5s infinite' : 'none',
            border: '2px solid #050505',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'background 0.3s'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
              <TrendingUp size={14} strokeWidth={3} />
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#050505',
                letterSpacing: '0.5px'
              }}>
                {analyzing ? 'CALCULATING...' : 'PREDICTED INCOME'}
              </div>
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#050505',
              lineHeight: 1,
              opacity: analyzing ? 0.3 : 1,
              transition: 'opacity 0.3s'
            }}>
              {formatCurrency(forecast.amount)}
            </div>
            <div style={{
              fontSize: '10px',
              fontWeight: 600,
              color: '#050505',
              opacity: analyzing ? 0.3 : 0.7,
              marginTop: '12px',
              transition: 'opacity 0.3s'
            }}>
              Expected in {forecast.daysUntil} {forecast.daysUntil === 1 ? 'day' : 'days'}
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            border: '2px solid #050505',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#050505',
              marginBottom: '8px',
              letterSpacing: '0.5px'
            }}>
              CONFIDENCE LEVEL
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: 800,
              color: forecast.confidence >= 70 ? '#16A34A' : forecast.confidence >= 50 ? '#CA8A04' : '#DC2626',
              lineHeight: 1,
              opacity: analyzing ? 0.3 : 1,
              transition: 'opacity 0.3s'
            }}>
              {forecast.confidence.toFixed(0)}%
            </div>
            <div style={{
              fontSize: '10px',
              fontWeight: 600,
              color: '#050505',
              opacity: 0.5,
              marginTop: '4px'
            }}>
              Prediction accuracy
            </div>
            <div style={{
              marginTop: '12px',
              background: '#f5f5f5',
              height: '8px',
              border: '2px solid #050505',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: analyzing ? '0%' : `${forecast.confidence}%`,
                background: forecast.confidence >= 70 ? '#16A34A' : forecast.confidence >= 50 ? '#CA8A04' : '#DC2626',
                transition: 'width 0.8s ease'
              }} />
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            border: '2px solid #050505',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#050505',
              marginBottom: '8px',
              letterSpacing: '0.5px'
            }}>
              GROWTH TREND
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: 800,
              color: growthRate >= 0 ? '#16A34A' : '#DC2626',
              lineHeight: 1,
              opacity: analyzing ? 0.3 : 1,
              transition: 'opacity 0.3s'
            }}>
              {growthRate >= 0 ? '+' : ''}{growthRate.toFixed(1)}%
            </div>
            <div style={{
              fontSize: '10px',
              fontWeight: 600,
              color: '#050505',
              opacity: 0.5,
              marginTop: '4px'
            }}>
              vs average income
            </div>
            <div style={{
              marginTop: '12px',
              fontSize: '10px',
              fontWeight: 600,
              color: '#050505',
              opacity: 0.7
            }}>
              Avg: {formatCurrency(avgIncome)}
            </div>
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          border: '2px solid #050505',
          padding: '24px',
          height: '420px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#050505',
              letterSpacing: '0.5px'
            }}>
              INCOME PREDICTION CURVE
            </div>
            <div style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '16px',
                  height: '3px',
                  background: '#16A34A',
                  border: '1px solid #050505'
                }} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#050505',
                  opacity: 0.6
                }}>
                  Historical
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '16px',
                  height: '3px',
                  background: '#84CC16',
                  border: '1px solid #050505',
                  borderStyle: 'dashed'
                }} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#050505',
                  opacity: 0.6
                }}>
                  Predicted
                </span>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 1000 280" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#16A34A', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#16A34A', stopOpacity: 0.05 }} />
                </linearGradient>
                <linearGradient id="predictionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#84CC16', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#84CC16', stopOpacity: 0.05 }} />
                </linearGradient>
              </defs>

              {historicalData.length > 0 && (
                <>
                  <path
                    d={`M 60 240 ${historicalData.map((p) => {
                      const x = 60 + ((p.x / (chartData.length - 1)) * 880);
                      const y = Math.max(30, Math.min(240, p.y));
                      return `L ${x} ${y}`;
                    }).join(' ')} L ${60 + ((historicalData[historicalData.length - 1].x / (chartData.length - 1)) * 880)} 240 Z`}
                    fill="url(#areaGradient)"
                  />
                  
                  <path
                    d={historicalData.map((p, i) => {
                      const x = 60 + ((p.x / (chartData.length - 1)) * 880);
                      const y = Math.max(30, Math.min(240, p.y));
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#16A34A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {historicalData.map((p, i) => {
                    const x = 60 + ((p.x / (chartData.length - 1)) * 880);
                    const y = Math.max(30, Math.min(240, p.y));
                    return (
                      <g key={i}>
                        <circle cx={x} cy={y} r="5" fill="#16A34A" stroke="#050505" strokeWidth="2" />
                      </g>
                    );
                  })}
                </>
              )}

              {predictionData.length > 1 && showPrediction && (
                <>
                  <path
                    d={`${predictionData.map((p, i) => {
                      const x = 60 + ((p.x / (chartData.length - 1)) * 880);
                      const y = Math.max(30, Math.min(240, p.y));
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(' ')} L ${60 + ((predictionData[predictionData.length - 1].x / (chartData.length - 1)) * 880)} 240 L ${60 + ((predictionData[0].x / (chartData.length - 1)) * 880)} 240 Z`}
                    fill="url(#predictionGradient)"
                    opacity="0"
                  >
                    <animate attributeName="opacity" from="0" to="1" dur="0.8s" fill="freeze" />
                  </path>

                  <path
                    d={predictionData.map((p, i) => {
                      const x = 60 + ((p.x / (chartData.length - 1)) * 880);
                      const y = Math.max(30, Math.min(240, p.y));
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#84CC16"
                    strokeWidth="3"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDashoffset="1000"
                  >
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="1s" fill="freeze" />
                  </path>

                  {predictionData.map((p, i) => {
                    if (!p.isPrediction) return null;
                    const x = 60 + ((p.x / (chartData.length - 1)) * 880);
                    const y = Math.max(30, Math.min(240, p.y));
                    return (
                      <g key={i} opacity="0">
                        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.8s" fill="freeze" />
                        <circle cx={x} cy={y} r="7" fill="#84CC16" stroke="#050505" strokeWidth="2">
                          <animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite" begin="1s" />
                        </circle>
                        <circle cx={x} cy={y} r="7" fill="none" stroke="#84CC16" strokeWidth="2" opacity="0.3">
                          <animate attributeName="r" values="7;16;7" dur="2s" repeatCount="indefinite" begin="1s" />
                          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
                        </circle>
                        <text
                          x={x}
                          y={y - 20}
                          textAnchor="middle"
                          fontSize="11"
                          fontWeight="700"
                          fill="#84CC16"
                        >
                          {formatCurrency(p.amount)}
                        </text>
                      </g>
                    );
                  })}
                </>
              )}

              {chartData.map((p, i) => {
                const x = 60 + ((p.x / (chartData.length - 1)) * 880);
                return (
                  <g key={i}>
                    <text
                      x={x}
                      y="265"
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="600"
                      fill="#050505"
                      opacity="0.5"
                    >
                      {formatDate(p.date)}
                    </text>
                  </g>
                );
              })}

              {analyzing && (
                <g>
                  <text
                    x="500"
                    y="130"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#050505"
                    opacity="0.6"
                  >
                    Analyzing patterns and predicting future income...
                  </text>
                  <circle cx="500" cy="160" r="20" fill="none" stroke="#050505" strokeWidth="2" opacity="0.3">
                    <animate attributeName="r" values="20;30;20" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="500" cy="160" r="15" fill="none" stroke="#050505" strokeWidth="2" opacity="0.5">
                    <animate attributeName="r" values="15;25;15" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              )}
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}