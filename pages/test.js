import Summary from '../components/campground/Summary'

const data = {
  name: 'Test Name',
  website: 'Test.com',
  tagLine: 'No tagline',
  phone: 'No phone',
  rating: 3.5,
  summary: {
    hookups: {
      water: true,
      sewer: true,
      electric: true,
    },
    ada: true,
    cost: 40,
    pets: true,
    shower: true,
    RV: true,
  },
  location: {
    type: 'Point',
    coordinates: [-117.312745, 33.087714],
    formattedAddress: '7201 Carlsbad Blvd, Carlsbad, CA 92011-5429, US',
    street: '7201 Carlsbad Blvd',
    city: 'Carlsbad',
    state: 'CA',
    zipcode: '92011-5429',
    country: 'US',
  },
}

export default function TestPage() {
  let { summary } = data
  const summaryFalse = {
    hookups: { water: false, sewer: false, electric: false },
    ada: false,
    cost: 40,
    pets: false,
    shower: false,
    RV: false,
  }
  summary = summaryFalse
  const data2 = JSON.parse(JSON.stringify(data))
  data2.summary = summaryFalse
  return (
    <>
      <Summary data={data} />
      <br />
      <Summary data={data2} />
      <br />
    </>
  )
}
