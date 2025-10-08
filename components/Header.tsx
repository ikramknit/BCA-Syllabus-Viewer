import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Replaced picsum.photos image with an inline SVG to prevent canvas tainting and network errors during PDF generation. */}
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18M5.468 18.37A8.962 8.962 0 0112 3c3.956 0 7.424 2.58 8.532 6.63m-17.064 0A8.962 8.962 0 0112 21c3.956 0 7.424 2.58 8.532-6.63" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-blue-800">माँ शाकुम्भरी विश्वविद्यालय, सहारनपुर</h1>
            <p className="text-sm md:text-md text-gray-600">Maa Shakumbhari University, Saharanpur</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
