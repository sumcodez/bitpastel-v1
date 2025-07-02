import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Link } from 'lucide-react';
const TeamEngage = () => {
  return (
    <section className="py-12 lg:py-16 md:mb-[-220px] mb-[-80px] md:mt-[150px] mt-[60px]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="rounded-tr-[40px] rounded-br-[40px] overflow-hidden lg:mr-0 md:mr-4 mr-4 min-h-[15rem] md:min-h-full">
            <Image
              src="/images/person-client.png"
              alt="Team collaboration"
              width={711}
              height={406}
              className="w-full md:h-full h-[280px] md:object-contain object-cover md:object-center object-right"
            />
          </div>
          <div className="lg:ml-0 md:ml-4 ml-4 bg-primary-mint lg:p-12 md:p-12 py-10 px-6 rounded-tl-[40px] rounded-bl-[40px] content-center overflow-hidden">
            {/* <div className="lg:w-1/2 bg-primary-mint rounded-[40px] p-12"> */}
            <h2 className=" md:leading-[45px] leading-[24px] font-source md:font-[600] font-bold title md:text-[35px] title text-title md:mb-8 mb-4 ">
              Work on awesome Ideas &
              <br />
              Technologies
            </h2>
            <div className='max-w-[520px]'>
              <p className="md:leading-[36px] leading-[30px] text-[18px]">
                At Bitpastel, we create with curiosity. We continue to go forward with an inclusive
                view for creating equal opportunities for all our employees.
              </p>
              <p className="md:leading-[36px] leading-[30px] text-[18px]">
                Visit our <button className="inline-block">Careers</button> page to find out about
                open positions.
              </p>
              <button className="btn font-inter mt-6 h-auto font-[400] bg-green-btn">
                Find Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamEngage;
