import React from 'react';
import { TemplateProps } from '../../types';
import { Instagram, Twitter, Linkedin, Globe, Mail, Link as LinkIcon, Sparkles, ChevronRight } from 'lucide-react';

export const SoftPastel: React.FC<TemplateProps> = ({ data }) => {
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
    <div className="h-full w-full bg-gradient-to-br from-white to-slate-50 text-slate-700 overflow-y-auto flex flex-col items-center pt-12 px-6 font-sans relative">
      {/* Soft color blob background */}
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 rounded-full blur-[60px] opacity-30 pointer-events-none" style={{backgroundColor: data.themeColor}}></div>
      <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 rounded-full blur-[60px] opacity-20 bg-pink-300 pointer-events-none"></div>

      <div className="relative mb-6 z-10">
        <div className="w-28 h-28 rounded-full p-1 bg-white shadow-xl ring-4 ring-white/50">
            <img src={data.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" />
        </div>
        <div className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md text-yellow-400">
            <Sparkles size={14} fill="currentColor" />
        </div>
      </div>

      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 mb-1 text-center z-10">
        {data.name}
      </h1>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-8 text-center z-10">{data.title}</p>
      
      <div className="bg-white/70 backdrop-blur-md p-5 rounded-3xl shadow-sm mb-8 w-full border border-white z-10">
        <p className="text-center text-sm text-slate-600 leading-relaxed font-medium">{data.bio}</p>
      </div>

      <div className="w-full space-y-3 pb-8 z-10">
        {data.links.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all text-slate-600 border border-slate-50">
                <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center transition-colors" style={{color: data.themeColor}}>
                    {getIcon(link.platform)}
                </div>
                <span className="font-bold text-sm capitalize flex-1 text-slate-700">{link.platform}</span>
                <ChevronRight size={16} className="text-slate-300" />
            </a>
        ))}
      </div>
    </div>
  );
};