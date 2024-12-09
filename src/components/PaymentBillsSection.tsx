import React from 'react';
import { Zap, Phone, CreditCard } from 'lucide-react';

const PaymentButton = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <button className="flex-1 flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
    <div className="p-3 bg-gradient-to-r from-[#AD24D4]/10 to-[#39006C]/10 rounded-full">
      <Icon className="w-6 h-6 text-[#7110A3]" />
    </div>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </button>
);

const PaymentBillsSection = () => {
  return (
    <div className="bg-[#EDEBEC] rounded-xl p-4">
      <h2 className="text-base font-semibold mb-4">Payment & Bills</h2>
      <div className="flex gap-4">
        <PaymentButton icon={Zap} label="PLN" />
        <PaymentButton icon={Phone} label="Pulsa" />
        <PaymentButton icon={CreditCard} label="Credit Card" />
      </div>
    </div>
  );
};

export default PaymentBillsSection;