'use client';
import React from 'react'
import Banner from '@/components/career/Banner'
import JobCard from '@/components/career/JobCard'
import JoinTeam from '@/components/JoinTeamForm'
import Common_banner from '@/components/ui/Common_banner'
const page = () => {
  return (
    <>
      <div className='relative'>
        <Banner/>
        <JobCard/>
        <div className='container px-4 mx-auto relative'>
        <JoinTeam/>
        </div>
        <Common_banner/>
      </div>
    </>
  )
}

export default page
