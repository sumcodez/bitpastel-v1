'use client';
import React from 'react'
import Image from 'next/image'
const PartnerHero = () => {
const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      }, 100);
    }
  };
  return (
    <section className='relative md:py-[100px] pb-[30px] pt-[65px]'>
      <div className="container px-4 mx-auto">
          <div className="partner-hero-wrapper grid md:grid-cols-2 grid-cols-1 items-center md:text-left text-center md:p-[0] p-[15px]">
            <div className='partner-hero-title md:p-[0] py-[25px]'>
               <h1 className='font-source font-[700] pb-[25px] title text-title'>Bitpastel Partner Program</h1>
               <button className='partner-btn bg-green-btn font-source' onClick={() => scrollToSection('become-a-partner') }> Refer & Earn</button>
            </div>
            <div className=' md:pl-[30px] md:order-last order-first' >
            <img src="/images/partner_ban_new.jpg" alt="partner image" className='rounded-[10px]'/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default PartnerHero
