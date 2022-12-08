import EditorComp from "../../../editor";
import Container from "../../../ui/container";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";
import InputComp from "../common/inputComp";
import Button from "../../../ui/Button";
import InputPopover from "../../../ui/inputPopover";

const Design1 = ({
  contactData,
  handleEdit,
  handleContactsEdit,
  comp,
  comps,
  themeData,
}) => {
  const icons = {
    email: AiOutlineMail,
    phone: BsTelephone,
    address: RiMapPin2Line,
  };

  return (
    <Container className="max-w-4xl m-auto py-16 space-y-10">
      <div className="text-center space-y-2">
        <EditorComp
          initialValue={contactData.title}
          keys="title"
          handleEdit={handleEdit}
        />
        <EditorComp
          initialValue={contactData.subTitle}
          keys="subTitle"
          handleEdit={handleEdit}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
        {contactData.contacts.map((contact) => {
          const IconComp = icons[contact.iconName];
          return (
            <div key={contact.id} className="flex gap-4">
              <div className="min-w-[64px] h-16  bg-primaryBg flex justify-center items-center">
                <IconComp size={25} className="text-primary" />
              </div>
              <div className="space-y-1">
                <EditorComp
                  id={contact.id}
                  initialValue={contact.title}
                  keys="title"
                  handleContactsEdit={handleContactsEdit}
                />
                <EditorComp
                  id={contact.id}
                  initialValue={contact.details}
                  keys="details"
                  handleContactsEdit={handleContactsEdit}
                />
              </div>
            </div>
          );
        })}
      </div>
      <form className="space-y-4">
        {contactData.items.map((item, index) => {
          return (
            <div key={item.id}>
              <InputPopover
                comp={comp}
                index={index}
                comps={comps}
                themeData={themeData}
                inputType={item.inputType}
                required={item.required}
              >
                <InputComp
                  comp={comp}
                  index={index}
                  comps={comps}
                  themeData={themeData}
                  placeHolder={item.placeHolder}
                  required={item.required}
                  inputType={item.inputType}
                />
              </InputPopover>
            </div>
          );
        })}
        <div className="text-center">
          <Button>
            <EditorComp
              initialValue={contactData.btn}
              keys="btn"
              handleEdit={handleEdit}
            />
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Design1;
