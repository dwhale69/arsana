import React from 'react';
import { Ticket, ShoppingCart } from 'lucide-react';

type VoucherOptionProps = {
  amount: number;
  price: string;
};

const VoucherOption = ({ amount, price }: VoucherOptionProps) => (
  <div className="bg-[#FFFEFF] p-4 md:p-5 rounded-xl shadow-sm">
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-[#AD24D4] to-[#39006C] rounded-full">
          <Ticket className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">{amount} Voucher</h3>
          <p className="text-lg md:text-xl font-bold text-gray-800">{price}</p>
        </div>
      </div>
      <button className="flex items-center gap-1.5 bg-[#7110A3] text-white px-3 py-1.5 rounded-lg hover:bg-[#39006C] transition-colors text-sm">
        <ShoppingCart className="w-4 h-4" />
        <span>Buy</span>
      </button>
    </div>
  </div>
);

const VoucherList = () => {
  const voucherOptions: VoucherOptionProps[] = [
    { amount: 50, price: '50,000 IDR' },
    { amount: 100, price: '100,000 IDR' },
    { amount: 200, price: '200,000 IDR' },
    { amount: 500, price: '500,000 IDR' },
    { amount: 1000, price: '1,000,000 IDR' },
    { amount: 2000, price: '2,000,000 IDR' },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Buy Vouchers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {voucherOptions.map((option) => (
          <VoucherOption 
            key={option.amount} 
            amount={option.amount} 
            price={option.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default VoucherList;