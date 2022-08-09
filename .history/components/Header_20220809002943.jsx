import React from 'react';
import Image from 'next/image';
import { HiOutlineSearch, HiOutlineHome } from 'react-icons/hi';
import { RiFlag2Line } from 'react-icons/ri';
import {
  MdOutlineOndemandVideo,
  MdOutlineExpandMore,
  MdOutlineLogout,
} from 'react-icons/md';
import { AiOutlineShop, AiFillMessage, AiFillBell } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CgMenuGridO } from 'react-icons/cg';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const Header = () => {
  const {
    data: { user },
  } = useSession();
  console.log(user);
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* Left component  */}
      <div className="flex min-w-fit">
        <Image
          src="/facebook-logo.svg"
          height={40}
          width={40}
          onClick={signOut}
        />
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
      <div className="flex flex-grow justify-center mx-2 ">
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
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoGameControllerOutline size={25} className="mx-auto" />
          </div>
        </div>
      </div>
      {/* Right component */}
      <div className="flex items-center justify-end min-w-fit space-x-2 ">
        <Image
          src={user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer hover:drop-shadow-md"
        />
        <p className="hidden lg:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {user?.name.split(' ')[0]}
        </p>
        <CgMenuGridO
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillMessage
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdOutlineLogout
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
          data-tooltip-target="tooltip-default"
        />
        <button
          data-tooltip-target="tooltip-default"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Default tooltip
        </button>

        <div
          id="tooltip-default"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
        >
          Tooltip content
          <div className="tooltip-arrow" data-popper-arrow>
            mm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
