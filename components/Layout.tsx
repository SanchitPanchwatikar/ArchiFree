
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Database, 
  Network, 
  Cpu, 
  Settings, 
  Bell, 
  Search, 
  Menu, 
  X,
  Plus,
  Github,
  Zap
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'repository', name: 'Repository', icon: Database },
    { id: 'visualizer', name: 'Visualizer', icon: Network },
    { id: 'automations', name: 'Automations', icon: Cpu },
    { id: 'insights', name: 'AI Insights', icon: Zap },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* Sidebar - Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Network size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">ArchiFree</h1>
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`
                  flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 group
                  ${activeTab === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                `}
              >
                <item.icon size={20} className="mr-3" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-800">
            <a 
              href="#" 
              className="flex items-center gap-2 p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <Github size={18} />
              <span>Open Source Repo</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-slate-500" 
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 w-96">
              <Search size={18} className="text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search repository..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
              <Plus size={18} />
              <span className="text-sm font-semibold">New Artifact</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
              <img src="https://picsum.photos/32/32?u=admin" alt="User" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
