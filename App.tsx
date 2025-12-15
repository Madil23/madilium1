import React, { useState, useEffect } from 'react';
import { Configurator } from './components/Configurator';
import { Logo } from './components/Logo';
import { ArrowRight, Smartphone, Zap, Shield } from 'lucide-react';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

type View = 'home' | 'login' | 'signup';

function App() {
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<any>(null); // Placeholder for user state

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'login' || hash === 'signup') {
        setView(hash);
      } else {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange, false);
    handleHashChange(); // Initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);


  const scrollToConfigurator = () => {
    document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (view) {
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignUpPage />;
      case 'home':
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 px-4 max-w-7xl mx-auto text-center z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px] -z-10"></div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Next Gen Networking
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-tech text-white mb-6 leading-tight">
                The Last Business Card <br />
                <span className="text-gradient">You'll Ever Need.</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Instantly share your contact info, social media, and portfolio with a single tap. 
                Available in premium <span className="text-cyan-400 font-semibold">Wood</span> or <span className="text-cyan-400 font-semibold">PMMA</span> with our signature bow-tie design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button 
                      onClick={scrollToConfigurator}
                      className="group bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-lg px-8 py-4 rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]"
                  >
                      Create Your Card
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-slate-300 hover:text-white px-8 py-4 font-medium transition-colors flex items-center gap-2">
                      View Gallery
                  </button>
              </div>
            </div>
            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16 border-t border-slate-800/50">
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: Zap, title: "Instant Transfer", desc: "Share details in under a second. No app required for the receiver." },
                      { icon: Smartphone, title: "Universal Compatibility", desc: "Works with all modern iPhone and Android devices natively." },
                      { icon: Shield, title: "Custom Materials", desc: "Choose from high-quality Wood or PMMA finishes in various colors." }
                  ].map((feature, i) => (
                      <div key={i} className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                          <feature.icon className="text-cyan-400 mb-4" size={32} />
                          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                          <p className="text-slate-400">{feature.desc}</p>
                      </div>
                  ))}
              </div>
            </div>
            {/* Configuration Section */}
            <Configurator />
          </>
        );
    }
  }


  return (
    <div className="min-h-screen bg-[#0f172a] overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto z-50 relative">
        <a href="#"><Logo size="sm" /></a>
        <div className="flex items-center gap-4">
            {user ? (
              <>
                <a href="#dashboard" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Dashboard</a>
                <button 
                  onClick={() => setUser(null)}
                  className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-red-500/20"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="#login" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
                    Login
                </a>
                <a href="#signup" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors backdrop-blur-md border border-white/10">
                    Sign Up
                </a>
              </>
            )}
        </div>
      </nav>

      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2">
                <Logo size="sm" />
                <p className="text-slate-500 text-sm">© 2024 Madilium. All rights reserved.</p>
            </div>
            <div className="flex gap-8 text-slate-400 text-sm">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;