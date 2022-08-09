import React from 'react';
import Image from 'next/image';
import { ImUsers } from 'react-icons/im';

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer max-w-xl lg:min-w-[302px]">
        <Image
          src="/facebook-logo.svg"
          height={40}
          width={40}
          className="rounded-full  cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium ">Malik Kamal</p>
      </div>
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <ImUsers className="h-8 w-8 text-blue-500 " />
        <p className="hidden sm:inline-flex font-medium">users</p>
      </div>
    </div>
  );
};

export default Sidebar;
