import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const whatsapp = () => {
  return (
    <>
      <div className="fixed whatspp-bubble lg:bottom-[50px] md:bottom-[70px] bottom-[80px] right-[26px] z-50">
        <Link
          target="_blank"
          href={
            'https://api.whatsapp.com/send/?phone=919830566248&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0'
          }
        >
          <Image src={'/images/Chat Bubble.svg'} width={45} height={45} alt="whatsapp" />
        </Link>
      </div>
    </>
  );
};

export default whatsapp;
