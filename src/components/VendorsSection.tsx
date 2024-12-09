import React from 'react';
import { Building2 } from 'lucide-react';

const VendorLogo = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="w-24 h-24 bg-[#FFFEFF] rounded-xl p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-gradient-to-r from-[#AD24D4] via-[#7110A3] to-[#39006C] rounded-lg flex items-center justify-center">
        <Building2 className="w-8 h-8 text-white" />
      </div>
    </div>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

const VendorsSection = () => {
  const vendors = ['Padigital', 'Digireit', 'KSI'];

  return (
    <div className="bg-[#EDEBEC] rounded-xl p-4">
      <h2 className="text-base font-semibold mb-4">Vendors</h2>
      <div className="flex gap-6 justify-center">
        {vendors.map((vendor) => (
          <VendorLogo key={vendor} name={vendor} />
        ))}
      </div>
    </div>
  );
};

export default VendorsSection;