import React from 'react';
import Image from 'next/image';

const Post = () => {
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
      </div>
    </div>
  );
};

export default Post;
