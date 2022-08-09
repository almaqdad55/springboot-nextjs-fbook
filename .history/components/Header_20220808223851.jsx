import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* Left component  */}
      <div className="flex min-w-fit">
        <Image src="/facebook.ico" height={40} width={40} />
      </div>
      {/* Center  component  */}
      {/* Right component */}
    </div>
  );
};

export default Header;
