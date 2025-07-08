import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const whatsapp = () => {
  return (
    <>
     <div className='fixed bottom-[146px] right-[27px] z-50'>
       <Link href={"https://api.whatsapp.com/send/?phone=919830566248&text=Hey...+I+would+like+to+have+a+quick+chat+with+you.&type=phone_number&app_absent=0"}>
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
