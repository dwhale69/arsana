import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Trophy, Ticket, ClipboardList, User } from 'lucide-react';

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  path: string;
  isActive: boolean;
  onClick: () => void;
};

const NavItem = ({ icon: Icon, label, isActive, onClick }: NavItemProps) => (
  <button 
    className="flex flex-col items-center gap-1"
    onClick={onClick}
  >
    <Icon 
      className={`w-6 h-6 ${
        isActive 
          ? 'text-[#AD24D4]' 
          : 'text-gray-500'
      }`} 
    />
    <span className={`text-xs ${
      isActive 
        ? 'text-[#AD24D4] font-medium' 
        : 'text-gray-500'
    }`}>
      {label}
    </span>
  </button>
);

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Trophy, label: 'Rewards', path: '/rewards' },
    { icon: Ticket, label: 'My Voucher', path: '/vouchers' },
    { icon: ClipboardList, label: 'Order', path: '/orders' },
    { icon: User, label: 'Account', path: '/account' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            {...item}
            isActive={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;