import React from 'react';
import { TemplateProps } from '../../types';
import { Instagram, Twitter, Linkedin, Globe, Mail, Link as LinkIcon, ChevronRight, Cpu } from 'lucide-react';

export const NeonCyber: React.FC<TemplateProps> = ({ data }) => {
  const glow = `0 0 10px ${data.themeColor}, 0 0 20px ${data.themeColor}`;
  
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram size={16} />;
      case 'twitter': return <Twitter size={16} />;
      case 'linkedin': return <Linkedin size={16} />;
      case 'website': return <Globe size={16} />;
      case 'email': return <Mail size={16} />;
      default: return <LinkIcon size={16} />;
    }
  };

  return (
    <div className="h-full w-full bg-black text-white overflow-y-auto flex flex-col pt-8 px-5 font-tech relative">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent z-10" style={{color: data.themeColor, boxShadow: glow}}></div>
      
      <div className="flex items-center gap-4 mb-8 relative z-10">
         <div className="absolute -left-5 top-0 bottom-0 w-1.5" style={{backgroundColor: data.themeColor, boxShadow: glow}}></div>
         <div className="w-20 h-20 relative shrink-0">
            <div className="absolute inset-0 border-2 border-dashed rounded-full animate-[spin_10s_linear_infinite]" style={{borderColor: data.themeColor}}></div>
            <div className="w-full h-full p-1.5">
                <img src={data.avatarUrl} alt="Avatar" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all" />
            </div>
         </div>
         <div>
            <h1 className="text-xl font-bold uppercase tracking-wider" style={{textShadow: `0 0 5px ${data.themeColor}`}}>{data.name}</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">{data.title}</p>
         </div>
      </div>

      <div className="bg-slate-900/80 border border-slate-700 p-4 mb-8 relative overflow-hidden group z-10">
        <div className="absolute top-0 right-0 p-1.5 flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{backgroundColor: data.themeColor}}></div>
             <div className="w-1.5 h-1.5 rounded-full animate-pulse delay-75" style={{backgroundColor: data.themeColor, opacity: 0.5}}></div>
        </div>
        <p className="text-xs text-slate-300 font-sans leading-relaxed border-l-2 pl-3" style={{borderColor: data.themeColor}}>
            <span className="text-gray-500 font-tech text-[10px] block mb-1 opacity-70 flex items-center gap-1"><Cpu size={10} /> BIO_DATA://</span>
            {data.bio}
        </p>
      </div>

      <div className="space-y-3 pb-8 z-10">
        {data.links.map((link) => (
           <a key={link.id} href={link.url} target="_blank" rel="noreferrer"
              className="flex items-center bg-black/50 border border-slate-800 p-3.5 hover:bg-slate-900/80 transition-all group relative overflow-hidden backdrop-blur-sm"
              style={{borderColor: `${data.themeColor}40`}} // Hex alpha 40
           >
              <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity" style={{color: data.themeColor}}></div>
              <div className="mr-4 text-gray-500 group-hover:text-white transition-colors">
                 {getIcon(link.platform)}
              </div>
              <span className="uppercase text-sm tracking-widest font-bold flex-1 text-slate-300 group-hover:text-white">{link.platform}</span>
              <ChevronRight size={16} style={{color: data.themeColor}} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
           </a>
        ))}
      </div>
      
      {/* Decorative scanline */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite]"></div>
    </div>
  );
};