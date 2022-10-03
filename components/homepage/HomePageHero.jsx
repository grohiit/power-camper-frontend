import { SearchbarbuttonIcon } from '../common/Icons'
import Link from 'next/link'
const HomePageHero = () => {
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/dqdzorc8z/image/upload/v1664302834/hero_sntoq9.webp')] bg-no-repeat bg-center flex flex-col min-h-80vh bg-cover">
        <div className="justify-center sm:items-center flex grow pt-[70px] sm:pt-0 ">
          <div className="container ">
            <div className="md:max-w-4xl mx-auto text-center">
              <h1 className="font-Balsamiq md:text-6xl text-5xl text-[#fff] font-bold leading-[119%]">
                Get notifed of campground availabilities instantly!
              </h1>

              <a href="https://app.powercamper.com/request?clear=1">
                <button
                  type="button"
                  className="bg-[#ffffff] py-4  hover:opacity-80 search_button px-16 border-2 rounded-md my-12 m-auto  flex items-center justify-center	  text-[#000000] font-Balsamiq border-transparent text-xl font-medium "
                >
                  Start Search
                  <span className="ml-[12px] ">
                    <SearchbarbuttonIcon />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageHero
