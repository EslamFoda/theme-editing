import { TfiTrash } from "react-icons/tfi";
import { useContext } from "react";
import { CompsContext } from "../../context/compsContext";
const DeleteContainers = ({ index }) => {
  const { comps, setComps } = useContext(CompsContext);
  const handleDeleteSection = () => {
    const removedSection = comps.filter((_: any, i: number) => i !== index);
    setComps([...removedSection]);
  };
  return (
    <div
      onClick={handleDeleteSection}
      className="absolute z-50  top-5 left-5 transform -translate-x-1/2 -translate-y-1/2 "
    >
      <div className="expand-container">
        <div className="icon-container hover:!text-[red]">
          <span className="expand-icon">
            <TfiTrash size={23}/>
          </span>
          <span className="text !text-[red]">Remove Section</span>
        </div>
      </div>
    </div>
  );
};

export default DeleteContainers;
