import React from 'react';
import Image from 'next/image';

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center ">
          <Image
            className="rounded-full "
            src="/facebook-logo.svg"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
