'use client';
import { useState } from 'react';
import { ArrowLeft, Search, TrendingDown, Loader2, ExternalLink, ShoppingCart, AlertCircle } from 'lucide-react';

interface PriceResult {
  store: string;
  price: number;
  url: string;
  availability: string;
  shipping?: number;
  priceWithShipping?: number;
}

export default function PriceComparisonPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PriceResult[]>([]);
  const [productName, setProductName] = useState('');
  const [productInfo, setProductInfo] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError('');
    setResults([]);
    setProductName(searchQuery);
    setProductInfo(null);

    try {
      // Call our Next.js API route instead of PricesAPI directly
      const response = await fetch('/api/price-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch prices');
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Search failed');
      }

      if (!data.product) {
        setError('No results found. Try a different search term.');
        setLoading(false);
        return;
      }

      const product = data.product;

      setProductInfo({
        name: product.name || searchQuery,
        brand: product.brand_name,
        category: product.category_name,
        rating: product.review_rating,
        reviewCount: product.review_count
      });

      // Transform offers to our format
      const transformedResults: PriceResult[] = (product.offers || []).map((offer: any) => {
        const price = parseFloat(offer.price) || 0;
        const shipping = offer.shipping_costs ? parseFloat(offer.shipping_costs) : 0;
        const priceWithShipping = offer.price_with_shipping 
          ? parseFloat(offer.price_with_shipping) 
          : price + shipping;

        return {
          store: offer.shop_name || 'Unknown Store',
          price: price,
          url: offer.url || product.url || '#',
          availability: offer.availability_text || 'Check Website',
          shipping: shipping,
          priceWithShipping: priceWithShipping
        };
      }).sort((a: PriceResult, b: PriceResult) => 
        (a.priceWithShipping || a.price) - (b.priceWithShipping || b.price)
      );
      
      if (transformedResults.length === 0) {
        setError('No price offers found for this product.');
      } else {
        setResults(transformedResults);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch prices. Please try again.');
      console.error('Error fetching prices:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getBestPrice = () => {
    if (results.length === 0) return null;
    return results[0];
  };

  const getWorstPrice = () => {
    if (results.length === 0) return null;
    return results[results.length - 1];
  };

  const getSavings = () => {
    const best = getBestPrice();
    const worst = getWorstPrice();
    if (!best || !worst) return 0;
    const bestTotal = best.priceWithShipping || best.price;
    const worstTotal = worst.priceWithShipping || worst.price;
    return worstTotal - bestTotal;
  };

  const getStoreEmoji = (store: string) => {
    const storeLower = store.toLowerCase();
    if (storeLower.includes('amazon')) return '🛒';
    if (storeLower.includes('flipkart')) return '🛍️';
    if (storeLower.includes('croma')) return '🏪';
    if (storeLower.includes('vijay')) return '🏬';
    if (storeLower.includes('reliance')) return '📱';
    if (storeLower.includes('myntra')) return '👕';
    if (storeLower.includes('ajio')) return '👗';
    if (storeLower.includes('tata')) return '🏪';
    return '🏷️';
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
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '2px solid #050505'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a 
            href="/home"
            style={{
              background: '#C4F000',
              border: '2px solid #050505',
              padding: '6px 8px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#ffffff',
              fontWeight: 800
            }}
          >
            <ArrowLeft size={16} strokeWidth={3} />
          </a>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '1.2px',
            color: '#050505'
          }}>
            PRICE COMPARISON
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div style={{
        padding: '20px',
        borderBottom: '2px solid #050505',
        background: '#F5F5F5'
      }}>
        <div style={{
          display: 'flex',
          gap: '10px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !loading && handleSearch()}
            placeholder="Search for products (e.g., iPhone 15, Sony WH-1000XM5)"
            disabled={loading}
            style={{
              flex: 1,
              padding: '14px 16px',
              border: '2px solid #050505',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              outline: 'none',
              opacity: loading ? 0.6 : 1
            }}
          />
          <button
            onClick={handleSearch}
            disabled={loading || !searchQuery.trim()}
            style={{
              background: '#C4F000',
              border: '2px solid #050505',
              padding: '0 24px',
              cursor: loading || !searchQuery.trim() ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 800,
              fontSize: '12px',
              letterSpacing: '0.5px',
              opacity: loading || !searchQuery.trim() ? 0.5 : 1,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!loading && searchQuery.trim()) {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '-2px 2px 0px #050505';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {loading ? (
              <>
                <Loader2 size={16} strokeWidth={3} style={{ animation: 'spin 1s linear infinite' }} />
                SEARCHING
              </>
            ) : (
              <>
                <Search size={16} strokeWidth={3} />
                FIND PRICES
              </>
            )}
          </button>
        </div>
        <div style={{
          maxWidth: '800px',
          margin: '12px auto 0',
          fontSize: '11px',
          fontWeight: 600,
          color: '#050505',
          opacity: 0.5,
          textAlign: 'center'
        }}>
          Powered by Google Shopping India • Searches typically take 5-15 seconds
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        padding: '20px'
      }}>
        {error && (
          <div style={{
            maxWidth: '800px',
            margin: '0 auto 20px',
            background: '#FEE2E2',
            border: '2px solid #DC2626',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <AlertCircle size={20} color="#DC2626" strokeWidth={2.5} />
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#DC2626'
            }}>
              {error}
            </div>
          </div>
        )}

        {!loading && !error && results.length === 0 && !productName && (
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            paddingTop: '60px'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🔍</div>
            <div style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#050505',
              marginBottom: '8px',
              letterSpacing: '0.5px'
            }}>
              SEARCH FOR ANY PRODUCT
            </div>
            <div style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#050505',
              opacity: 0.5,
              marginBottom: '16px'
            }}>
              Compare prices from Google Shopping India and find the best deals
            </div>
            <div style={{
              background: '#FFF7ED',
              border: '2px solid #FB923C',
              padding: '12px 16px',
              fontSize: '11px',
              fontWeight: 600,
              color: '#FB923C',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: '1.5'
            }}>
              ⚠️ Setup Required:<br/>
              1. Create <code style={{background: '#fff', padding: '2px 6px', borderRadius: '2px'}}>app/api/price-search/route.ts</code><br/>
              2. Add <code style={{background: '#fff', padding: '2px 6px', borderRadius: '2px'}}>PRICES_API_KEY</code> to .env.local
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Stats Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{
                background: '#C4F000',
                border: '2px solid #050505',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.8px'
                }}>
                  BEST PRICE
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff'
                }}>
                  {formatCurrency(getBestPrice()?.priceWithShipping || getBestPrice()?.price || 0)}
                </div>
                <div style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#ffffff',
                  opacity: 0.8
                }}>
                  AT {getBestPrice()?.store.toUpperCase()}
                </div>
              </div>

              <div style={{
                background: '#ffffff',
                border: '2px solid #050505',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#050505',
                  letterSpacing: '0.8px'
                }}>
                  YOU SAVE
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#22C55E',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <TrendingDown size={20} strokeWidth={3} />
                  {formatCurrency(getSavings())}
                </div>
                <div style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#050505',
                  opacity: 0.5
                }}>
                  VS HIGHEST PRICE
                </div>
              </div>

              <div style={{
                background: '#050505',
                border: '2px solid #050505',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.8px'
                }}>
                  STORES FOUND
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff'
                }}>
                  {results.length}
                </div>
                <div style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#ffffff',
                  opacity: 0.5
                }}>
                  FROM GOOGLE SHOPPING
                </div>
              </div>
            </div>

            {/* Product Info */}
            {productInfo && (
              <div style={{
                background: '#F5F5F5',
                border: '2px solid #050505',
                padding: '16px',
                marginBottom: '16px'
              }}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  color: '#050505',
                  marginBottom: '8px'
                }}>
                  {productInfo.name}
                </div>
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#050505',
                  opacity: 0.6,
                  flexWrap: 'wrap'
                }}>
                  {productInfo.brand && <span>BRAND: {productInfo.brand}</span>}
                  {productInfo.category && <span>• {productInfo.category}</span>}
                  {productInfo.rating && <span>• RATING: {productInfo.rating}/100</span>}
                </div>
              </div>
            )}

            {/* Product Name Header */}
            <div style={{
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '1px',
              color: '#050505',
              marginBottom: '16px',
              paddingLeft: '2px'
            }}>
              PRICE COMPARISON RESULTS
            </div>

            {/* Results Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '12px'
            }}>
              {results.map((result, index) => {
                const totalPrice = result.priceWithShipping || result.price;
                const isBest = index === 0;
                
                return (
                  <a
                    key={index}
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: isBest ? '#C4F000' : '#ffffff',
                      border: '2px solid #050505',
                      padding: '18px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(-2px, -2px)';
                      e.currentTarget.style.boxShadow = '-2px 2px 0px #050505';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {isBest && (
                      <div style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        background: '#050505',
                        border: '2px solid #050505',
                        padding: '4px 10px',
                        fontSize: '9px',
                        fontWeight: 800,
                        color: '#C4F000',
                        letterSpacing: '0.5px'
                      }}>
                        BEST DEAL
                      </div>
                    )}

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <div style={{ fontSize: '24px' }}>
                        {getStoreEmoji(result.store)}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: '#050505',
                        flex: 1,
                        wordBreak: 'break-word'
                      }}>
                        {result.store.toUpperCase()}
                      </div>
                      <ExternalLink size={14} strokeWidth={2.5} color="#050505" opacity={0.3} />
                    </div>

                    <div>
                      <div style={{
                        fontSize: '9px',
                        fontWeight: 700,
                        color: '#050505',
                        opacity: 0.5,
                        marginBottom: '4px'
                      }}>
                        TOTAL PRICE
                      </div>
                      <div style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: '#050505'
                      }}>
                        {formatCurrency(totalPrice)}
                      </div>
                    </div>

                    {result.shipping !== undefined && result.shipping > 0 && (
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '8px',
                        borderTop: '1px dashed #050505'
                      }}>
                        <div>
                          <div style={{
                            fontSize: '8px',
                            fontWeight: 700,
                            color: '#050505',
                            opacity: 0.5,
                            marginBottom: '2px'
                          }}>
                            PRODUCT
                          </div>
                          <div style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#050505'
                          }}>
                            {formatCurrency(result.price)}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{
                            fontSize: '8px',
                            fontWeight: 700,
                            color: '#050505',
                            opacity: 0.5,
                            marginBottom: '2px'
                          }}>
                            SHIPPING
                          </div>
                          <div style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#050505'
                          }}>
                            {formatCurrency(result.shipping)}
                          </div>
                        </div>
                      </div>
                    )}

                    <div style={{
                      background: isBest ? '#ffffff' : '#f5f5f5',
                      border: '1px solid #050505',
                      padding: '8px 10px',
                      fontSize: '9px',
                      fontWeight: 700,
                      color: '#050505',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}>
                      <ShoppingCart size={12} strokeWidth={2.5} />
                      {result.availability.toUpperCase()}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}