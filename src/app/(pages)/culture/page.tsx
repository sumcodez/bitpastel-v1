import React from 'react'
import TeamTestimonials from '@/components/team/TeamTestimonials'
import TeamCollage from '@/components/team/TeamCollage'
import TeamBanner from '@/components/team/TeamBanner'
import TeamEngage from '@/components/team/TeamEngage'
import NewTeamtestimonial from '@/components/team/NewTeamtestimonial'
import NewTeamCollage from '@/components/team/NewTeamCollage'
import Common_banner from '@/components/ui/Common_banner'
import TeamCollageNew from '@/components/team/TeamCollageNew'
import TeamTestimonialNew from '@/components/team/TeamTestimonialNew'

const page = () => {
  return (
    <>
    <div className='relative'>
      <TeamBanner/>
      <TeamTestimonialNew/>
      {/* <NewTeamtestimonial/> */}
      {/* <NewTeamCollage/> */}
      <TeamCollageNew/>

     {/* <TeamTestimonials/> */}
     {/* <TeamCollage/> */}
     <TeamEngage/>
     {/* <Common_banner/> */}
    </div>
    </>
  )
}

export default page
