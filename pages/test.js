import { iconsObjData } from '@/components/common/Content'
import Activities from '../components/campground/Activities'

import Navbar from '../components/homepage/Navbar'
export default function TestPage() {
  const activities = Object.keys(iconsObjData)
  // console.log(activities)
  return (
    <>
      <span className="mr-[16px] lg:mr-[33px]">{iconsObjData['Grills']}</span>
    </>
  )
}
