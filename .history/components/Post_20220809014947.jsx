import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { FiThumbsUp } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

const Post = () => {
  const [date, setDate] = useState();
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full "
            src="/facebook-logo.svg"
            width={40}
            height={40}
          />
          <div>
            <p className="font-medium ">Malik Kamal</p>
            <p className="text-xs text-gray-500">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <p className="py-4 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et amet
          deleniti eum dolorum voluptatibus quis quas architecto facilis
          eligendi?
        </p>
      </div>
      {/* If any image */}
      <div className="relative h-60 md:h-96 bg-white">
        <Image
          src="https://images.pexels.com/photos/12641777/pexels-photo-12641777.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* footer post */}
      <div className="flex items-center">
        <div className="flex items-center">
          <FiThumbsUp className="h-4" />
        </div>
      </div>
    </div>
  );
};

export default Post;
