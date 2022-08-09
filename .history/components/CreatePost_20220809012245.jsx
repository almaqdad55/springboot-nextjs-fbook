import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoPhotos } from 'react-icons/io5';
import { BsEmojiSmile } from 'react-icons/bs';

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
            className="rounded-full h-12 focus:outline-none flex-grow bg-gray-100 px-4 font-medium"
            type="text"
            placeholder={`What's on your maind ${user?.name.split(' ')[0]}`}
          />
          <button hidden></button>
        </form>
      </div>
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center">
          <HiOutlineVideoCamera size={20} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
