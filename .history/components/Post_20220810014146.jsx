import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { FiThumbsUp } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

const Post = ({ post }) => {
  console.log('post', post);
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, []);
  return (
    <div className="flex flex-col" key={post.id}>
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full "
            src={post.profilePic}
            width={40}
            height={40}
          />
          <div>
            <p className="font-medium ">{post.name}</p>
            <p className="text-xs text-gray-500">{post.timeStamp}</p>
          </div>
        </div>
        <p className="py-4 px-2">{post.post}</p>
      </div>
      {/* If any image */}
      {post.image && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image src={post.image} layout="fill" objectFit="cover" />
        </div>
      )}

      {/* footer post */}
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp className="h-4" />
          <p className="text-sm sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt className="h-4" />
          <p className="text-sm sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine className="h-4" />
          <p className="text-sm sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
