import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { togglePostModal } from '../public/src/features/postModalSlice';

import PopupModal from './PopupModal';

const CreatePost = () => {
  const {
    data: { user },
  } = useSession();

  const dispatch = useDispatch();

  const postModal = useSelector((state) => state.postModal);

  const inputRef = useRef(null);
  
  const hiddenFileInput = useRef(null);

  const handleCLick = () => {
    hiddenFileInput.current.click();
  };

  const [imageToPost, setImageToPost] = useState(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const handleSubmit=(e)=>{
e.preventDefault();
if(!inpu)
  }
  const handlePostModal = (e) => {
    e.preventDefault();
    dispatch(togglePostModal(postModal.modalState));
    console.log(postModal.modalState);
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
            className="rounded-full h-12 focus:outline-none flex-grow bg-gray-100 px-4 font-medium cursor-pointer
            hover:bg-gray-200"
            type="text"
            placeholder={`What's on your maind ${user?.name.split(' ')[0]}`}
            // onClick={handlePostModal}
          />
          <button hidden onClick={handleSubmit}></button>
        </form>
        {/* <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handlePostModal}
        >
          Open regular modal
        </button> */}
        {postModal.modalState ? <PopupModal /> : null}
      </div>
      {imageToPost && (
        <div
          className="flex items-center px-4 py-2 space-x-2 filter hover:brightness-210 transition duration-150"
          onClick={removeImage}
        >
          <Image
            src={imageToPost}
            width={120}
            height={120}
            objectFit="contain"
          />
          <RiDeleteBin6Line className="h-8 hover:text-red-500 cursor-pointer" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"
          onClick={handleCLick}
        >
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo/Video</p>
          <input
            type="file"
            hidden
            accept="image/*"
            ref={hiddenFileInput}
            onChange={addImageToPost}
          />
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
