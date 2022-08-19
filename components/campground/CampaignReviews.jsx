import Image from "next/image";
import React from "react";
import { markdownToHtml } from "../common/Functions";
import { StarIcon } from "../common/Icons";
import ReviewStars from "../common/ReviewStars";

const CampaignReviews = ({ reviewdata }) => {
  const stars = [
    { starValue: <StarIcon />, starActive: "star_active" },
    { starValue: <StarIcon />, starActive: "star_active" },
    { starValue: <StarIcon />, starActive: "star_active" },
    { starValue: <StarIcon />, starActive: "star_active" },
    { starValue: <StarIcon />, starActive: "star_active" },
  ];
  return (
    <>
      {reviewdata &&
        reviewdata.map((val, index) => {
          return (
            <div key={index}>
              <div className="sm:flex mt-8 px-3">
                <div>
                  <p className="font-Cabin  text-sm lg:text-base font-bold text-white mb-2">
                    Outstanding Campground
                  </p>
                  <div className="flex items-center">
                    <p className="font-Cabin text-sm lg:text-base font-bold text-white">
                      {val.name}
                    </p>
                    <p className="font-Cabin opacity-70  text-sm lg:text-base font-normal text-white ml-3">
                      Reviewed 10/24/2021
                    </p>
                  </div>
                  <div className="flex py-4 items-center">
                    <p className="font-Cabin  text-sm lg:text-base font-normal text-white mr-2">
                      Overall Rating
                    </p>
                    <div className="flex ">
                      <div className="flex justify-center">
                        {stars &&
                          stars.map((value, index) => (
                            <ReviewStars
                              key={index}
                              value={value}
                              rating={val.rating}
                              id={index}
                            />
                          ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className="font-Cabin text-sm   lg:text-sm lg:text-base font-normal text-white opacity-70"
                    dangerouslySetInnerHTML={{
                      __html: markdownToHtml(val.review),
                    }}
                  ></div>
                  <div className="profile_img   max-w-[107px] w-full  mt-5 ">
                    <div className="profile_box inline-block">
                      <Image
                        src={val.image}
                        alt="ProfileImg"
                        width={52}
                        height={52}
                        objectFit="cover"
                        layout="intrinsic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CampaignReviews;
