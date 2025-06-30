import React from 'react'
import TeamTestimonials from '@/components/team/TeamTestimonials'
import TeamCollage from '@/components/team/TeamCollage'
import TeamBanner from '@/components/team/TeamBanner'
import TeamEngage from '@/components/team/TeamEngage'
const page = () => {
  return (
    <>
    <div className='relative'>
      <TeamBanner/>
     {/* <TeamTestimonials/> */}
     {/* <TeamCollage/> */}
     <TeamEngage/>
    </div>
    </>
  )
}

export default page
