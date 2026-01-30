
import React, { useEffect, useRef, useState } from 'react';
import { 
  Maximize2, 
  Minus, 
  Plus, 
  Share2, 
  Download, 
  MousePointer2,
  Hand,
  Type as TypeIcon,
  Link2
} from 'lucide-react';

const Visualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simulation of a complex architecture diagram
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const nodes = [
        { x: 100, y: 100, label: 'Customer Portal', type: 'App', color: '#6366f1' },
        { x: 400, y: 100, label: 'Auth Service', type: 'App', color: '#6366f1' },
        { x: 250, y: 250, label: 'Customer DB', type: 'Data', color: '#d946ef' },
        { x: 100, y: 400, label: 'AWS EC2', type: 'Node', color: '#3b82f6' },
        { x: 400, y: 400, label: 'Azure SQL', type: 'Node', color: '#3b82f6' },
      ];

      // Draw Connections
      ctx.beginPath();
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      ctx.moveTo(150, 100); ctx.lineTo(400, 100);
      ctx.moveTo(150, 130); ctx.lineTo(250, 250);
      ctx.moveTo(400, 130); ctx.lineTo(280, 250);
      ctx.moveTo(100, 130); ctx.lineTo(100, 400);
      ctx.stroke();

      // Draw Nodes
      nodes.forEach(node => {
        // Shadow
        ctx.shadowColor = 'rgba(0,0,0,0.1)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = 4;

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.roundRect(node.x - 60, node.y - 30, 120, 60, 12);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y);
        ctx.font = 'normal 10px Inter';
        ctx.fillText(node.type, node.x, node.y + 15);
      });
    };

    draw();
  }, []);

  return (
    <div className="h-full flex flex-col gap-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Strategy Visualizer</h2>
          <p className="text-slate-500 mt-1">Interactive capability mapping and system architecture.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
            <Share2 size={18} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
            <Download size={18} />
            <span className="text-sm font-semibold">Export PDF</span>
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
        {/* Toolbar */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 p-1.5 bg-white/90 backdrop-blur border border-slate-200 rounded-2xl shadow-xl z-10 transition-transform duration-300 group-hover:translate-x-1">
          <button className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><MousePointer2 size={20} /></button>
          <button className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"><Hand size={20} /></button>
          <div className="h-px bg-slate-200 mx-2 my-1" />
          <button className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"><TypeIcon size={20} /></button>
          <button className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"><Link2 size={20} /></button>
          <div className="h-px bg-slate-200 mx-2 my-1" />
          <button className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"><Plus size={20} /></button>
          <button className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"><Minus size={20} /></button>
        </div>

        {/* View Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur border border-slate-200 rounded-full shadow-xl z-10">
          <button onClick={() => setZoom(z => Math.max(z - 10, 10))} className="p-1 text-slate-400 hover:text-indigo-600"><Minus size={18} /></button>
          <span className="text-sm font-bold text-slate-700 min-w-[3rem] text-center">{zoom}%</span>
          <button onClick={() => setZoom(z => Math.min(z + 10, 200))} className="p-1 text-slate-400 hover:text-indigo-600"><Plus size={18} /></button>
          <div className="w-px h-4 bg-slate-200" />
          <button className="p-1 text-slate-400 hover:text-indigo-600"><Maximize2 size={18} /></button>
        </div>

        {/* Canvas Area */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
          <canvas 
            ref={canvasRef} 
            width={1200} 
            height={800} 
            className="w-full h-full cursor-crosshair transition-transform duration-200"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center center' }}
          />
        </div>

        {/* Legend */}
        <div className="absolute bottom-6 right-6 p-4 bg-white/90 backdrop-blur border border-slate-200 rounded-2xl shadow-xl">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Model Symbols</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-xs font-medium text-slate-600">Application Component</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-fuchsia-500" />
              <span className="text-xs font-medium text-slate-600">Data Object</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-xs font-medium text-slate-600">Node / Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
