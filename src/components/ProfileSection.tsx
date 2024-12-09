import React from 'react';

const ProfileSection = () => {
  return (
    <div className="bg-[#FFFEFF] p-6 rounded-xl shadow-sm mb-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2340" 
            alt="Eugene Vivdich"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">Eugene Vivdich</h2>
          <p className="text-gray-500">eugene.vivdich@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;