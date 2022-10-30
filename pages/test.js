// import OverviewReservationForm from '../../components/campground/OverviewReservationForm'
// import BestCampsitesReservationInfo from '../../components/campground/BestCampsitesReservationInfo'
// import RulesCost from '../../components/campground/RulesCost'
// import AmenitiesActivities from '../../components/campground/AmenitiesActivities'

export default function TestPage() {
  const content = `<Image src="https://res.cloudinary.com/dqdzorc8z/image/upload/articleImages/Image_2_1918a2f5-9024-41a3-8c2a-d388e603158d.png" width={512} height={140} alt="Image_2"/>,<Image src="https://res.cloudinary.com/dqdzorc8z/image/upload/articleImages/Image_a8e59fb9-620c-41ff-ae5f-8e93ec79c294.jpeg" width={393} height={294} alt="Image"/>
  `
  console.log(process.env.DOMAIN)
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  )
}
