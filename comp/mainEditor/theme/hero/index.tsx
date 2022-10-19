import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import { useSelector, useDispatch } from "react-redux";
import { next, prev } from "../../../../features/hero";
const MainHero = ({index}) => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
  };
  const moveInArray = function (arr, from, to) {
    // Make sure a valid array is provided
    if (Object.prototype.toString.call(arr) !== "[object Array]") {
      throw new Error("Please provide a valid array");
    }

    // Delete the item from it's current position
    const item = arr.splice(from, 1);

    // Make sure there's an item to move
    if (!item.length) {
      throw new Error("There is no item in the array at index " + from);
    }

    // Move the item to its new position
    arr.splice(to, 0, item[0]);
  };

  const HeroComp = designs[`design${count}`];
  return ( 
    <div className="relative  w-full ">
      <HeroComp />
    
      <div className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3">
        <div className="cursor-pointer bg-white px-4 py-1 rounded-full" onClick={() => dispatch(prev())}>
          prev
        </div>
        <div className="cursor-pointer bg-white px-4 py-1 rounded-full" onClick={() => dispatch(next())}>
          next
        </div>
      </div>
    </div>
  );
};

export default MainHero;
