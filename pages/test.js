import { iconsObjData } from '@/components/common/Content'
import Activities from '../components/campground/Activities'

import Navbar from '../components/homepage/Navbar'
export default function TestPage() {
  const activities = Object.keys(iconsObjData)
  console.log(activities)
  return (
    <>
      <Activities activities={activities} />
    </>
  )
}
