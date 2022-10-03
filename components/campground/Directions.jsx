import Image from 'next/image'
import { marked } from 'marked'
import dotenv from 'dotenv'
dotenv.config()

const Direction = ({ directions, name }) => {
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${
    process.env.GOOGLE_API_KEY
  }&q=${encodeURIComponent(name)}&zoom=16`

  return (
    <section className="relative">
      <div className="absolute top-0 right-0 hidden md:inline-block">
        <Image
          className="mb-12"
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828827/Others/green_right_side_adf6aj.png"
          alt="greenRightSideDot"
          width={170}
          height={270}
        />
      </div>
      <div className="absolute bottom-0 left-0 hidden md:inline-block">
        <Image
          className="mb-12"
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664829064/Others/green_left_side_rabwnb.png"
          alt="greenLeftSideDot"
          width={170}
          height={270}
        />
      </div>
      <div className="container mx-auto">
        <div>
          <div className="mb-5 md:mb-8 lg:mb-10 xl:mb-16 xxl:mb-20 text-center max-w-lg mx-auto">
            <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center mb-5   ">
              Directions
            </h2>

            <div
              className="font-Cabin text-lg opacity-70 "
              dangerouslySetInnerHTML={{
                __html: marked(directions),
              }}
            ></div>
          </div>
          <div className="  rounded-lg mb-5 md:mb-8 lg:mb-10 xl:mb-16 pb-1">
            <div className="direction_map_border py-1 lg:py-3.5 px-2 lg:px-5 rounded-lg">
              <iframe
                src={embedUrl}
                className="w-full map_hieght"
                allowFullScreen=""
                loading="lazy"
                title="directionMap"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
//AIzaSyA-I0SfLLLGdonwzAyA_Wgn0XQTosPSzhw
//src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.2052135224008!2d-86.12146168455808!3d44.715423191112315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881e0e7158b7b693%3A0x7a17fd2cbddea795!2s5685%20Lake%20Michigan%20Rd%2C%20Honor%2C%20MI%2049640%2C%20USA!5e0!3m2!1sen!2sin!4v1657191353117!5m2!1sen!2sin"

export default Direction
