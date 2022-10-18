import React from "react";
import Design1 from "../featured/designs/design1";
import Design2 from "../featured/designs/design2";
import Design3 from "../featured/designs/design3";
import { useSelector, useDispatch } from "react-redux";
import { next, prev } from "../../../../features/featured-section";
const MainFeatured = () => {
  const count = useSelector((state: any) => state.featured.value);
  const dispatch = useDispatch();
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
  };
  const FeaturedComp = designs[`design${count}`];
  return (
    <div className="relative  w-full ">
      <FeaturedComp />
      <div className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3">
        <div
          className="cursor-pointer bg-white px-4 py-1 rounded-full"
          onClick={() => dispatch(prev())}
        >
          prev
        </div>
        <div
          className="cursor-pointer bg-white px-4 py-1 rounded-full"
          onClick={() => dispatch(next())}
        >
          next
        </div>
      </div>
    </div>
  );
};
export default MainFeatured;
