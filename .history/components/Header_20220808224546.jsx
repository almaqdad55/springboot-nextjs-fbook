import React from 'react';
import Image from 'next/image';
import { HiOutlineSearch } from 'react-icons/hi';

const Header = () => {
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* Left component  */}
      <div className="flex min-w-fit">
        <Image src="/facebook-logo.svg" height={40} width={40} />
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <HiOutlineSearch size={20} />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      {/* Center  component  */}
      {/* Right component */}
    </div>
  );
};

export default Header;
