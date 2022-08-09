import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src="/facebook-logo.svg"
          height={40}
          width={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
