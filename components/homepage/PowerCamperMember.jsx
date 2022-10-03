import Image from 'next/image'
import Instantnotification from './Instantnotification'
import Scanone from './Scanone'
import Nextweekend from './Nextweekend'
import Unlimited from './Unlimited'

const PowerCamperMember = () => {
  return (
    <>
      <div className="mb-[-2px] ">
        <Image
          className="w-full "
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664826507/Others/top_wave_y2hhhf.png"
          alt="Logo"
          width={1920}
          height={81}
          layout="responsive"
        />
      </div>
      <div className="bg-[#F8F6F4]">
        <div className="container mx-auto md:pt-[2em]  ">
          <div className="text-center md:pb-[90px] pb-[40px] pt-[20px]">
            <h2 className="font-Balsamiq md:text-5xl  text-[32px] text-black font-bold leading-[119%] ">
              Become a Power Camper Member!
            </h2>
            <p className="text-[#4F535D] md:pt-[20px] text-xl sm:text-2xl font-Balsamiq   font-bold text-center">
              Membership Perks
            </p>
          </div>
          <div className="max-w-[910px] mx-auto">
            <Instantnotification />
            <Scanone />
            <Nextweekend />
            <Unlimited />
          </div>
        </div>
      </div>
      <div className="mt-[-2px] ">
        <Image
          className="w-full "
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664826507/Others/bottom_wave_lbpilw.png"
          alt="Logo"
          width={1920}
          height={81}
          layout="responsive"
        />
      </div>
    </>
  )
}

export default PowerCamperMember
