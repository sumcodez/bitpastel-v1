import React from 'react'
import PartnerHero from '@/components/partner/PartnerHero'
import PartnerService from '@/components/partner/PartnerService'
import PartnerRefer from '@/components/partner/PartnerRefer'
import BecomePartner from '@/components/partner/BecomePartner'
const page = () => {
  return (
    <div>
      <PartnerHero/>
      <PartnerService/>
      <PartnerRefer/>
      <BecomePartner/>
    </div>
  )
}

export default page
