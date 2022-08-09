import React from 'react';

const Contact = ({ name, src }) => {
  return (
    <div className=" flex hover:bg-gray-200 rounded-lg p-2 cursor-pointer tranition duration-200 space-x-3">
      <Image src={src} width={40} height={40} className="rounded-full" />
      <div className="flex items-center ml-2">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Contact;
