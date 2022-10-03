import Image from 'next/image'
export default function MemberFeature() {
  return (
    <div className="text-center">
      <Image
        alt="Scott"
        src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828030/Others/sliderlogo_ojscuz.png"
        width={122}
        height={122}
      />
      <h2 className="text-2xl mt-2 font-Balsamiq font-bold">Scott M</h2>
      <p className=" text-base text-[#666666] pt-2 pb-8 font-Balsamiq font-normal text-center">
        PC Member since 2019
      </p>
      <p className=" text-xl md:max-w-md max-w-xs mx-auto text-[#4D4D4D] font-Balsamiq font-normal">
        “[l’ve] been very happy. Like being able to zero in on exactly what we
        are looking for. We have nailed some awesome weekends!”
      </p>
    </div>
  )
}
