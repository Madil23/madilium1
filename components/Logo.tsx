import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const dim = size === 'sm' ? 32 : size === 'md' ? 48 : 80;
  const textSize = size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-5xl';
  const gap = size === 'sm' ? 'gap-2' : 'gap-3';

  return (
    <div className={`flex items-center ${gap} select-none`}>
      <div 
        className="relative flex items-center justify-center shadow-lg rounded-xl bg-slate-800"
        style={{ width: dim, height: dim }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full p-1">
            <defs>
                <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#cbd5e1" />
                    <stop offset="20%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#94a3b8" />
                    <stop offset="80%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
                <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
                </filter>
            </defs>

            {/* Metallic M Shape */}
            <path 
                d="M 15 20 
                   Q 15 15 20 15 L 35 15 
                   L 50 35 
                   L 65 15 L 80 15 Q 85 15 85 20
                   L 85 80 Q 85 85 80 85
                   L 65 85
                   L 50 65
                   L 35 85
                   L 20 85 Q 15 85 15 80
                   Z" 
                fill="url(#metalGradient)"
                filter="url(#shadow)"
                className="drop-shadow-sm"
            />
            
            {/* Center Dark Circle */}
            <circle cx="50" cy="50" r="16" fill="#0f172a" />

            {/* Signal Waves */}
            <circle cx="50" cy="50" r="3" fill="white" />
            
            {/* Inner Arcs */}
            <path d="M 43 45 A 7 7 0 0 0 43 55" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 57 45 A 7 7 0 0 1 57 55" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Outer Arcs */}
            <path d="M 37 40 A 14 14 0 0 0 37 60" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 63 40 A 14 14 0 0 1 63 60" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />

        </svg>
      </div>
      <div className={`font-tech font-bold tracking-widest text-slate-100 ${textSize} flex items-baseline`}>
        MADIL
        <span className="relative mx-[1px]">
            I
            {/* Sparkle on the I */}
            <svg className="absolute -top-1.5 -right-1.5 w-3 h-3 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
        </span>
        UM
      </div>
    </div>
  );
};