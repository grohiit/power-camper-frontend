import Image from 'next/image'
import Link from 'next/link'

const CampgroundMap = ({ campgroundMap, name }) => {
  function onDocumentLoadSuccess({ numPages }) {}

  return (
    <>
      <section id="Green-map" className="bg_green_linear relative">
        <div className="topWaveImg">
          <Image
            className="w-full "
            src="/img/png/rivermap/top_wave.png"
            alt="topWaveImg"
            width={1920}
            height={85}
            layout="responsive"
          />
        </div>
        <div className="container mx-auto my-5">
          <div>
            <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center mb-5  text-white ">
              {name} Campground Map
            </h2>
            <div className="rounded-lg mb-5 ">
              <Image
                className="w-full"
                src={campgroundMap}
                alt="campgroun map"
                width={500}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className=" flex items-center justify-center text-center  ">
              <Link href={campgroundMap} passHref>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="bg-transparent border-white border-2  py-[8px] px-[16px] md:px-[28px] rounded-full  text-white font-bold  font-Bubblegum text-sm lg:text-base hover:opacity-70 ease-in-out duration-75 ml-[16px] md:ml-[20px]"
                >
                  VIEW IN FULL SCREEN
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottomWaveImg">
          <Image
            className="w-full "
            src="/img/png/rivermap/bottom_wave.png"
            alt="bottomWaveImg"
            width={1920}
            height={85}
            layout="responsive"
          />
        </div>
      </section>
    </>
  )
}

export default CampgroundMap
