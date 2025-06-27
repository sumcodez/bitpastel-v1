import React from 'react'
import TeamTestimonials from '@/components/team/TeamTestimonials'
import TeamCollage from '@/components/team/TeamCollage'
import TeamBanner from '@/components/team/TeamBanner'
const page = () => {
  return (
    <>
    <div className='relative'>
      <TeamBanner/>
     <TeamTestimonials/>
     <TeamCollage/>
    </div>
    </>
  )
}

export default page
