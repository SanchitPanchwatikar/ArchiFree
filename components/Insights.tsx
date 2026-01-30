
import React, { useState } from 'react';
import { Sparkles, Send, BrainCircuit, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { getArchitectureInsights } from '../services/geminiService';
import { AIAnalysisResult } from '../types';

const Insights: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AIAnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!prompt.trim()) return;
    setIsAnalyzing(true);
    const analysis = await getArchitectureInsights(prompt);
    setResult(analysis);
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
      <div className="text-center space-y-3">
        <div className="inline-flex p-3 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 mb-2">
          <BrainCircuit size={32} />
        </div>
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight">AI Architecture Assistant</h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Leverage Google Gemini to analyze cross-layer dependencies, identify risks, and optimize your strategic roadmap.
        </p>
      </div>

      <div className="bg-white p-2 rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., 'Analyze the impact of migrating our Customer Data Master to Azure while deprecating the Legacy Oracle CRM.'"
            className="w-full h-32 p-6 text-slate-900 bg-transparent border-none focus:ring-0 resize-none text-lg placeholder:text-slate-300"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-3">
            <button 
              onClick={handleAnalyze}
              disabled={isAnalyzing || !prompt.trim()}
              className={`
                flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold transition-all shadow-lg
                ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700 hover:shadow-indigo-600/30 active:scale-95'}
              `}
            >
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>Analyze Strategy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {!result && !isAnalyzing && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Gap Analysis', desc: 'Identify missing capabilities in your current target architecture.', icon: Info },
            { title: 'Risk Assessment', desc: 'Find single points of failure across your technology stack.', icon: AlertTriangle },
            { title: 'Compliance Check', desc: 'Ensure designs align with corporate governance standards.', icon: CheckCircle2 },
          ].map((item, i) => (
            <button 
              key={i} 
              onClick={() => setPrompt(`Perform a ${item.title.toLowerCase()} for my current enterprise landscape.`)}
              className="p-6 bg-white border border-slate-200 rounded-3xl text-left hover:border-indigo-600 transition-all hover:shadow-md group"
            >
              <div className="p-2.5 rounded-xl bg-slate-50 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors w-fit mb-4">
                <item.icon size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </button>
          ))}
        </div>
      )}

      {result && (
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden animate-in slide-in-from-bottom-8">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Analysis Result</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-200 text-sm font-semibold text-slate-600">
                Risk Score: 
                <span className={`
                  ${result.riskScore > 70 ? 'text-rose-600' : result.riskScore > 40 ? 'text-amber-600' : 'text-emerald-600'}
                `}>{result.riskScore}/100</span>
              </div>
            </div>
          </div>
          <div className="p-8 space-y-8">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Executive Summary</h4>
              <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-wrap">
                {result.summary}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Strategic Recommendations</h4>
              <div className="grid grid-cols-1 gap-3">
                {result.recommendations.map((rec, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="mt-1 p-1 rounded-full bg-emerald-500 text-white">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-slate-700 font-medium leading-relaxed">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Insights;
