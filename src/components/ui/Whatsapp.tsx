import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const whatsapp = () => {
  return (
    <>
     <div className='fixed bottom-[146px] right-[27px] z-50'>
       <Link href={"/"}>
             <Image
             src={"/images/whatsapp_dropshadow.png"}
             width={55}
             height={55}
             alt="whatsapp"
             />
       </Link>
        </div> 
    </>
  )
}

export default whatsapp
