import * as Popover from "@radix-ui/react-popover";
import { updateDoc } from "firebase/firestore";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Switch from "@radix-ui/react-switch";
const InputTypesPopup = ({
  children,
  inputType,
  index,
  comp,
  required,
  comps,
  themeData,
  iconPosition = "left",
}) => {
  const handleChangeInputType = async (value: string) => {
    comp.compData.items[index].inputType = value;
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
  const handleChangeRequired = async (value: boolean) => {
    comp.compData.items[index].required = value;
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
  return (
    <Popover.Root>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          avoidCollisions={true}
          hideWhenDetached
          className="w-64 bg-white shadow overflow-hidden rounded-xl "
          sideOffset={10}
          align={iconPosition === "left" ? "start" : "end"}
        >
          <div className="bg-[#202b39] flex justify-between rounded-t-xl items-center py-3 px-4 font-semibold text-white ">
            <span className="text-lg">input settings</span>
          </div>
          <div className="p-2 px-4">
            <span className="text-lg text-gray-500">input type</span>
          </div>
          <form>
            <RadioGroup.Root
              className="RadioGroupRoot"
              defaultValue={inputType}
              aria-label="View density"
              onValueChange={handleChangeInputType}
            >
              <div className="hover:bg-slate-200 cursor-pointer p-3 px-4 flex items-center">
                <RadioGroup.Item
                  className="RadioGroupItem"
                  value="text"
                  id="r1"
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label w-full cursor-pointer" htmlFor="r1">
                  Text
                </label>
              </div>
              <div className="hover:bg-slate-200 cursor-pointer p-3 px-4 flex items-center  ">
                <RadioGroup.Item
                  className="RadioGroupItem"
                  value="email"
                  id="r2"
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label w-full cursor-pointer" htmlFor="r2">
                  Email
                </label>
              </div>
              <div className="hover:bg-slate-200 cursor-pointer p-3 px-4 flex items-center ">
                <RadioGroup.Item className="RadioGroupItem" value="tel" id="r3">
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label w-full cursor-pointer" htmlFor="r3">
                  Phone Number
                </label>
              </div>
              <div className="hover:bg-slate-200 cursor-pointer p-3 px-4 flex items-center ">
                <RadioGroup.Item
                  className="RadioGroupItem"
                  value="textarea"
                  id="r4"
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label w-full cursor-pointer" htmlFor="r4">
                  Long Text
                </label>
              </div>
            </RadioGroup.Root>
            <div className="hover:bg-slate-200 border-t border-solid cursor-pointer py-4 px-4 flex items-center">
              <Switch.Root
                defaultChecked={required}
                onCheckedChange={handleChangeRequired}
                className="SwitchRoot"
                id="airplane-mode"
              >
                <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
              <label
                className="Label"
                htmlFor="airplane-mode"
                style={{ paddingRight: 15 }}
              >
                Required
              </label>
            </div>
          </form>

          <Popover.Arrow
            color="#202b39"
            className="PopoverArrow fill-[#202b39]"
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default InputTypesPopup;
