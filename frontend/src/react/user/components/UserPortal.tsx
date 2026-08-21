import React, { useState } from 'react';

export const UserPortal: React.FC = () => {
  const [orders] = useState([
    { id: 'ORD-9821', date: '2026-08-10', total: '$129.00', status: 'Delivered' },
    { id: 'ORD-9844', date: '2026-08-12', total: '$79.50', status: 'In Transit' },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100 mt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-light text-gray-900 font-serif-luxury tracking-wider uppercase">Customer Account</h2>
          <p className="text-sm text-gray-500 font-sans-clean font-light tracking-wide mt-1">View your orders, wishlist, and profile</p>
        </div>
      </div>

      <h3 className="text-md font-medium text-gray-800 mb-3 font-sans-clean tracking-widest uppercase">Recent Orders</h3>
      <div className="divide-y divide-gray-100">
        {orders.map((ord) => (
          <div key={ord.id} className="py-3 flex justify-between items-center text-sm">
            <div>
              <span className="font-medium text-gray-900">{ord.id}</span>
              <span className="text-gray-400 ml-2">({ord.date})</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-900">{ord.total}</span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 font-medium">
                {ord.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
