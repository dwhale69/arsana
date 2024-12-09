import React from 'react';
import { ShoppingCart, Heart, Gift, Star } from 'lucide-react';

const QuickAction = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="p-3 bg-white rounded-full shadow-md">
      <Icon className="w-6 h-6 text-[#FF8E35]" />
    </div>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

const QuickActions = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full max-w-md mx-auto">
      <QuickAction icon={ShoppingCart} label="Cart" />
      <QuickAction icon={Heart} label="Favorites" />
      <QuickAction icon={Gift} label="Rewards" />
      <QuickAction icon={Star} label="Points" />
    </div>
  );
};

export default QuickActions;