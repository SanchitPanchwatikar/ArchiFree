
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Repository from './components/Repository';
import Visualizer from './components/Visualizer';
import Insights from './components/Insights';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'repository':
        return <Repository />;
      case 'visualizer':
        return <Visualizer />;
      case 'insights':
        return <Insights />;
      case 'automations':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 p-12">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Governance Automations</h2>
            <p className="text-slate-500 max-w-sm">Setup rules to automatically deprecate expired technology nodes or sync artifacts with AWS/Azure CMDBs.</p>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">Configure Flows</button>
          </div>
        );
      case 'settings':
        return (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Project Settings</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Enterprise Framework</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 text-slate-900">
                  <option>TOGAF Standard</option>
                  <option>BIZBOK Guide</option>
                  <option>ArchiMate 3.1</option>
                  <option>Custom Framework</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Collaboration Mode</label>
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div>
                    <p className="font-bold text-slate-900">Public Open Source Mode</p>
                    <p className="text-xs text-slate-500">Allow community contributions to your artifact library.</p>
                  </div>
                  <div className="w-12 h-6 bg-emerald-500 rounded-full relative p-1 cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
