import React, { useState } from 'react';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import MultiBalanceSection from '../components/MultiBalanceSection';
import VendorsSection from '../components/VendorsSection';
import PaymentBillsSection from '../components/PaymentBillsSection';
import { ScanLine } from 'lucide-react';
import QRScannerModal from '../components/QRScannerModal';

const Home = () => {
  const [isQRScannerOpen, setIsQRScannerOpen] = useState(false);

  const handleScan = (result: string) => {
    console.log('QR Code scanned:', result);
    setIsQRScannerOpen(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <header className="flex justify-between items-center mb-6">
        <Logo />
        <button 
          onClick={() => setIsQRScannerOpen(true)}
          className="p-2 bg-gradient-to-r from-[#AD24D4] to-[#39006C] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
        >
          <div className="flex flex-col items-center gap-1">
            <ScanLine className="w-5 h-5 text-white" />
            <span className="text-[10px] text-white font-medium">QRIS Payment</span>
          </div>
        </button>
      </header>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="mb-8">
        <MultiBalanceSection />
      </div>

      <div className="mb-8">
        <PaymentBillsSection />
      </div>

      <div className="mb-8">
        <VendorsSection />
      </div>

      <QRScannerModal
        isOpen={isQRScannerOpen}
        onClose={() => setIsQRScannerOpen(false)}
        onScan={handleScan}
      />
    </div>
  );
};

export default Home;