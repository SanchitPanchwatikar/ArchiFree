
import React from 'react';
import { 
  TrendingUp, 
  Box, 
  Layers, 
  Activity,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Strategy', value: 12 },
  { name: 'Business', value: 45 },
  { name: 'Data', value: 28 },
  { name: 'Application', value: 89 },
  { name: 'Technology', value: 156 },
];

const COLORS = ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e'];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Enterprise Overview</h2>
          <p className="text-slate-500 mt-1">Live snapshots of your enterprise architecture landscape.</p>
        </div>
        <div className="text-sm font-medium text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
          Last updated: Today, 10:45 AM
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Artifacts', value: '330', icon: Box, color: 'indigo', change: '+12%' },
          { label: 'Strategic Alignment', value: '84%', icon: TrendingUp, color: 'emerald', change: '+5%' },
          { label: 'Active Projects', value: '24', icon: Activity, color: 'orange', change: '-2%' },
          { label: 'Architecture Layers', value: '5', icon: Layers, color: 'blue', change: '0%' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className={`p-2 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : stat.change === '0%' ? 'bg-slate-50 text-slate-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Inventory Distribution */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900">Artifact Inventory by Layer</h3>
            <button className="text-indigo-600 text-sm font-semibold hover:underline">View Repository</button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6">Governance Health</h3>
          <div className="h-[200px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-slate-900">92%</span>
              <span className="text-xs text-slate-500 font-medium">Compliance</span>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {data.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-semibold text-slate-900">{item.value} units</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Changes */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Recent Architecture Updates</h3>
          <button className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
            See all activity <ChevronRight size={16} />
          </button>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { user: 'Sarah Miller', action: 'updated the', artifact: 'Cloud Customer Portal', layer: 'Application', time: '12m ago' },
            { user: 'James Wilson', action: 'created new', artifact: 'Data Sovereignty Policy', layer: 'Strategy', time: '2h ago' },
            { user: 'Emily Chen', action: 'deprecated', artifact: 'Legacy Oracle CRM', layer: 'Technology', time: '5h ago' },
          ].map((activity, i) => (
            <div key={i} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                  {activity.user.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-slate-900">
                    <span className="font-semibold">{activity.user}</span> {activity.action} <span className="font-semibold">{activity.artifact}</span>
                  </p>
                  <span className="text-xs text-slate-400 font-medium">{activity.layer} Layer • {activity.time}</span>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <ArrowUpRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
