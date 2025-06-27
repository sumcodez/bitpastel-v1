import React from 'react'
import Banner from '@/components/team/Banner'
import TeamTestimonials from '@/components/team/TeamTestimonials'
import TeamCollage from '@/components/team/TeamCollage'
import TeamBanner from '@/components/team/TeamBanner'
const page = () => {
  return (
    <>
    <div className='relative'>
      <TeamBanner/>
     {/* <Banner/> */}
     <TeamTestimonials/>
     <TeamCollage/>
    </div>
    </>
  )
}

export default page
