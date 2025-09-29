
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://picsum.photos/id/10/50/50" alt="University Logo" className="h-12 w-12 rounded-full object-cover" />
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
