import ControlBtns from "./controlBtns";
import { containersData } from "../../../constant/data";
import DeleteContainers from "../../deleteContainers";
const Preview = ({ containerWidth, comps, setComps, device, editSections }) => {
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
      {comps.map((comp, i) => {
        const Component = containersData[comp.compName];
        return (
          <div className="relative demo-inline" key={comp.id}>
            <DeleteContainers index={i}/>
            <Component
              comp={comp}
              setComps={setComps}
              comps={comps}
              index={i}
              device={device}
              editSections={editSections}
            />
            {editSections ? (
              <ControlBtns
                comps={comps}
                i={i}
                comp={comp}
                setComps={setComps}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
