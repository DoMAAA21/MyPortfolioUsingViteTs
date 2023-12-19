import React, { FC } from 'react';

interface NavbarProps {
  // Add any props if needed
}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Your App Name</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
