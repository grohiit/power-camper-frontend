import React from "react";
import { HalfStarIcon } from "../common/Icons";

const ReviewStars = ({ value, rating, id }) => {
  return (
    <>
      {rating >= id + 1 ? (
        <span className={`mr-1 star_active`}>{value.starValue}</span>
      ) : rating > id && rating < id + 1 ? (
        <HalfStarIcon />
      ) : (
        <span className={`mr-1`}>{value.starValue}</span>
      )}
    </>
  );
};

export default ReviewStars;
