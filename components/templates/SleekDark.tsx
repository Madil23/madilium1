import React from 'react';
import { TemplateProps } from '../../types';
import { Instagram, Twitter, Linkedin, Globe, Mail, Link as LinkIcon, ArrowUpRight } from 'lucide-react';

export const SleekDark: React.FC<TemplateProps> = ({ data }) => {
  
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'website': return <Globe size={20} />;
      case 'email': return <Mail size={20} />;
      default: return <LinkIcon size={20} />;
    }
  };

  return (
    <div className="h-full w-full bg-slate-950 text-white overflow-y-auto relative flex flex-col items-center pt-12 px-6 font-sans">
      {/* Background Accent */}
      <div 
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b opacity-15 pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to bottom, ${data.themeColor}, transparent)` }}
      />
      
      {/* Glow Effect behind Avatar */}
      <div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: data.themeColor }}
      />

      {/* Avatar */}
      <div className="relative z-10 mb-6 group">
        <div className="w-32 h-32 rounded-full p-1.5 bg-gradient-to-tr from-slate-800 to-slate-600 shadow-2xl">
          <img 
            src={data.avatarUrl} 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover border-4 border-slate-950"
          />
        </div>
      </div>

      {/* Info */}
      <h1 className="text-3xl font-bold tracking-tight mb-2 text-center">{data.name}</h1>
      <div className="flex items-center gap-2 mb-6">
        <div className="h-px w-8 bg-slate-700"></div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{data.title}</p>
        <div className="h-px w-8 bg-slate-700"></div>
      </div>
      
      <p className="text-slate-400 text-center text-sm leading-relaxed mb-10 max-w-[90%]">
        {data.bio}
      </p>

      {/* Links */}
      <div className="w-full space-y-4 pb-12 flex-1">
        {data.links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="group relative w-full bg-slate-900/40 backdrop-blur-md border border-slate-800 hover:border-slate-600 hover:bg-slate-800/60 transition-all rounded-xl p-4 flex items-center gap-4 overflow-hidden"
          >
             {/* Hover Glow */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

             <div className="text-slate-400 group-hover:text-white transition-colors shrink-0">
                {getIcon(link.platform)}
             </div>
             
             <div className="flex-1 text-left min-w-0">
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-white capitalize truncate">
                    {link.platform}
                </span>
                {link.platform === 'website' && link.url && <span className="text-[10px] text-slate-500 truncate block opacity-0 group-hover:opacity-100 transition-opacity">{link.url.replace(/^https?:\/\//, '')}</span>}
             </div>

             <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
          </a>
        ))}
      </div>
      
      {/* Footer Branding */}
      <div className="mt-auto mb-8 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
        <div className="w-8 h-1 bg-slate-800 rounded-full mb-2"></div>
        <p className="text-[10px] font-tech uppercase tracking-widest text-slate-500">
          Madilium Identity
        </p>
      </div>
    </div>
  );
};