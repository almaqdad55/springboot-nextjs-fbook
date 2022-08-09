import React from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col py-2 ">
      <div className="flex items-center text-gray-500">
        <p className="text-lg flex flex-grow font-semibold">Contacts</p>
        <div className="flex space-x-1 px-2"></div>
      </div>
    </div>
  );
};

export default RightSidebar;
