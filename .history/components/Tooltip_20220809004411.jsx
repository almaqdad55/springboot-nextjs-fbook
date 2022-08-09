import React from 'react';

const Tooltip = ({ message, children }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}

      <div className="absolute top-7 flex flex-col items-center hidden mb-6 group-hover:flex">
        <div className="w-3 h-3 mt-1 rotate-45 bg-gray-600"></div>

        <span className="relative -mt-2 z-10 p-2  text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
          {message}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
