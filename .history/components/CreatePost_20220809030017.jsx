import React, { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import PopupModal from './PopupModal';

const CreatePost = () => {
  const {
    data: { user },
  } = useSession();

  const [showModal, setShowModal] = useState(false);

  const modal = useSelector((state) => state.postModal);

  const handlePostModal = (e) => {
    e.preventDefault();
    dispatch(togglePostModal({ postModal }));
  };

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
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handlePostModal}
        >
          Open regular modal
        </button>
        {showModal ? <PopupModal /> : null}
      </div>
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo/Video</p>
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
