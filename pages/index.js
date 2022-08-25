import Layout from '../components/Layout'
import Footercamp from '../components/homepage/Footercamp'
import HomePageHero from '../components/homepage/HomePageHero'
import WhatIsPowerCamper from '../components/homepage/WhatIsPowerCamper'
import PowerCamperMember from '../components/homepage/PowerCamperMember'
import Campsitesfound from '../components/homepage/Campsitesfound'
import AsEasy from '../components/homepage/AsEasy'
import Joincamper from '../components/homepage/Joincamper'
import Signup from '../components/homepage/Signup'
import Members from '../components/homepage/Members'
import BackToTop from '../components/common/BackToTop'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Layout>
        <HomePageHero />
        <Campsitesfound />
        <WhatIsPowerCamper />
        <AsEasy />
        <PowerCamperMember />
        <Members />
        <Joincamper />
        <Signup />
        <Footercamp />
        <BackToTop />
      </Layout>
    </>
  )
}
