import React from 'react';
import { Plus } from 'lucide-react';
import VoucherBalance from '../components/VoucherBalance';
import VoucherList from '../components/VoucherList';

const Vouchers = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-lg md:text-xl font-bold mb-4 text-gray-800">
        <span className="text-sm md:text-base text-gray-600">Arsana Voucher</span>
        <span className="text-xs md:text-sm text-gray-500 ml-2">(ERC-1155)</span>
      </h1>
      
      <div className="bg-[#FFFEFF] rounded-xl p-4 md:p-5 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <VoucherBalance />
          <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#7110A3] text-white px-4 py-2 rounded-lg hover:bg-[#39006C] transition-colors text-sm font-medium">
            <Plus className="w-4 h-4" />
            <span>Top Up</span>
          </button>
        </div>
      </div>

      <VoucherList />
    </div>
  );
};

export default Vouchers;