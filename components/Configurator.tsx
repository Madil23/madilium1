import React, { useState, useCallback } from 'react';
import { UserProfile, TemplateId, SocialLink } from '../types';
import { MockPhone } from './MockPhone';
import { generateBio } from '../services/geminiService';
import { Wand2, Loader2, Layout, User, Share2, Palette, Sparkles, Eye, X } from 'lucide-react';

const COLORS = [
  '#3b82f6', // Blue
  '#ef4444', // Red
  '#10b981', // Emerald
  '#f59e0b', // Amber
  '#8b5cf6', // Violet
  '#ec4899', // Pink
  '#0f172a', // Slate
];

const TEMPLATES: { id: TemplateId; name: string; description: string }[] = [
  { id: 'sleek-dark', name: 'Sleek Dark', description: 'Bold, high-contrast, modern.' },
  { id: 'modern-glass', name: 'Glassmorphism', description: 'Trendy, colorful, blurred.' },
  { id: 'professional-light', name: 'Professional', description: 'Clean, structured, corporate.' },
  { id: 'minimalist-mono', name: 'Minimalist Mono', description: 'Clean, black & white, timeless.' },
  { id: 'neon-cyber', name: 'Neon Cyber', description: 'Futuristic, glitchy, high-tech.' },
  { id: 'nature-organic', name: 'Nature Organic', description: 'Soft, curved, approachable.' },
  { id: 'bold-pop', name: 'Bold Pop', description: 'Vibrant, brutalist, energetic.' },
  { id: 'soft-pastel', name: 'Soft Pastel', description: 'Friendly, light gradients.' },
];

