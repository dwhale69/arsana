import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 md:w-10 md:h-10"
      >
        <path
          d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#AD24D4" />
            <stop offset="50%" stopColor="#7110A3" />
            <stop offset="100%" stopColor="#39006C" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-2xl font-bold bg-gradient-to-r from-[#AD24D4] via-[#7110A3] to-[#39006C] text-transparent bg-clip-text">
        Arsana
      </span>
    </div>
  );
};

export default Logo;