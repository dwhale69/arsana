import React from 'react';
import { Ticket, CreditCard, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ActionButton = ({ icon: Icon, label, onClick }: { icon: React.ElementType; label: string; onClick?: () => void }) => (
  <button 
    className="flex-1 flex flex-col items-center gap-2 py-3 px-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
    onClick={onClick}
  >
    <Icon className="w-6 h-6 text-[#7110A3]" />
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </button>
);

const BalanceSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFFEFF] rounded-xl p-6 shadow-sm">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500 mb-2">Your Balance</p>
        <h2 className="text-3xl font-bold text-gray-800">1,000,000 IDR</h2>
      </div>
      
      <div className="flex gap-3 justify-center">
        <ActionButton 
          icon={Ticket} 
          label="Voucher" 
          onClick={() => navigate('/vouchers')}
        />
        <ActionButton icon={CreditCard} label="AIDR" />
        <ActionButton icon={Gift} label="Redeem" />
      </div>
    </div>
  );
};

export default BalanceSection;