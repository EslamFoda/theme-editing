import { useSelector, useDispatch } from "react-redux";
import { addSectionTurnOff, toggleEdit } from "../../../features/edit-sections";
import { changeDevice, changeWidth } from "../../../features/main-width";
import { FaEye, FaEdit } from "react-icons/fa";
import { closeColors, toggleColors } from "../../../features/colors";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { selectCompName } from "../../../features/comp-name";
const ActionNavBar = () => {
  const editSections = useSelector((state) => state.editSections.value);
  const device = useSelector((state) => state.mainWidth.device);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <div className="bg-[#353f4b] h-20  grid grid-cols-4 items-center">
        <div className="px-4">
          {editSections ? (
            <span className="text-white font-bold">Edit Mode</span>
          ) : (
            <span className="text-white font-bold">Preview Mode</span>
          )}
        </div>

        <ToggleGroup.Root
          className="ToggleGroup"
          type="single"
          defaultValue="desktop"
          value={device}
          aria-label="Text alignment"
          onValueChange={(value) => {
            if (value) dispatch(changeDevice(value));
            console.log(value)
          }}
        >
          <ToggleGroup.Item
            className="ToggleGroupItem"
            value="mobile"
            aria-label="Left aligned"
          >
            <svg
              onClick={() => {
                dispatch(changeWidth("412px"));
              }}
              className="hover:stroke-white cursor-pointer stroke-[#98A2B3]"
              width="22"
              height="32"
              viewBox="0 0 22 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 23.7916H11.0142M5.61668 30.1666H16.3833C17.9702 30.1666 18.7636 30.1666 19.3696 29.8578C19.9028 29.5862 20.3362 29.1527 20.6079 28.6196C20.9167 28.0135 20.9167 27.2201 20.9167 25.6333V6.36665C20.9167 4.77983 20.9167 3.98642 20.6079 3.38034C20.3362 2.84721 19.9028 2.41377 19.3696 2.14213C18.7636 1.83331 17.9702 1.83331 16.3833 1.83331H5.61668C4.02986 1.83331 3.23645 1.83331 2.63037 2.14213C2.09724 2.41377 1.6638 2.84721 1.39216 3.38034C1.08334 3.98642 1.08334 4.77983 1.08334 6.36665V25.6333C1.08334 27.2201 1.08334 28.0135 1.39216 28.6196C1.6638 29.1527 2.09724 29.5862 2.63037 29.8578C3.23645 30.1666 4.02986 30.1666 5.61668 30.1666ZM11.7083 23.7916C11.7083 24.1828 11.3912 24.5 11 24.5C10.6088 24.5 10.2917 24.1828 10.2917 23.7916C10.2917 23.4004 10.6088 23.0833 11 23.0833C11.3912 23.0833 11.7083 23.4004 11.7083 23.7916Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className="ToggleGroupItem"
            value="tablet"
            aria-label="Center aligned"
          >
            <svg
              onClick={() => {
                dispatch(changeWidth("1024px"));
              }}
              className="hover:stroke-white cursor-pointer stroke-[#98A2B3]"
              width="26"
              height="32"
              viewBox="0 0 26 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 23.7916H13.0142M6.19999 30.1666H19.8C21.3868 30.1666 22.1802 30.1666 22.7863 29.8578C23.3194 29.5862 23.7529 29.1527 24.0245 28.6196C24.3333 28.0135 24.3333 27.2201 24.3333 25.6333V6.36665C24.3333 4.77983 24.3333 3.98642 24.0245 3.38034C23.7529 2.84721 23.3194 2.41377 22.7863 2.14213C22.1802 1.83331 21.3868 1.83331 19.8 1.83331H6.19999C4.61317 1.83331 3.81977 1.83331 3.21368 2.14213C2.68056 2.41377 2.24711 2.84721 1.97547 3.38034C1.66666 3.98642 1.66666 4.77983 1.66666 6.36665V25.6333C1.66666 27.2201 1.66666 28.0135 1.97547 28.6196C2.24711 29.1527 2.68056 29.5862 3.21368 29.8578C3.81977 30.1666 4.61317 30.1666 6.19999 30.1666ZM13.7083 23.7916C13.7083 24.1828 13.3912 24.5 13 24.5C12.6088 24.5 12.2917 24.1828 12.2917 23.7916C12.2917 23.4004 12.6088 23.0833 13 23.0833C13.3912 23.0833 13.7083 23.4004 13.7083 23.7916Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className="ToggleGroupItem"
            value="desktop"
            aria-label="Right aligned"
          >
            <svg
              onClick={() => {
                dispatch(changeWidth("100%"));
              }}
              className="hover:stroke-white  cursor-pointer stroke-[#98A2B3]"
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 21.0833V26.75H11.75V21.0833M6.36668 21.0833H25.6333C27.2202 21.0833 28.0136 21.0833 28.6197 20.7745C29.1528 20.5029 29.5862 20.0694 29.8579 19.5363C30.1667 18.9302 30.1667 18.1368 30.1667 16.55V5.78333C30.1667 4.19652 30.1667 3.40311 29.8579 2.79703C29.5862 2.2639 29.1528 1.83046 28.6197 1.55881C28.0136 1.25 27.2202 1.25 25.6333 1.25H6.36668C4.77986 1.25 3.98645 1.25 3.38037 1.55881C2.84724 1.83046 2.4138 2.2639 2.14216 2.79703C1.83334 3.40311 1.83334 4.19652 1.83334 5.78333V16.55C1.83334 18.1368 1.83334 18.9302 2.14216 19.5363C2.4138 20.0694 2.84724 20.5029 3.38037 20.7745C3.98645 21.0833 4.77986 21.0833 6.36668 21.0833Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        {editSections ? (
          <div
            onClick={() => {
              dispatch(toggleColors());
              dispatch(selectCompName(""));
              dispatch(addSectionTurnOff());
            }}
            className="text-white"
          >
            colors
          </div>
        ) : null}
        <div
          className=" mx-4 justify-self-end cursor-pointer"
          onClick={() => {
            dispatch(toggleEdit());
            dispatch(addSectionTurnOff());
            dispatch(selectCompName(""));
            dispatch(closeColors());
          }}
        >
          {editSections ? (
            <div className="flex text-[#98A2B3] hover:text-white items-center gap-3">
              <span>preview</span>
              <FaEye size={16} />
            </div>
          ) : (
            <div className="flex text-[#98A2B3] hover:text-white items-center gap-3">
              <span>edit</span>
              <FaEdit size={16} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ActionNavBar;
