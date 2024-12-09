import React from 'react';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const OrderCard = ({ 
  orderNumber, 
  date, 
  status, 
  items, 
  total 
}: { 
  orderNumber: string; 
  date: string; 
  status: 'pending' | 'delivered' | 'cancelled'; 
  items: number;
  total: string;
}) => {
  const statusColors = {
    pending: 'text-yellow-600 bg-yellow-100',
    delivered: 'text-green-600 bg-green-100',
    cancelled: 'text-red-600 bg-red-100'
  };

  const StatusIcon = {
    pending: Clock,
    delivered: CheckCircle,
    cancelled: XCircle
  }[status];

  return (
    <div className="bg-[#FFFEFF] p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500">Order #{orderNumber}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${statusColors[status]}`}>
          <StatusIcon className="w-4 h-4" />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <Package className="w-6 h-6 text-[#7110A3]" />
        <div>
          <p className="font-semibold">{items} items</p>
          <p className="text-lg font-bold text-[#AD24D4]">{total}</p>
        </div>
      </div>
      <button className="w-full py-2 border border-[#7110A3] text-[#7110A3] rounded-lg font-medium hover:bg-[#7110A3] hover:text-white transition-colors">
        View Details
      </button>
    </div>
  );
};

const Orders = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      
      <div className="flex gap-4 mb-6">
        <button className="flex-1 py-2 bg-[#7110A3] text-white rounded-lg font-medium">All</button>
        <button className="flex-1 py-2 bg-[#FFFEFF] text-gray-600 rounded-lg font-medium">Pending</button>
        <button className="flex-1 py-2 bg-[#FFFEFF] text-gray-600 rounded-lg font-medium">Delivered</button>
      </div>

      <div className="space-y-4">
        <OrderCard
          orderNumber="ORD123456"
          date="March 15, 2024"
          status="pending"
          items={3}
          total="$45.99"
        />
        <OrderCard
          orderNumber="ORD123455"
          date="March 12, 2024"
          status="delivered"
          items={2}
          total="$32.50"
        />
        <OrderCard
          orderNumber="ORD123454"
          date="March 10, 2024"
          status="cancelled"
          items={1}
          total="$15.99"
        />
      </div>
    </div>
  );
};

export default Orders;