import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const CreatePost = () => {
  const {
    data: { user },
  } = useSession();
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-4 items-center">
        <Image
          src={user?.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer hover:drop-shadow-md"
        />
        <form action="" className="flex flex-1">
          <input
            className="rounded-full h-12 focus:outline-none flex-grow bg-gray-100 px-2"
            type="text"
            placeholder={`What's on your maind ${user?.name.split(' ')[0]}`}
          />
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
