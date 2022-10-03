import OverviewReservationForm from '@/components/campground/OverviewReservationForm'
const data = {
  overview: '',
  name: 'test',
  facilityID: '120090',
}
export default function TestPage() {
  return (
    <>
      <OverviewReservationForm data={data} />
    </>
  )
}
