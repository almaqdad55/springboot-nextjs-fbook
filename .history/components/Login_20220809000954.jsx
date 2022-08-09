import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-20">
      <Image src="/facebook-logo-long.svg" height={240} width={240} />
      <a
        href=""
        className="px-20 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white py-10"
        onClick={signIn}
      >
        Login
      </a>
    </div>
  );
};

export default Login;
