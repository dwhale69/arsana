import React, { useState } from 'react';
import { Ticket, CreditCard, Wallet, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import QRScannerModal from './QRScannerModal';

type BalanceItemProps = {
  icon: React.ElementType;
  label: string;
  amount: string;
  onClick?: () => void;
  className?: string;
  isCard?: boolean;
};

const BalanceItem = ({ 
  icon: Icon, 
  label, 
  amount, 
  onClick, 
  className = '', 
  isCard = false
}: BalanceItemProps) => (
  <div 
    className={`bg-white rounded-xl transition-all duration-200 ${
      onClick ? 'cursor-pointer hover:bg-gray-50' : ''
    } ${className}`}
    onClick={onClick}
  >
    {isCard ? (
      <div className="flex items-center justify-between p-3 md:p-4">
        <div className="flex items-center gap-2">
          <div className="p-2 md:p-2.5 bg-gradient-to-r from-[#AD24D4] to-[#39006C] rounded-full shadow-lg">
            <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <div>
            <p className="text-xs md:text-sm text-gray-500 mb-0.5">{label}</p>
            <p className="text-base md:text-xl font-bold bg-gradient-to-r from-[#AD24D4] to-[#39006C] bg-clip-text text-transparent">
              {amount}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-[120px] h-[70px] md:w-[140px] md:h-[80px] bg-gradient-to-r from-[#AD24D4] to-[#39006C] rounded-xl p-3 flex flex-col justify-between relative">
            <div className="flex justify-end">
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="12" r="3" fill="#FF5F00"/>
                <circle cx="17" cy="12" r="3" fill="#EB001B" fillOpacity="0.8"/>
                <circle cx="12" cy="12" r="3" fill="#F79E1B" fillOpacity="0.9"/>
              </svg>
            </div>
            <div className="text-white text-[10px] md:text-xs font-mono tracking-wider">
              **** **** **** 4589
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex items-center gap-2 p-3 md:p-4">
        <div className="p-2 md:p-2.5 bg-gradient-to-r from-[#AD24D4] to-[#39006C] rounded-full shadow-lg">
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <div>
          <p className="text-xs md:text-sm text-gray-500 mb-0.5">{label}</p>
          <p className="text-base md:text-xl font-bold bg-gradient-to-r from-[#AD24D4] to-[#39006C] bg-clip-text text-transparent">
            {amount}
          </p>
        </div>
      </div>
    )}
  </div>
);

const ActionButton = ({ icon: Icon, label, onClick }: { icon: React.ElementType; label: string; onClick?: () => void }) => (
  <button 
    className="flex flex-col items-center gap-2 py-3 px-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex-1"
    onClick={onClick}
  >
    <div className="p-2.5 rounded-full bg-gradient-to-r from-[#AD24D4]/10 to-[#39006C]/10">
      <Icon className="w-5 h-5 text-[#7110A3]" />
    </div>
    <span className="text-xs font-medium text-gray-700">{label}</span>
  </button>
);

const MultiBalanceSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFFEFF] rounded-xl p-3 md:p-6 shadow-sm">
      <div className="grid gap-3 md:gap-4 mb-4">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <BalanceItem
            icon={Ticket}
            label="Voucher Balance"
            amount="1,000 ARSV"
            onClick={() => navigate('/vouchers')}
            className="h-full"
          />
          <BalanceItem
            icon={CreditCard}
            label="AIDR Balance"
            amount="500 AIDR"
            className="h-full"
          />
        </div>
        <BalanceItem
          icon={Wallet}
          label="Mastercard Balance"
          amount="2,500,000 IDR"
          className="bg-gradient-to-r from-[#AD24D4]/5 to-[#39006C]/5"
          isCard={true}
        />
      </div>
      
      <div className="border-t border-gray-100 pt-4">
        <div className="flex gap-3 justify-between px-2">
          <ActionButton 
            icon={Ticket} 
            label="Voucher" 
            onClick={() => navigate('/vouchers')}
          />
          <ActionButton icon={CreditCard} label="AIDR" />
          <ActionButton icon={Gift} label="Redeem" />
        </div>
      </div>
    </div>
  );
};

export default MultiBalanceSection;