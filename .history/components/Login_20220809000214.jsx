import React from 'react';
import Image from 'next/image';

const Login = () => {
  return (
    <div>
      <Image src="/facebook-logo.svg" height={240} width={240} />
      <a
        href=""
        className="px-20 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white"
      >
        Login
      </a>
    </div>
  );
};

export default Login;
