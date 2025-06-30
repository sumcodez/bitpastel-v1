import React from 'react'
import TeamTestimonials from '@/components/team/TeamTestimonials'
import TeamCollage from '@/components/team/TeamCollage'
import TeamBanner from '@/components/team/TeamBanner'
import TeamEngage from '@/components/team/TeamEngage'
import NewTeamtestimonial from '@/components/team/NewTeamtestimonial'
import NewTeamCollage from '@/components/team/NewTeamCollage'
const page = () => {
  return (
    <>
    <div className='relative'>
      <TeamBanner/>
      <NewTeamtestimonial/>
      <NewTeamCollage/>
     {/* <TeamTestimonials/> */}
     {/* <TeamCollage/> */}
     <TeamEngage/>
    </div>
    </>
  )
}

export default page
