import React from 'react';
import { X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

type QRModalProps = {
  isOpen: boolean;
  onClose: () => void;
  walletAddress: string;
};

const QRModal = ({ isOpen, onClose, walletAddress }: QRModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        
        <h3 className="text-lg font-semibold mb-4">Wallet QR Code</h3>
        <div className="flex justify-center mb-4">
          <QRCodeSVG 
            value={walletAddress}
            size={200}
            level="L"
            includeMargin={true}
          />
        </div>
        <p className="text-sm text-center text-gray-600 font-mono break-all">
          {walletAddress}
        </p>
      </div>
    </div>
  );
};

export default QRModal;