import Unlimited from '@/components/homepage/Unlimited'
const data = {
  overview: '',
  name: 'test',
  facilityID: '120090',
}
export default function TestPage() {
  return (
    <>
      <Unlimited data={data} />
    </>
  )
}
