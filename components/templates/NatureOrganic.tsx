import React from 'react';
import { TemplateProps } from '../../types';
import { Instagram, Twitter, Linkedin, Globe, Mail, Link as LinkIcon } from 'lucide-react';

export const NatureOrganic: React.FC<TemplateProps> = ({ data }) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram size={14} />;
      case 'twitter': return <Twitter size={14} />;
      case 'linkedin': return <Linkedin size={14} />;
      case 'website': return <Globe size={14} />;
      case 'email': return <Mail size={14} />;
      default: return <LinkIcon size={14} />;
    }
  };

  return (
    <div className="h-full w-full bg-[#f8f5f2] text-slate-800 overflow-y-auto flex flex-col items-center pt-10 px-6 font-sans">
      <div className="absolute top-0 w-full h-48 bg-[#ebe5de] rounded-b-[60px] -z-0"></div>
      
      <div className="z-10 w-28 h-28 rounded-[2rem] overflow-hidden shadow-xl rotate-3 border-4 border-white mb-5 mt-4">
        <img src={data.avatarUrl} alt="Profile" className="w-full h-full object-cover -rotate-3 scale-110" />
      </div>

      <div className="text-center z-10 mb-8 relative">
        <h1 className="text-2xl font-serif font-medium text-slate-800">{data.name}</h1>
        <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">{data.title}</p>
        {/* Organic decorative element */}
        <div className="absolute -right-8 -top-4 w-6 h-6 rounded-full opacity-50" style={{backgroundColor: data.themeColor}}></div>
      </div>

      <div className="w-full bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] mb-6 border border-[#f0eadd] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full opacity-30" style={{backgroundColor: data.themeColor}}></div>
        <p className="text-sm text-center text-slate-600 italic font-serif leading-relaxed">"{data.bio}"</p>
      </div>

      <div className="w-full space-y-3 pb-8">
        {data.links.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-transparent hover:border-[#d6ccc2] transition-all group">
             <div className="w-8 h-8 rounded-full bg-[#f4f1ee] flex items-center justify-center text-slate-500 group-hover:text-white transition-colors mr-3" style={{ transition: 'background-color 0.3s', backgroundColor: 'var(--hover-bg, #f4f1ee)' }}>
               {/* Inline style trick for hover color */}
               <style>{`.group:hover .w-8 { background-color: ${data.themeColor} !important; }`}</style>
               {getIcon(link.platform)}
             </div>
             <span className="font-medium text-sm text-slate-700 capitalize group-hover:text-slate-900">{link.platform}</span>
          </a>
        ))}
      </div>
    </div>
  );
};