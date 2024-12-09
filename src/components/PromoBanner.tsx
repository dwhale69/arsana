import React from 'react';

const PromoBanner = () => {
  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2340"
        alt="Promo Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#75FD04]/20 to-[#F5B40E]/20" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold">Special Offer</h3>
        <p className="text-sm">Get 20% off on your first purchase</p>
      </div>
    </div>
  );
};

export default PromoBanner;