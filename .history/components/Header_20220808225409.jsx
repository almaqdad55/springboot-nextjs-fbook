import React from 'react';
import Image from 'next/image';
import { HiOutlineSearch, HiOutlineHome } from 'react-icons/hi';
import { RiFlag2Line } from 'react-icons/ri';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* Left component  */}
      <div className="flex min-w-fit">
        <Image src="/facebook-logo.svg" height={40} width={40} />
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <HiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent outline-none"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center  component  */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiOutlineHome size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <RiFlag2Line size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <MdOutlineOndemandVideo size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <AiOutlineShop size={25} className="mx-auto" />
          </div>
        </div>
      </div>
      {/* Right component */}
    </div>
  );
};

export default Header;
