import { BackpackIcon, TestIcon } from '@/components/campground/ActivityIcons'
import Activities from '../components/campground/Activities'

import Navbar from '../components/homepage/Navbar'
export default function TestPage() {
  const activities = [1, 2, 3]
  return (
    <>
      <BackpackIcon />
      <Activities activities={[1, 2, 3, 4, 5]} />
    </>
  )
}
