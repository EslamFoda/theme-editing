import { useDispatch } from "react-redux";
import { getNextIndex } from "../../../features/add-section";
import { selectCompName } from "../../../features/comp-name";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
const ControlBtns = ({ i, comp, comps, setComps }) => {
  const dispatch = useDispatch();
  const moveInArray = function (arr, from, to, compsName) {
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
    dispatch(selectCompName(compsName));
    dispatch(getNextIndex(to));
    setComps([...arr]);
  };
  return (
    <div className="absolute space-y-5 top-1/2 left-28 transform -translate-x-1/2 -translate-y-1/2 ">
      {i === 0 ? null : (
        
        <button
          className="btn block"
          onClick={() => {
            const { compName } = comp;
            moveInArray(comps, i, i - 1, compName);
          }}
        >
          <span class="circle">
            <FaArrowUp className="icon" />
          </span>{" "}
          <span className="button-text">move up</span>
        </button>
      )}
      {comps.lastIndexOf(comps[comps.length - 1]) === i ? null : (
        <button
        className="btn block"
          onClick={() => {
            const { compName } = comp;
            moveInArray(comps, i, i + 1, compName);
          }}
        >
          <span className="circle">
            <FaArrowDown className="icon" />
          </span>
          <span className="button-text">Move Down</span>
        </button>
      )}
    </div>
  );
};

export default ControlBtns;
