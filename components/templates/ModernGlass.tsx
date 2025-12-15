import React from 'react';
import { TemplateProps } from '../../types';
import * as Lucide from 'lucide-react';

export const ModernGlass: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="h-full w-full bg-gray-100 text-slate-800 overflow-y-auto relative flex flex-col items-center pt-8 px-4 font-sans">
      {/* Organic Background Blobs */}
      <div 
        className="absolute top-[-10%] left-[-20%] w-[150%] h-[60%] rounded-[50%] blur-3xl opacity-40 pointer-events-none"
        style={{ backgroundColor: data.themeColor }}
      />
       <div 
        className="absolute bottom-[-10%] right-[-20%] w-[120%] h-[50%] rounded-[50%] blur-3xl opacity-30 bg-purple-400 pointer-events-none"
      />

      {/* Card Container */}
      <div className="relative z-10 w-full bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl rounded-3xl p-6 flex flex-col items-center mt-8">
        <div className="w-24 h-24 rounded-2xl shadow-lg mb-4 -mt-16 overflow-hidden bg-white">
           <img 
            src={data.avatarUrl} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-xl font-bold text-slate-900">{data.name}</h1>
        <div className="h-1 w-12 rounded-full my-2" style={{ backgroundColor: data.themeColor }} />
        <p className="text-slate-500 text-xs font-semibold uppercase">{data.title}</p>
        
        <p className="text-slate-600 text-center text-xs mt-4 leading-relaxed">
          {data.bio}
        </p>
      </div>

      {/* Links Grid */}
      <div className="w-full grid grid-cols-2 gap-3 mt-6 pb-8 relative z-10">
        {data.links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="bg-white/70 backdrop-blur-md hover:bg-white transition-all shadow-sm hover:shadow-md rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-white"
          >
             <div className="p-2 rounded-full bg-slate-100 text-slate-700">
               {link.platform === 'instagram' && <Lucide.Instagram size={16} />}
               {link.platform === 'twitter' && <Lucide.Twitter size={16} />}
               {link.platform === 'linkedin' && <Lucide.Linkedin size={16} />}
               {link.platform === 'website' && <Lucide.Globe size={16} />}
               {link.platform === 'email' && <Lucide.Mail size={16} />}
             </div>
             <span className="text-xs font-bold text-slate-700">{link.platform}</span>
          </a>
        ))}
      </div>
    </div>
  );
};