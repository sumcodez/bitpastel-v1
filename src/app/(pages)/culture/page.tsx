import React from 'react';
import TeamTestimonials from '@/components/team/TeamTestimonials';
import TeamCollage from '@/components/team/TeamCollage';
import TeamBanner from '@/components/team/TeamBanner';
import TeamEngage from '@/components/team/TeamEngage';
import NewTeamtestimonial from '@/components/team/NewTeamtestimonial';
import NewTeamCollage from '@/components/team/NewTeamCollage';
import Common_banner from '@/components/ui/Common_banner';
import TeamCollageNew from '@/components/team/TeamCollageNew';
import TeamTestimonialNew from '@/components/team/TeamTestimonialNew';
import MobileTeamCollage from '@/components/team/MobileTeamCollage';

const page = () => {
  return (
    <>
      <div className="relative">
        <TeamBanner />
        <TeamTestimonialNew />
        {/* <NewTeamtestimonial/> */}
        {/* <NewTeamCollage/> */}
        {/* <TeamCollageNew/> */}
        {/* <MobileTeamCollage/> */}

        {/* Show only on mobile */}
        <div  id="OurTeam">
          <div className="block md:hidden">
            <MobileTeamCollage />
          </div>
          <div className="hidden md:block">
            <TeamCollageNew />
          </div>
        </div>

        {/* <TeamTestimonials/> */}
        {/* <TeamCollage/> */}
        <TeamEngage />
        {/* <Common_banner/> */}
      </div>
    </>
  );
};

export default page;
