import React from 'react';
import { TemplateProps } from '../../types';
import * as Lucide from 'lucide-react';

export const ProfessionalLight: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="h-full w-full bg-white text-slate-900 overflow-y-auto relative flex flex-col">
      {/* Header Banner */}
      <div className="w-full h-32 relative" style={{ backgroundColor: data.themeColor }}>
         <div className="absolute inset-0 bg-black/10 pattern-grid-lg"></div>
      </div>

      <div className="px-6 -mt-12 flex justify-between items-end mb-4">
        <div className="w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden shadow-sm">
           <img 
            src={data.avatarUrl} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mb-2">
            <button className="bg-slate-900 text-white text-xs px-4 py-2 rounded-full font-medium shadow-lg hover:bg-slate-800 transition-colors">
                Save Contact
            </button>
        </div>
      </div>

      <div className="px-6 mb-6">
        <h1 className="text-2xl font-bold text-slate-900 leading-tight">{data.name}</h1>
        <p className="text-slate-500 font-medium">{data.title}</p>
        <div className="w-full h-px bg-slate-100 my-4"></div>
        <p className="text-slate-600 text-sm leading-relaxed">
          {data.bio}
        </p>
      </div>

      <div className="flex-1 bg-slate-50 rounded-t-3xl px-6 py-8 space-y-4 shadow-inner">
        {data.links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="flex items-center w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-slate-300 transition-all group"
          >
             <div className="mr-4 text-slate-400 group-hover:text-slate-900 transition-colors">
               {link.platform === 'instagram' && <Lucide.Instagram size={20} />}
               {link.platform === 'twitter' && <Lucide.Twitter size={20} />}
               {link.platform === 'linkedin' && <Lucide.Linkedin size={20} />}
               {link.platform === 'website' && <Lucide.Globe size={20} />}
               {link.platform === 'email' && <Lucide.Mail size={20} />}
             </div>
             <span className="font-semibold text-sm capitalize">{link.platform}</span>
             <Lucide.ArrowRight className="ml-auto text-slate-300" size={16} />
          </a>
        ))}
      </div>
    </div>
  );
};