import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Share2, 
  X, 
  Code
} from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Interactive 3D tilt cho phone mockup trong modal
  const [deviceTilt, setDeviceTilt] = useState({ x: 0, y: 0 });
  const [moodIndex, setMoodIndex] = useState(0);

  const moods = [
    { name: 'face dead', face: '✖ ‿ ✖', grid: '32×32', color: '#e89db1', led: '#ff0055' },
    { name: 'face off', face: '― ‿ ―', grid: '96×96', color: '#c4a1b0', led: '#888888' },
    { name: 'face angry', face: '◣ 皿 ◢', grid: '96×96', color: '#f07890', led: '#ff2200' },
    { name: 'face sad', face: 'ಥ ‿ ಥ', grid: '96×96', color: '#d0a0b8', led: '#ff5599' },
    { name: 'face live', face: '● ‿ ●', grid: '64×64', color: '#f7b0c3', led: '#00ffcc' }
  ];

  const categories = [
    'All', 'Web', 'Interface', 'Branding', 'Product', 'Typography', 
    'Motion', 'Illustration', '3D', 'Editorial', 'Print', 'Packaging'
  ];

  const items = [
    {
      id: 'ifikmh1cs-pixel-face',
      title: 'TV Portfolio & Pixel Matrix App',
      author: 'anurag',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
      category: 'Interface',
      height: 'h-[360px]',
      bgGradient: 'from-rose-100 to-teal-50',
      description: 'A mobile portfolio app home screen built around an animated handheld device with a dot matrix pixel face that cycles through different moods, set against a clean white typographic layout.',
      impressions: '32.8K',
      outbound: '76',
      source: 'X',
      style: 'Experimental\nPlayful\nIllustrative',
      color: 'Vibrant\nLight',
      interaction: 'Transitions\nMicrointeraction',
      isInteractiveApp: true
    },
    {
      id: '2',
      title: 'Designed in glass.',
      author: 'pavel',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
      category: 'Web',
      height: 'h-[280px]',
      bgGradient: 'from-slate-900 to-black',
      previewText: 'Designed\nin glass.',
      isDark: true
    },
    {
      id: '3',
      title: 'Kinetic Motion Typography System',
      author: 'billnguyen',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80',
      category: 'Motion',
      height: 'h-[400px]',
      bgGradient: 'from-blue-950 via-slate-900 to-cyan-950',
      previewText: 'Hard to break.\nEasy to remember.',
      isDark: true
    },
    {
      id: '4',
      title: 'Ghost Pass: Generative AI Pass',
      author: 'sofia_ui',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
      category: 'Product',
      height: 'h-[320px]',
      bgGradient: 'from-violet-100 to-purple-50',
      previewText: "You've been sent a Ghost Pass",
      isDark: false
    },
    {
      id: '5',
      title: 'Minimalist Monolith Architecture',
      author: 'stefan',
      authorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80',
      category: 'Editorial',
      height: 'h-[340px]',
      bgGradient: 'from-neutral-800 to-stone-900',
      previewText: 'Torsorale\nWorkflow Engine',
      isDark: true
    },
    {
      id: '6',
      title: 'Solare Luxury Identity 2026',
      author: 'marta',
      authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80',
      category: 'Branding',
      height: 'h-[300px]',
      bgGradient: 'from-amber-50 to-orange-100',
      previewText: 'Casa Di Solare',
      isDark: false
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(i => i.category === activeCategory);

  const activeMood = moods[moodIndex];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setDeviceTilt({ x: (y / (rect.height / 2)) * -22, y: (x / (rect.width / 2)) * 22 });
  };

  return (
    <div className="w-full min-h-screen bg-[#f7f8f8] text-[#1c1c1c] flex font-sans antialiased overflow-x-hidden">
      
      {/* 1. FIXED LEFT SIDEBAR */}
      <aside className="w-60 h-screen sticky top-0 p-6 flex flex-col justify-between border-r border-black/[0.06] bg-white hidden lg:flex shrink-0 select-none">
        <div className="space-y-7">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 bg-black text-white font-black rounded-lg flex items-center justify-center text-xs tracking-tighter shadow-sm">
              BN
            </div>
            <div>
              <div className="text-xs font-bold text-neutral-900 tracking-tight leading-none">BILL NGUYEN</div>
              <div className="text-[10px] text-neutral-400 font-mono mt-0.5">Multimedia & AI</div>
            </div>
          </div>

          {/* Section 1: Works Navigation */}
          <div className="space-y-2 text-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block px-2">
              Browse
            </span>
            <ul className="space-y-0.5 font-medium">
              <li 
                onClick={() => setActiveCategory('All')}
                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors ${
                  activeCategory === 'All' ? 'bg-neutral-100 text-black font-semibold' : 'text-neutral-500 hover:text-black hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>Design</span>
                  {activeCategory === 'All' && <span className="w-1.5 h-1.5 rounded-full bg-black"></span>}
                </div>
                <span className="text-[10px] font-mono text-neutral-400">12</span>
              </li>
              <li 
                onClick={() => setActiveCategory('Motion')}
                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors ${
                  activeCategory === 'Motion' ? 'bg-neutral-100 text-black font-semibold' : 'text-neutral-500 hover:text-black hover:bg-neutral-50'
                }`}
              >
                <span>AI Video & Veo3</span>
                <span className="text-[10px] font-mono text-neutral-400">04</span>
              </li>
              <li 
                onClick={() => setActiveCategory('Interface')}
                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors ${
                  activeCategory === 'Interface' ? 'bg-neutral-100 text-black font-semibold' : 'text-neutral-500 hover:text-black hover:bg-neutral-50'
                }`}
              >
                <span>UI/UX & Web</span>
                <span className="text-[10px] font-mono text-neutral-400">05</span>
              </li>
              <li 
                onClick={() => setActiveCategory('Branding')}
                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors ${
                  activeCategory === 'Branding' ? 'bg-neutral-100 text-black font-semibold' : 'text-neutral-500 hover:text-black hover:bg-neutral-50'
                }`}
              >
                <span>Branding & 3D</span>
                <span className="text-[10px] font-mono text-neutral-400">03</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Technical & Profile */}
          <div className="space-y-2 text-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block px-2">
              Resources
            </span>
            <ul className="space-y-0.5 font-medium text-neutral-500">
              <li className="px-2.5 py-1.5 rounded-lg hover:text-black hover:bg-neutral-50 cursor-pointer transition-colors">
                AI Pipelines
              </li>
              <li className="px-2.5 py-1.5 rounded-lg hover:text-black hover:bg-neutral-50 cursor-pointer transition-colors">
                Toolkit & Skills
              </li>
              <li className="px-2.5 py-1.5 rounded-lg hover:text-black hover:bg-neutral-50 cursor-pointer transition-colors">
                About & Bio
              </li>
            </ul>
          </div>

          {/* Section 3: Social & Contact */}
          <div className="space-y-2 text-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block px-2">
              Connect
            </span>
            <ul className="space-y-0.5 font-medium text-neutral-500">
              <li>
                <a 
                  href="https://github.com/billnguyendesign" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:text-black hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <span>GitHub</span>
                  <span className="text-[10px] text-neutral-400 font-mono">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:boldcraft.contact@gmail.com" 
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:text-black hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <span>Email</span>
                  <span className="text-[10px] text-neutral-400 font-mono">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Card: Status */}
        <div className="pt-4 border-t border-neutral-100">
          <div className="p-3 bg-neutral-50 border border-neutral-200/60 rounded-xl space-y-1 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-neutral-800">Available</span>
            </div>
            <p className="text-[10px] text-neutral-500 leading-tight">
              Open for creative & AI projects
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-neutral-400">
            <span>© 2026 Bill Nguyen</span>
            <span className="font-mono">Saigon</span>
          </div>
        </div>
      </aside>

      {/* 2. MAIN FEED AREA (CHIẾM TRỌN 100% PHẦN CÒN LẠI) */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        
        {/* Top Sticky Filter Header (Hỗ trợ cuộn ngang không bị cắt nút) */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-black/[0.06] px-6 py-3 flex items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 flex-1 min-w-0 pr-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-all ${
                  activeCategory === cat 
                    ? 'bg-black text-white shadow-sm' 
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button className="px-3.5 py-1.5 rounded-full border border-neutral-200 hover:border-black text-xs font-medium transition-colors whitespace-nowrap">
              Log in
            </button>
          </div>
        </header>

        {/* Masonry Grid Showcase (Tự co giãn 1 - 2 - 3 - 4 cột theo màn hình) */}
        <main className="p-6 md:p-8 flex-1 w-full">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 w-full">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group break-inside-avoid rounded-2xl overflow-hidden bg-white border border-black/[0.07] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer relative"
              >
                {/* Visual Card Banner */}
                <div className={`w-full ${item.height} bg-gradient-to-br ${item.bgGradient} p-6 flex flex-col justify-between relative`}>
                  <div className="flex justify-between items-start">
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                      item.isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
                    }`}>
                      {item.category}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-md">
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </button>
                  </div>

                  {item.isInteractiveApp ? (
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-24 h-16 bg-[#e89db1] rounded-lg border-2 border-black p-1 flex items-center justify-center shadow-[3px_3px_0px_#000]">
                        <span className="font-mono text-xs font-black">✖ ‿ ✖</span>
                      </div>
                      <span className="text-[10px] font-mono mt-2 text-neutral-600">click to interact</span>
                    </div>
                  ) : (
                    <h3 className={`text-xl font-bold tracking-tight whitespace-pre-line ${
                      item.isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {item.previewText || item.title}
                    </h3>
                  )}

                  <div className="flex justify-end">
                    <span className="text-[10px] text-neutral-400 font-mono">recent.design</span>
                  </div>
                </div>

                {/* Card Meta Bar */}
                <div className="p-3.5 flex items-center justify-between bg-white border-t border-black/[0.04]">
                  <div className="flex items-center gap-2">
                    <img 
                      src={item.authorAvatar} 
                      alt={item.author} 
                      className="w-5 h-5 rounded-full object-cover border border-neutral-200" 
                    />
                    <span className="text-xs font-medium text-neutral-700">{item.author}</span>
                  </div>
                  <Bookmark className="w-3.5 h-3.5 text-neutral-400 hover:text-black" />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* 3. MODAL VIEW (PHONE PARALLAX INTERACTIVE) */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#f0f2f1] rounded-3xl max-w-5xl w-full h-[90vh] overflow-hidden flex flex-col relative shadow-2xl border border-white/20">
            
            <div className="h-14 border-b border-black/[0.08] px-6 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Design / {selectedItem.title}</span>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full border border-neutral-200 hover:bg-neutral-100 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-neutral-700" />
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
              {/* Left: Info */}
              <div className="lg:col-span-5 p-6 md:p-8 bg-white border-r border-black/[0.06] space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-2">
                    {selectedItem.title}
                  </h2>
                  <div className="flex items-center gap-2 mb-4">
                    <img 
                      src={selectedItem.authorAvatar} 
                      alt="" 
                      className="w-5 h-5 rounded-full object-cover" 
                    />
                    <span className="text-xs font-semibold">{selectedItem.author}</span>
                    <span className="text-xs text-neutral-400">• 1w ago</span>
                  </div>
                  <p className="text-xs leading-relaxed text-neutral-600">
                    {selectedItem.description || 'Interactive mobile web app experiment focusing on micro-interactions, hardware tactile controls, and generative character animations.'}
                  </p>
                </div>

                <div className="border-t border-neutral-100 pt-4 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-400">Impressions</span>
                    <span className="font-mono font-medium">{selectedItem.impressions || '24.5K'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-400">Outbound</span>
                    <span className="font-mono font-medium">{selectedItem.outbound || '120'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-400">Category</span>
                    <span className="font-medium">{selectedItem.category}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-400">Interaction</span>
                    <span className="font-medium text-right">{selectedItem.interaction || '3D Parallax Tilt'}</span>
                  </div>
                </div>
              </div>

              {/* Right: 3D Tilting Phone */}
              <div 
                className="lg:col-span-7 bg-[#212327] p-8 flex items-center justify-center relative overflow-hidden"
                style={{ perspective: 1200 }}
              >
                <div 
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setDeviceTilt({ x: 0, y: 0 })}
                  className="w-full max-w-[320px] bg-white rounded-[44px] p-5 shadow-2xl border-[6px] border-[#36383e] select-none"
                >
                  <div className="w-20 h-4 bg-black rounded-full mx-auto mb-6"></div>

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg">✦</span>
                    <div className="w-6 space-y-1">
                      <div className="h-0.5 bg-black rounded"></div>
                      <div className="h-0.5 bg-black rounded"></div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-serif leading-none tracking-tight mb-2">
                    designer.<br/>artist.<br/>human.
                  </h3>
                  <p className="text-[10px] text-neutral-500 mb-6 leading-relaxed">
                    I direct, explore, tinker — designing to make technology feel more human.
                  </p>

                  <div className="flex flex-col items-center py-2" style={{ perspective: 600 }}>
                    <div 
                      onClick={() => setMoodIndex((prev) => (prev + 1) % moods.length)}
                      className="cursor-pointer rounded-2xl p-3 border-2 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between transition-transform ease-out"
                      style={{
                        backgroundColor: activeMood.color,
                        width: '160px',
                        height: '115px',
                        transform: `rotateX(${deviceTilt.x}deg) rotateY(${deviceTilt.y}deg)`,
                        transitionDuration: '80ms',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div className="flex justify-between items-center text-[7px] font-mono font-bold">
                        <span>MATRIX.AI</span>
                        <div 
                          className="w-2 h-2 rounded-full border border-black"
                          style={{ backgroundColor: activeMood.led }}
                        ></div>
                      </div>

                      <div className="py-2 bg-black/10 rounded flex items-center justify-center font-mono text-sm font-black">
                        {activeMood.face}
                      </div>

                      <div className="flex justify-between items-center text-[8px]">
                        <span className="font-bold">SWITCH</span>
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                      </div>
                    </div>

                    <svg className="w-5 h-10 mt-1 stroke-neutral-400 fill-none" viewBox="0 0 24 40">
                      <path d="M12 0 C16 4, 16 8, 12 10 C8 12, 8 16, 12 18 C16 20, 16 24, 12 26 L12 36" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div className="border-t border-neutral-200 pt-3 mt-4 text-[9px] font-mono text-neutral-500 flex justify-between">
                    <span>{activeMood.name}</span>
                    <span>{activeMood.grid}</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-neutral-400 bg-white/10 px-3 py-1 rounded-full pointer-events-none">
                  Hover to tilt • Click to switch face
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}