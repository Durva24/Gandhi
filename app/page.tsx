'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GandhiPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-text').forEach((el) => {
      observer.observe(el);
    });

    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const nav = document.querySelector('nav');
      
      if (!nav) return;
      
      if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
      }
      
      if (currentScroll > lastScroll && currentScroll > 80) {
        nav.classList.add('scroll-down');
        nav.classList.remove('scroll-up');
      } else if (currentScroll < lastScroll) {
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleTryDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log('Fullscreen request failed:', err);
      });
      setTimeout(() => {
        window.location.href = '/home';
      }, 500);
    } else {
      window.location.href = '/home';
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=Syne:wght@400;700;800&family=Hind+Guntur:wght@400;700&family=Bungee+Inline&display=swap');

        * {
          border-radius: 0px !important;
          box-sizing: border-box;
        }
        
        body {
          background-color: #F5F5F5;
          color: #050505;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        .font-display { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'Space Grotesk', monospace; }
        .font-chunky { font-family: 'Bungee Inline', cursive; }

        .text-acid-green { color: #C4F000; }
        .bg-acid-green { background-color: #C4F000; }
        .bg-void-black { background-color: #050505; }
        .bg-paper-white { background-color: #F5F5F5; }
        
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .brutal-border { border: 2px solid #050505; }
        
        .brutal-shadow {
          box-shadow: 6px 6px 0px 0px #050505;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .reveal-text {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-text.active {
          opacity: 1;
          transform: translateY(0);
        }

        .receipt-clip {
          clip-path: polygon(
            0% 0%, 100% 0%, 100% 100%, 
            95% 98%, 90% 100%, 85% 98%, 80% 100%, 
            75% 98%, 70% 100%, 65% 98%, 60% 100%, 
            55% 98%, 50% 100%, 45% 98%, 40% 100%, 
            35% 98%, 30% 100%, 25% 98%, 20% 100%, 
            15% 98%, 10% 100%, 5% 98%, 0% 100%
          );
        }
        
        .grid-bg {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
        }

        .grid-bg-dark {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
        }

        .gandhi-portrait-fade img {
          mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        }

        .monkey-fade::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 15%;
          background: linear-gradient(to bottom, rgba(5,5,5,0) 0%, #050505 100%);
          pointer-events: none;
          z-index: 1;
        }

        .text-chunky-green {
          color: #C4F000;
          -webkit-text-stroke: 2px #050505;
          paint-order: stroke fill;
          filter: drop-shadow(6px 6px 0px rgba(0,0,0,0.3));
        }

        nav {
          transition: transform 0.3s ease-in-out;
        }
        nav.scroll-down {
          transform: translateY(-100%);
        }
        nav.scroll-up {
          transform: translateY(0);
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(204, 255, 0, 0.7),
                        0 0 0 0 rgba(204, 255, 0, 0.7);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(204, 255, 0, 0),
                        0 0 0 16px rgba(204, 255, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(204, 255, 0, 0),
                        0 0 0 0 rgba(204, 255, 0, 0);
          }
        }

        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-pulse-fast { animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-ripple { animation: ripple 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>

      <div className="font-body grid-bg" style={{backgroundColor: '#F5F5F5'}}>
        <div className="noise-overlay"></div>

        <nav className="fixed w-full top-0 z-50 bg-paper-white border-b-2 border-black flex justify-between items-center p-4">
          <div className="text-2xl font-display font-bold tracking-tighter uppercase cursor-pointer">Gandhi</div>
          <button onClick={handleTryDemo} className="brutal-border px-4 py-2 font-bold text-sm uppercase bg-black text-acid-green hover:bg-acid-green hover:text-black transition-colors duration-200 animate-ripple">
            Try Demo
          </button>
        </nav>

        <header className="relative flex flex-col justify-center items-center pt-60 pb-0 px-4 overflow-visible z-0">
          <div className="relative mb-0 w-full max-w-[450px]">
            <div className="absolute inset-0 flex flex-col items-center justify-center top-[-60px]">
              <div className="font-chunky text-[170px] leading-[0.75] select-none text-center tracking-wide">
                <span className="text-black text-base font-display font-bold" style={{WebkitTextStroke: '0px'}}>MONEY IS THE ONLY TRUTH</span><br />
                <span className="text-black" style={{WebkitTextStroke: '0px'}}>GANDHI</span><br />
                <span className="text-[150px] text-chunky-green">MONEY</span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative w-full max-w-[450px] mx-auto px-4 -mt-16 z-20 pointer-events-none">
          <div className="relative w-full gandhi-portrait-fade">
            <Image src="/gandhi.png" alt="Gandhi Portrait" width={450} height={600} className="w-full h-auto relative" />
          </div>
        </div>
        
        <div className="relative w-screen bg-acid-green overflow-hidden py-1 z-30 -mt-8" style={{marginLeft: 'calc(-50vw + 50%)', width: '100vw'}}>
          <div className="flex animate-marquee whitespace-nowrap font-display font-bold text-sm uppercase tracking-tight">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex gap-16 px-8">
                <span>MONEY IS THE ONLY TRUTH</span>
                <span>•</span>
                <span>SATYAGRAHA FOR YOUR WALLET</span>
                <span>•</span>
                <span>STOP BUYING OVERPRICED COFFEE</span>
                <span>•</span>
                <span>YOUR BANK ACCOUNT IS WEEPING</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>
        
        <section className="bg-void-black text-paper-white py-24 px-6 border-b-2 border-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mt-12">
              <div className="text-center mb-20 reveal-text">
                <div className="inline-block bg-acid-green text-black font-display font-bold text-xl uppercase px-4 py-1 -rotate-2 animate-pulse-fast" style={{boxShadow: '3px 3px 0px 0px #fff'}}>
                  The 3 Laws of Gandhi
                </div>
              </div>
              
              <div className="flex justify-center gap-12 items-start">
                {[
                  { img: 'monkey-eye', title: 'See No Sales', text: '"Earth provides enough to satisfy every man\'s needs, but not every man\'s greed. The discount is a lie. The FOMO is manufactured.' },
                  { img: 'monkey-ear', title: 'Hear No Hype', text: 'Influencers monetize your insecurity. They sell you solutions to problems you didn\'t have. Unfollow. Unsubscribe. Find peace in silence.', delay: '100ms', mt: true },
                  { img: 'monkey-mouth', title: 'Speak No Flex', text: 'Your new sneakers don\'t make you interesting. Flex is the emptiest form of communication. Save your words. Save your money.', delay: '200ms' }
                ].map((item, i) => (
                  <div key={i} className={`group relative w-1/3 reveal-text ${item.mt ? 'mt-12' : ''} bg-void-black p-4 transition-transform duration-300 cursor-pointer`} style={{transitionDelay: item.delay}}>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-48 h-auto z-10 monkey-fade">
                      <Image src={`/${item.img}.png`} alt={item.title} width={192} height={192} className="w-full h-auto drop-shadow-2xl transition-all" />
                    </div>
                    <div className="pt-2 text-center">
                      <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white hover:text-acid-green transition-colors duration-300">{item.title}</h3>
                      <p className="font-mono text-sm leading-relaxed text-gray-400 hover:text-acid-green transition-colors duration-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper-white py-24 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 reveal-text">
              <h3 className="text-6xl font-display font-bold uppercase mb-2">The Holy Audit</h3>
              <p className="font-mono text-sm bg-black text-white inline-block px-3 py-1 animate-pulse">WE ARE WATCHING YOU SPEND</p>
            </div>
            <div className="flex items-center justify-center gap-20">
              <div className="w-1/3 space-y-12 text-right">
                {[
                  { title: 'Total Surveillance', bg: 'bg-acid-green', text: 'We sync with your email, SMS, and WhatsApp. That "secret" Amazon order? We saw it. Consider us the all-seeing financial eye.' },
                  { title: 'Life Currency™', bg: 'bg-black text-white', text: 'That ₹1,20,000 phone is 62 days of your mortal existence. We convert rupees to hours of life.' }
                ].map((item, i) => (
                  <div key={i} className="reveal-text hover:translate-x-2 transition-transform">
                    <h4 className={`text-xl font-bold uppercase font-display ${item.bg} inline-block px-1 mb-2`}>{item.title}</h4>
                    <p className="font-mono text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="animate-float relative">
                <div className="w-[300px] bg-white drop-shadow-2xl receipt-clip pb-8 text-black font-mono text-sm relative z-10 hover:rotate-2 transition-transform duration-300">
                  <div className="text-center border-b-2 border-dashed border-gray-300 p-6 pb-4">
                    <div className="font-display font-black text-3xl mb-1">BILL OF SIN</div>
                    <div className="text-xs text-gray-500">DATE: TODAY • TIME: TOO LATE</div>
                    <div className="text-xs text-gray-500">ID: #BROKE-AF-2024</div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between">
                      <span>THIRD WAVE COFFEE</span>
                      <span className="font-bold">2 HRS LIFE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>FAST FASHION</span>
                      <span className="font-bold">3 DAYS LIFE</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>EMI TRAP</span>
                      <span className="font-bold">6 MONTHS</span>
                    </div>
                    <div className="flex justify-between text-gray-400 italic text-xs pt-2">
                      <span>Financial Freedom</span>
                      <span>₹0.00</span>
                    </div>
                  </div>
                  <div className="border-t-2 border-dashed border-gray-300 mx-4 pt-4 mb-4">
                    <div className="flex justify-between text-xl font-bold font-display">
                      <span>TOTAL</span>
                      <span>DEVASTATED</span>
                    </div>
                  </div>
                  <div className="mx-6 h-12 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=')] bg-repeat-x bg-cover opacity-80 grayscale"></div>
                </div>
                
                <div className="absolute top-10 -right-4 w-full h-full bg-acid-green -z-10 rotate-3 border-2 border-black animate-pulse"></div>
              </div>

              <div className="w-1/3 space-y-12 text-left">
                <div className="reveal-text hover:-translate-x-2 transition-transform">
                  <h4 className="text-xl font-bold uppercase font-display bg-black text-white inline-block px-1 mb-2">Ascetic Streaks</h4>
                  <p className="font-mono text-sm leading-relaxed">Track days without unnecessary spending. Gamify your self-control. Gandhi fasted for freedom. You fast for a down payment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-void-black py-24 px-4 relative overflow-hidden grid-bg-dark border-y-2 border-white">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 reveal-text">
              <h3 className="text-5xl font-display font-bold uppercase mb-4 text-white">
                Arsenal of <span className="text-acid-green">Truth</span>
              </h3>
              <p className="font-mono text-sm text-gray-400">Tools forged in the fires of financial discipline</p>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {[
                { icon: 'M2 4h20v16H2z M22 7l-9 6-9-6', title: 'Auto Sync', text: 'Email crawling. Zero manual entry. Your spending secrets extracted automatically.' },
                { icon: 'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', title: 'Tax Math', text: 'Calculate what you owe the system. No surprises. Only brutal honesty.', delay: '100ms' },
                { icon: 'M3 3v18h18 M19 9l-5 5-4-4-3 3', title: 'Future Vision', text: 'AI-powered predictions. See your financial future before you ruin it.', delay: '200ms' },
                { icon: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M14 2v4a2 2 0 0 0 2 2h4 M10 9H8 M16 13H8 M16 17H8', title: 'Bill Vault', text: 'Every receipt tracked. Every bill remembered. Your paper trail immortalized.', delay: '300ms' }
              ].map((item, i) => (
                <div key={i} className="reveal-text group bg-void-black brutal-border brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 p-6 text-center cursor-pointer" style={{transitionDelay: item.delay}}>
                  <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-acid-green group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon}/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-display font-bold uppercase mb-2 text-white group-hover:text-acid-green transition-colors">{item.title}</h4>
                  <p className="font-mono text-xs text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-acid-green py-20 border-y-2 border-black">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white brutal-border p-8 brutal-shadow relative hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
              <div className="absolute -top-3 -right-3 bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase animate-pulse-fast">Live Roast</div>
              
              <div className="space-y-6 font-mono text-sm">
                <div className="flex gap-3 reveal-text">
                  <div className="w-8 h-8 bg-gray-200 border border-black flex items-center justify-center font-bold shrink-0">U</div>
                  <div className="bg-gray-100 p-3 border border-black w-full">
                    "Should I buy these limited edition sneakers? They're on sale, down from ₹12,000 to ₹8,000."
                  </div>
                </div>
                <div className="flex gap-3 reveal-text" style={{transitionDelay: '150ms'}}>
                  <div className="w-8 h-8 bg-black text-acid-green border border-black flex items-center justify-center font-bold shrink-0">AI</div>
                  <div className="bg-void-black text-white p-4 w-full relative" style={{boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.3)'}}>
                    <p>
                      Let me translate. You earn ₹400/hour. Those sneakers cost ₹8,000. 
                      That's <span className="text-acid-green">20 hours</span> of your finite existence—2.5 full working days. 
                      <br /><br />
                      Gandhi walked 240 miles for salt. You want to spend 20 hours of life for rubber and branded canvas? 
                      The "sale" is a cognitive trap.
                      <br /><br />
                      <span className="italic text-gray-400">"Be the change you wish to see" starts with not buying things to impress people you don't like.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-void-black text-white py-32 px-6 text-center relative overflow-hidden grid-bg-dark">
          <div className="relative z-10 max-w-4xl mx-auto reveal-text">
            <h2 className="text-7xl font-display font-black mb-8 uppercase leading-tight">
              Stop spending.<br />Start <span className="text-acid-green italic">living.</span>
            </h2>
            <p className="font-mono mb-10 text-gray-400 text-lg px-4">
              "Live as if you were to die tomorrow. Learn as if you were to live forever."<br />
              <span className="text-sm">— But maybe don't spend as if credit cards are free money.</span>
            </p>
            <button onClick={handleTryDemo} className="bg-acid-green text-black font-bold text-2xl px-10 py-5 brutal-border hover:translate-x-1 hover:translate-y-1 hover:shadow-none brutal-shadow transition-all uppercase">
              Try Demo
            </button>
          </div>
        </section>

        <footer className="bg-paper-white border-t-2 border-black py-10 px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-display font-bold">Gandhi.</h1>
              <p className="font-mono text-xs mt-1 text-gray-500">Non-violent resistance to consumerism.</p>
            </div>
            <div className="flex gap-6 font-mono text-xs font-bold uppercase">
              <a href="#" className="hover:text-acid-green hover:underline transition-colors">Manifesto</a>
              <a href="#" className="hover:text-acid-green hover:underline transition-colors">Terms of Suffering</a>
              <a href="#" className="hover:text-acid-green hover:underline transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}