import Image from 'next/image'
const Joincamper = () => {
  return (
    <>
      <div className="mb-[-2px] ">
        <Image
          className="w-full "
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828138/Others/joinpoweWavetop_nttyzq.png"
          alt="Logo"
          width={1920}
          height={81}
          layout="responsive"
        />
      </div>
      <div className="bg-[#F8F6F4] py-[30px] flex items-center  ">
        <div className=" container px-2 md:px-4 md:container md:mx-auto text-center ">
          <h2 className=" text-[32px] md:text-5xl font-Balsamiq font-bold text-center leading-[119%] ">
            Join PowerCamper Today!
          </h2>
          <a href="https://app.powercamper.com/request?clear=1">
            <button className="text-white text-center font-Balsamiq font-bold text-base md:text-xl border md:mt-[45px] mt-[20px] rounded-md  border-[#243C5A] border-solid bg-[#3F503B] px-7 py-[14px] hover:border hover:border-solid hover:border-[#243C5A] hover:text-[#3F503B]       hover:bg-transparent leading-[20px] ">
              Let’s Get Camping!
            </button>
          </a>
        </div>
      </div>
      <div className="mt-[-2px] ">
        <Image
          className="w-full "
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828138/Others/joinpoweWavebottom_dcpwjp.png"
          alt="Logo"
          width={1920}
          height={81}
          layout="responsive"
        />
      </div>
    </>
  )
}

export default Joincamper
