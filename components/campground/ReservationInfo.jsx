import { RedCrossIcon, TickIcon } from '../common/Icons'
import { marked } from 'marked'

const ReservationInfo = ({ data }) => {
  const { reservationAllowed, reservationRequired, reservationInfo, name } =
    data ? data : {}

  return (
    <>
      {/* RESERVATION INFO */}
      <div>
        <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-5 max-w-md">
          {name} Reservation Information
        </h2>
        <div className="river_main_box w-oka py-[6px] px-[8px] mb-[20px] lg:mb-[30px]">
          <div className="river_middle_box py-4 lg:py-6 px-3 lg:px-[16px]">
            <div className="river_small_box py-[10px] px-[10px] lg:px-6 flex justify-between mb-2">
              <h4 className="font-Cabin mb-0 text-sm lg:text-base   font-bold text-white w-3/6">
                Reservations Allowed?
              </h4>
              <span className="w-3/6">
                {reservationAllowed ? <TickIcon /> : <RedCrossIcon />}
              </span>
            </div>
            <div className="river_small_box py-[10px] px-[10px] lg:px-6 flex justify-between">
              <h4 className="font-Cabin mb-0 text-sm lg:text-base    font-bold text-white w-3/6">
                Reservations Required?
              </h4>
              <span className="font-Cabin text-sm lg:text-base    text-white w-3/6">
                {reservationRequired}
              </span>
            </div>
          </div>
        </div>

        <div
          className="text-justify font-Cabin text-lg opacity-70"
          dangerouslySetInnerHTML={{
            __html: marked(reservationInfo),
          }}
        ></div>
      </div>
    </>
  )
}

export default ReservationInfo
