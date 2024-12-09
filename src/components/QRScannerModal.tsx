import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type QRScannerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onScan?: (result: string) => void;
};

const QRScannerModal = ({ isOpen, onClose, onScan }: QRScannerModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' }
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (err) {
          console.error('Error accessing camera:', err);
        }
      };

      startCamera();

      return () => {
        const stream = videoRef.current?.srcObject as MediaStream;
        stream?.getTracks().forEach(track => track.stop());
      };
    }
  }, [isOpen]);

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
        
        <h3 className="text-lg font-semibold mb-4">Scan QRIS Code</h3>
        <div className="relative aspect-square w-full bg-black rounded-lg overflow-hidden mb-4">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-2 border-white/50 rounded-lg" />
        </div>
        <p className="text-sm text-center text-gray-600">
          Position the QRIS code within the frame to scan
        </p>
      </div>
    </div>
  );
};

export default QRScannerModal;