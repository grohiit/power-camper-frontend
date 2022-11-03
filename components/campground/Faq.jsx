import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { DownArrowIcon } from '../common/Icons'
import Image from 'next/image'

const Faq = ({ faqdata }) => {
  const [view, setView] = React.useState(null)
  const activeHandler = (value) => {
    if (value === view) {
      setView(null)
    } else {
      setView(value)
    }
  }

  return (
    <>
      <section className="faqBg relative" id="FAQs">
        <div className="absolute bottom-full right-0 hidden md:inline-block -z-50">
          <Image
            className="mb-12"
            src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828827/Others/green_right_side_adf6aj.png"
            alt="greenRightSideDot"
            width={164}
            height={270}
          />
        </div>
        <div className="absolute top-[-63px] left-0 hidden md:inline-block">
          <Image
            className=" "
            src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664828827/Others/white_left_side_gps3jp.png"
            alt="whiteLeftSideDot"
            width={200}
            height={270}
          />
        </div>
        <div className="topWaveImg">
          <Image
            className="w-full "
            src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664829160/Others/rivermap_top_wave_l0g3cj.png"
            alt="topWaveImg"
            width={1920}
            height={85}
            layout="responsive"
          />
        </div>
        <div className="container   mx-auto my-16 lg:my-24">
          <div>
            <h4 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl text-center text-white mb-6 lg:mb-12   ">
              FAQs
            </h4>
          </div>
          <div className="flex justify-center flex-col max-w-4xl mx-auto">
            {faqdata.map((item, index) => (
              <div
                key={index}
                className={`faq-wrapper py-4 md:py-6 px-5 xs:px-7 md:px-10 overflow-hidden mb-5  faq_border ${
                  index === view ? ' active-faq-item ' : ''
                }`}
              >
                <div
                  onClick={() => activeHandler(index)}
                  className={`faq-question text-sm md:text-base lg:text-2xl font-bold font-Cabin text-white cursor-pointer flex justify-between items-center `}
                >
                  {item.question}
                  <span
                    className={`${
                      index === view ? 'rotate-icon' : ''
                    } arrow-icon-faq ml-3`}
                  >
                    <span className="DownArrowIcon">
                      <DownArrowIcon />
                    </span>
                  </span>
                </div>
                <AnimatePresence>
                  {index === view && (
                    <motion.div
                      transition={{
                        default: { duration: 0.2 },
                      }}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                      }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="faq-answer">
                        <p
                          className={`mb-0 pt-4 text-white  font-Cabin text-sm lg:text-base     ${
                            index === view ? '' : ''
                          }`}
                        >
                          {item.answer}
                        </p>
                        <span className="red-bottom-border"></span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className="bottomWaveImg">
          <Image
            className="w-full "
            src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1664829160/Others/rivermap_bottom_wave_vhh2lb.png"
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

export default Faq
