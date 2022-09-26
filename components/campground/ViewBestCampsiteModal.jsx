import ViewCampsiteSlider from './ViewCampsiteSlider'
import { CancelIcon } from '../common/Icons'

const ViewBestCampsiteModal = ({
  show,
  setShow,
  sliderMain,
  sliderSmall,
  sliderMainRef,
  slidersmallRef,
  images,
  title,
}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full  z-[999]  ${
          show ? '' : 'hidden'
        }`}
        onClick={() => setShow(false)}
      ></div>
      <section
        className={`min-h-screen   modal_bg fixed top-0 left-0  w-full h-full flex justify-center items-center  ${
          show ? 'min-h-screen opacity-100  z-[99999] ' : 'hidden opacity-0 '
        }`}
      >
        <div className="w-5/6 md:w-3/6 m-auto px-3 lg-px-0 z-[99999] relative ">
          <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-5 text-white">
            {title}
          </h2>
          <ViewCampsiteSlider
            sliderMain={sliderMain}
            sliderSmall={sliderSmall}
            sliderMainRef={sliderMainRef}
            slidersmallRef={slidersmallRef}
            setShow={setShow}
            show={show}
            images={images}
          />
        </div>

        <div
          className="close_button text-right cursor-pointer p-3 lg:p-4 absolute z-[99999] top-0 right-0"
          onClick={() => setShow(false)}
        >
          <CancelIcon />
        </div>
      </section>
    </>
  )
}

export default ViewBestCampsiteModal
