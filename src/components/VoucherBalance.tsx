import React, { useState } from 'react';
import { Ticket, Copy } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import QRModal from './QRModal';

const VoucherBalance = () => {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const walletAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
  const shortenedAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-[#AD24D4] to-[#39006C] rounded-full">
            <Ticket className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Available Balance</p>
            <p className="text-lg md:text-xl font-bold">1,000</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500 font-mono">{shortenedAddress}</p>
          <button 
            onClick={copyToClipboard}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Copy className="w-3 h-3 text-gray-400" />
          </button>
        </div>
      </div>
      
      <button 
        onClick={() => setIsQRModalOpen(true)}
        className="bg-white p-2 rounded-lg hover:shadow-md transition-shadow"
      >
        <QRCodeSVG 
          value={walletAddress}
          size={64}
          level="L"
          includeMargin={false}
        />
      </button>

      <QRModal 
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        walletAddress={walletAddress}
      />
    </div>
  );
};

export default VoucherBalance;