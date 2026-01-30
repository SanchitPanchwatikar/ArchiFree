
import React, { useState } from 'react';
import { 
  Filter, 
  Download, 
  MoreVertical, 
  Tag,
  ShieldCheck,
  Globe,
  HardDrive,
  Users
} from 'lucide-react';
import { EAArtifact } from '../types';

const mockData: EAArtifact[] = [
  { id: '1', name: 'Global CRM System', type: 'Application', layer: 'Application', description: 'Centralized customer management for all regions.', owner: 'Alex Rivera', status: 'Active', lastUpdated: '2d ago', tags: ['High-Criticality', 'Sales'] },
  { id: '2', name: 'Customer Data Master', type: 'Data Object', layer: 'Data', description: 'Single source of truth for customer identity.', owner: 'Maria Garcia', status: 'Active', lastUpdated: '5h ago', tags: ['PII', 'GDPR'] },
  { id: '3', name: 'AWS Production VPC', type: 'Network Node', layer: 'Technology', description: 'Primary production hosting environment.', owner: 'David Chen', status: 'Active', lastUpdated: '1w ago', tags: ['AWS', 'Infrastucture'] },
  { id: '4', name: 'Identity Management 2.0', type: 'Capability', layer: 'Business', description: 'Next-gen auth and identity strategy.', owner: 'Sarah Wilson', status: 'Proposed', lastUpdated: '12m ago', tags: ['Strategy', 'Roadmap'] },
  { id: '5', name: 'Legacy HR Portal', type: 'Application', layer: 'Application', description: 'Old portal being replaced by Workday.', owner: 'John Smith', status: 'Sunset', lastUpdated: '1m ago', tags: ['To-Be-Retired'] },
];

const Repository: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredData = filter === 'All' ? mockData : mockData.filter(a => a.layer === filter);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Enterprise Repository</h2>
          <p className="text-slate-500 mt-1">Manage and govern your architecture assets across all layers.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Layer Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['All', 'Strategy', 'Business', 'Application', 'Data', 'Technology'].map(layer => (
          <button
            key={layer}
            onClick={() => setFilter(layer)}
            className={`
              px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap
              ${filter === layer ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'}
            `}
          >
            {layer}
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Artifact Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Type / Layer</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Owner</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((artifact) => (
                <tr key={artifact.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-white transition-colors`}>
                        {artifact.layer === 'Application' && <HardDrive size={18} />}
                        {artifact.layer === 'Data' && <ShieldCheck size={18} />}
                        {artifact.layer === 'Technology' && <Globe size={18} />}
                        {artifact.layer === 'Business' && <Users size={18} />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{artifact.name}</p>
                        <p className="text-xs text-slate-500 truncate max-w-[200px]">{artifact.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-700">{artifact.type}</p>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        {artifact.layer}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 border border-slate-300" />
                      <span className="text-sm font-medium text-slate-700">{artifact.owner}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`
                      inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold
                      ${artifact.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 
                        artifact.status === 'Proposed' ? 'bg-indigo-50 text-indigo-700' : 
                        'bg-slate-100 text-slate-600'}
                    `}>
                      {artifact.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-500 font-medium">
                    {artifact.lastUpdated}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredData.length === 0 && (
          <div className="p-12 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
              <Filter size={24} />
            </div>
            <h3 className="font-bold text-slate-900">No artifacts found</h3>
            <p className="text-slate-500 mt-1">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Repository;
