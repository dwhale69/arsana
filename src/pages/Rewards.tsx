import React from 'react';
import { Trophy, Gift, Star } from 'lucide-react';

const RewardCard = ({ title, points, description }: { title: string; points: number; description: string }) => (
  <div className="bg-[#FFFEFF] p-6 rounded-xl shadow-sm">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-gradient-to-r from-[#AD24D4] to-[#39006C] rounded-full">
        <Trophy className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{points} points needed</p>
      </div>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Rewards = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Rewards</h1>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#FFFEFF] p-4 rounded-xl text-center">
          <Star className="w-6 h-6 text-[#AD24D4] mx-auto mb-2" />
          <p className="text-sm text-gray-500">Available Points</p>
          <p className="font-bold text-xl">2,500</p>
        </div>
        <div className="bg-[#FFFEFF] p-4 rounded-xl text-center">
          <Gift className="w-6 h-6 text-[#7110A3] mx-auto mb-2" />
          <p className="text-sm text-gray-500">Redeemed</p>
          <p className="font-bold text-xl">12</p>
        </div>
        <div className="bg-[#FFFEFF] p-4 rounded-xl text-center">
          <Trophy className="w-6 h-6 text-[#39006C] mx-auto mb-2" />
          <p className="text-sm text-gray-500">Level</p>
          <p className="font-bold text-xl">Silver</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Available Rewards</h2>
      <div className="space-y-4">
        <RewardCard
          title="Free Delivery Voucher"
          points={1000}
          description="Get free delivery on your next order"
        />
        <RewardCard
          title="15% Discount"
          points={2500}
          description="Save 15% on any purchase above $50"
        />
        <RewardCard
          title="Premium Membership"
          points={5000}
          description="Unlock exclusive benefits and special offers"
        />
      </div>
    </div>
  );
};

export default Rewards;