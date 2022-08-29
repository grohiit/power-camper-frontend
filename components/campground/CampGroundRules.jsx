const CampGroundRules = ({ campgroundRules, name }) => {
  return (
    <>
      <div className="lg:w-3/6 lg:pr-[100px] mb-20 lg:mb-0">
        <h2 className="font-Bubblegum text-2xl lg:text-3xl xl:text-4xl mb-4">
          {name} Campground Rules
        </h2>
        <div className="river_main_box  py-[6px] px-[8px] ">
          <div className="river_middle_box pt-[18px] lg:pt-6 pb-[14px] px-[14px] lg:px-[16px]">
            {campgroundRules.map((val, index) => {
              return (
                <div
                  className="river_small_box py-[10px] px-[16px] lg:px-6 flex content-between  mb-2"
                  key={index}
                >
                  <h4 className="font-Cabin mb-0 text-sm lg:text-base   font-bold text-white w-3/6 mr-[10px] lg:mr-0 ">
                    {val.key}
                  </h4>
                  <span className="w-3/6 font-Cabin mb-0 text-sm lg:text-base    text-white ">
                    {val.value}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CampGroundRules