export const Configurator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'template' | 'details' | 'links'>('template');
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [isGeneratingBio, setIsGeneratingBio] = useState(false);
  const [bioKeywords, setBioKeywords] = useState('Professional, Innovative, Leader');
  const [data, setData] = useState<UserProfile>({
    name: 'Alex Sterling',
    title: 'Senior Product Designer',
    bio: 'Creating intuitive digital experiences that solve real problems. Passionate about minimalist design and user-centric architecture.',
    avatarUrl: 'https://picsum.photos/300/300',
    themeColor: '#3b82f6',
    templateId: 'sleek-dark',
    links: [
      { id: '1', platform: 'linkedin', url: '#' },
      { id: '2', platform: 'website', url: '#' },
      { id: '3', platform: 'email', url: 'mailto:alex@example.com' },
    ]
  });

  const handleBioGeneration = useCallback(async () => {
    if (!data.title) return;
    setIsGeneratingBio(true);
    const newBio = await generateBio(data.title, bioKeywords);
    setData(prev => ({ ...prev, bio: newBio }));
    setIsGeneratingBio(false);
  }, [data.title, bioKeywords]);

  const updateLink = (id: string, field: keyof SocialLink, value: string) => {
    setData(prev => ({
      ...prev,
      links: prev.links.map(l => l.id === id ? { ...l, [field]: value } : l)
    }));
  };

  return (
    <div id="configurator" className="min-h-screen bg-slate-900 py-12 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT: Controls */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-tech text-white">Create Your Identity</h2>
            <p className="text-slate-400">Customize your Madilium NFC profile. Preview updates in real-time.</p>
          </div>

          <div className="glass-panel rounded-2xl p-6 shadow-2xl">
            {/* Tabs */}
            <div className="flex space-x-2 mb-8 border-b border-slate-700/50 pb-2 overflow-x-auto scrollbar-hide">
              {[
                { id: 'template', icon: Layout, label: 'Template' },
                { id: 'details', icon: User, label: 'Profile' },
                { id: 'links', icon: Share2, label: 'Links' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6 min-h-[400px]">
              
              {activeTab === 'template' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TEMPLATES.map(t => (
                      <button
                        key={t.id}
                        onClick={() => setData({ ...data, templateId: t.id })}
                        className={`text-left p-4 rounded-xl border transition-all h-full ${
                          data.templateId === t.id
                            ? 'bg-slate-800 border-cyan-500 ring-1 ring-cyan-500/50'
                            : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <h3 className="text-white font-semibold text-sm mb-1">{t.name}</h3>
                        <p className="text-slate-400 text-xs">{t.description}</p>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-700/50">
                     <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                        <Palette size={16} /> Theme Color
                     </label>
                     <div className="flex flex-wrap gap-3">
                        {COLORS.map(c => (
                            <button
                                key={c}
                                onClick={() => setData({...data, themeColor: c})}
                                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                                    data.themeColor === c ? 'border-white' : 'border-transparent'
                                }`}
                                style={{ backgroundColor: c }}
                            />
                        ))}
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={e => setData({...data, name: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Job Title</label>
                    <input
                      type="text"
                      value={data.title}
                      onChange={e => setData({...data, title: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  
                  {/* AI Bio Generator Section */}
                  <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 space-y-3">
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                          <Sparkles size={16} />
                          <span>AI Assistant</span>
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Keywords / Vibe</label>
                        <div className="flex gap-2">
                            <input
                            type="text"
                            value={bioKeywords}
                            onChange={e => setBioKeywords(e.target.value)}
                            placeholder="e.g. Creative, Leadership, Tech"
                            className="flex-1 bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                            <button 
                                onClick={handleBioGeneration}
                                disabled={isGeneratingBio || !data.title}
                                className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                            >
                                {isGeneratingBio ? <Loader2 size={16} className="animate-spin" /> : <Wand2 size={16} />}
                                Generate
                            </button>
                        </div>
                      </div>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Bio</label>
                    <textarea
                      value={data.bio}
                      onChange={e => setData({...data, bio: e.target.value})}
                      rows={4}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>
                   <div>
                    <label className="block text-sm text-slate-400 mb-1">Profile Image URL</label>
                    <input
                      type="text"
                      value={data.avatarUrl}
                      onChange={e => setData({...data, avatarUrl: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    <p className="text-xs text-slate-500 mt-1">Use a hosted image URL.</p>
                  </div>
                </div>
              )}

              {activeTab === 'links' && (
                <div className="space-y-4 animate-fadeIn">
                    {data.links.map((link, index) => (
                        <div key={link.id} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                             <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold text-slate-400 uppercase">Link #{index + 1}</span>
                                <button 
                                    onClick={() => setData(prev => ({...prev, links: prev.links.filter(l => l.id !== link.id)}))}
                                    className="text-xs text-red-400 hover:text-red-300"
                                >
                                    Remove
                                </button>
                             </div>
                             <div className="flex gap-2 mb-2">
                                <select 
                                    value={link.platform}
                                    onChange={(e) => updateLink(link.id, 'platform', e.target.value)}
                                    className="bg-slate-900 text-slate-300 text-xs rounded border border-slate-600 px-2 py-2"
                                >
                                    <option value="website">Website</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="twitter">Twitter</option>
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="email">Email</option>
                                </select>
                                <input
                                    type="text"
                                    value={link.url}
                                    onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                                    placeholder="https://..."
                                    className="flex-1 bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
                                />
                             </div>
                        </div>
                    ))}
                    <button 
                        onClick={() => setData(prev => ({...prev, links: [...prev.links, { id: Date.now().toString(), platform: 'website', url: '' }]}))}
                        className="w-full py-3 rounded-lg border border-dashed border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 transition-colors text-sm font-medium"
                    >
                        + Add Another Link
                    </button>
                </div>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700/50 flex justify-end">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-105">
                    Save & Order Card
                </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Live Preview - Desktop */}
        <div className="hidden lg:flex lg:sticky lg:top-8 flex-col items-center justify-center space-y-6">
            <h3 className="text-slate-400 font-tech uppercase tracking-widest text-sm">Live Preview</h3>
            <div className="transform transition-transform duration-500 hover:scale-[1.02]">
                 <MockPhone data={data} />
            </div>
            <p className="text-slate-500 text-xs text-center max-w-xs">
                This preview represents how your Madilium page will look on a client's device after tapping your NFC card.
            </p>
        </div>

      </div>

      {/* Mobile Preview FAB */}
      <button
        onClick={() => setShowMobilePreview(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-cyan-500 text-slate-900 p-4 rounded-full shadow-xl shadow-cyan-500/20 border-2 border-slate-800 hover:bg-cyan-400 hover:scale-105 transition-all"
        aria-label="Toggle Live Preview"
      >
        <Eye size={24} />
      </button>

      {/* Mobile Preview Modal */}
      {showMobilePreview && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 lg:hidden animate-fadeIn">
           <button
             onClick={() => setShowMobilePreview(false)}
             className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
           >
             <X size={32} />
           </button>
           
           <h3 className="text-white font-tech uppercase tracking-widest text-lg mb-6 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
             Live Preview
           </h3>
           
           <div className="scale-[0.85] sm:scale-100 origin-center transition-transform">
              <MockPhone data={data} />
           </div>
           
           <p className="text-slate-500 text-xs mt-6 text-center">Tap X to return to editing</p>
        </div>
      )}
    </div>
  );
};