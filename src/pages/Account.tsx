import React from 'react';
import { Settings, CreditCard, Bell, LogOut, ChevronRight } from 'lucide-react';
import ProfileSection from '../components/ProfileSection';

const MenuItem = ({ icon: Icon, label, onClick }: { icon: any; label: string; onClick?: () => void }) => (
  <button 
    className="w-full flex items-center justify-between p-4 bg-[#FFFEFF] rounded-xl hover:shadow-md transition-shadow"
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <Icon className="w-6 h-6 text-[#7110A3]" />
      <span className="font-medium">{label}</span>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-400" />
  </button>
);

const Account = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Account</h1>
      
      <ProfileSection />

      <div className="space-y-3">
        <MenuItem icon={Settings} label="Settings" />
        <MenuItem icon={CreditCard} label="Payment Methods" />
        <MenuItem icon={Bell} label="Notifications" />
        <MenuItem icon={LogOut} label="Log Out" />
      </div>
    </div>
  );
};

export default Account;