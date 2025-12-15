import React from 'react';
import { TemplateProps } from '../../types';

export const BoldPop: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="h-full w-full overflow-y-auto flex flex-col pt-12 px-5 font-sans" style={{backgroundColor: data.themeColor}}>
      {/* Brutalist Shadow Box */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 mb-8 transform -rotate-1">
        <div className="flex flex-col items-center text-center gap-4">
            <div className="w-24 h-24 border-4 border-black overflow-hidden bg-gray-200 rounded-full">
                <img src={data.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
                <h1 className="text-2xl font-black italic text-black leading-none mb-2">{data.name.toUpperCase()}</h1>
                <p className="font-bold text-[10px] bg-black text-white px-2 py-1 inline-block uppercase tracking-widest">{data.title}</p>
            </div>
        </div>
        <p className="mt-4 text-sm font-bold text-black leading-snug border-t-4 border-black pt-3 text-center">
            {data.bio}
        </p>
      </div>

      <div className="space-y-4 pb-8">
        {data.links.map((link, i) => (
            <a key={link.id} href={link.url} target="_blank" rel="noreferrer"
               className={`block bg-white border-4 border-black p-4 font-black text-black text-center uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                {link.platform} !!!
            </a>
        ))}
      </div>
    </div>
  );
};