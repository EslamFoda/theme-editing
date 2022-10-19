import React, { useState } from "react";
import MainHero from "./theme/hero";
import MainAbout from "./theme/about";
import MainFeatured from "./theme/featured";
const MainContainer = ({ containerWidth }) => {
  let comps = [MainHero, MainAbout, MainFeatured];
  const [containers, setContainers] = useState([...comps]);
  const moveInArray = (arr, from, to) => {
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
    return arr;
  };

  return (
    <div
      style={{
        margin: "0px auto",
        flex: "1 1 0%",
        transition: "width 0.2s ease 0s",
        width: containerWidth,
      }}
      className="flex flex-col"
    >
      {containers.map((Comp, i) => {
        return (
          <div className="relative" key={i}>
            <Comp index={i} />
            <div className="absolute space-y-10  left-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3">
              {i === 0 ? null : (
                <h4
                  onClick={() => {
                    const currentIndex = comps.indexOf(Comp);
                    const prevIndex = (currentIndex - 1) % comps.length;
                    const newOrder = moveInArray(comps, i, prevIndex);
                    setContainers(newOrder);
                  }}
                  className="bg-white cursor-pointer"
                >
                  up
                </h4>
              )}

              {i === comps.length - 1 ? null : (
                <h4
                  className="bg-white cursor-pointer"
                  onClick={() => {
                    const currentIndex = comps.indexOf(Comp);
                    const nextIndex = (currentIndex + 1) % comps.length;
                    const newOrder = moveInArray(
                      comps,
                      i,
                      containers[nextIndex]
                    );
                    setContainers(newOrder);
                  }}
                >
                  down
                </h4>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainContainer;
