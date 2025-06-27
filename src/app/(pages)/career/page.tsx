import React from 'react'
import Banner from '@/components/career/Banner'
import JobCard from '@/components/career/JobCard'
import JoinTeam from '@/components/JoinTeamForm'
const page = () => {
  return (
    <>
     <div className='relative'>
        <Banner/>
        <JobCard/>
        <JoinTeam/>
    </div>
    </>
  )
}

export default page
