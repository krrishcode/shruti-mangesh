import React, { useState } from 'react';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders'>('overview');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-2xl font-light text-white font-sans-clean tracking-wider uppercase">Store Admin Portal</h1>
            <p className="text-sm text-slate-400 font-sans-clean font-light">Manage products, inventory & orders</p>
          </div>
          <div className="flex gap-2">
{(['overview', 'products', 'orders'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all font-sans-clean tracking-widest uppercase ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </header>

        <main className="mt-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/60 border border-slate-700/50 p-6 rounded-xl">
                <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider font-sans-clean">Total Sales</span>
                <p className="text-3xl font-extrabold mt-2 font-sans-clean tracking-tight">$24,580</p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/50 p-6 rounded-xl">
                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider font-sans-clean">Total Orders</span>
                <p className="text-3xl font-extrabold mt-2 font-sans-clean tracking-tight">1,248</p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/50 p-6 rounded-xl">
                <span className="text-xs font-medium text-amber-400 uppercase tracking-wider font-sans-clean">Low Stock Items</span>
                <p className="text-3xl font-extrabold mt-2 font-sans-clean tracking-tight">4</p>
              </div>
            </div>
        </main>
      </div>
    </div>
  );
};
