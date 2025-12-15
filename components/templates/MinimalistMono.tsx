import React from 'react';
import { TemplateProps } from '../../types';
import { Instagram, Twitter, Linkedin, Globe, Mail, Link as LinkIcon, ArrowUpRight } from 'lucide-react';

export const MinimalistMono: React.FC<TemplateProps> = ({ data }) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram size={18} />;
      case 'twitter': return <Twitter size={18} />;
      case 'linkedin': return <Linkedin size={18} />;
      case 'website': return <Globe size={18} />;
      case 'email': return <Mail size={18} />;
      default: return <LinkIcon size={18} />;
    }
  };

  return (
    <div className="h-full w-full bg-white text-black overflow-y-auto flex flex-col items-center pt-12 px-8 font-sans">
      <div className="w-24 h-24 mb-6 grayscale">
         <img src={data.avatarUrl} alt="Profile" className="w-full h-full object-cover rounded-full border-2 border-black" />
      </div>
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-1 text-center">{data.name}</h1>
      <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-6 text-center">{data.title}</p>
      <p className="text-sm text-center leading-relaxed text-gray-800 mb-10 font-light max-w-[90%]">{data.bio}</p>

      <div className="w-full space-y-0 border-t border-black pb-8">
        {data.links.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="flex justify-between items-center py-4 border-b border-black hover:bg-black hover:text-white transition-colors group px-2">
            <div className="flex items-center gap-3">
                {getIcon(link.platform)}
                <span className="uppercase text-xs font-bold tracking-widest">{link.platform}</span>
            </div>
            <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  );
};