import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import Design1 from "./design/design1";
import Design2 from "./design/design2";
import Design3 from "./design/design3";
import Design4 from "./design/design4";
import Design5 from "./design/design5";
import { useSelector } from "react-redux";
import {
  editTeamAbout,
  editTeamSubTitle,
  editTeamTitle,
  editTeamUserName,
  editTeamUserPosition,
} from "../../../features/team-section";
const MainTeam = ({ comps, index, setComps, comp, device, editSections }) => {
  const { compName, designNum } = comp;
  const teamData = useSelector((state) => state.team.teamData);
  const headers = useSelector((state) => state.team.headers);
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };

  const ServicesComp = designs[`design${designNum}`];

  return (
    <div
      className={`relative group  ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inside" : ""
      }  w-full `}
    >
      <ServicesComp
        device={device}
        teamData={teamData}
        headers={headers}
        editTeamAbout={editTeamAbout}
        editTeamSubTitle={editTeamSubTitle}
        editTeamTitle={editTeamTitle}
        editTeamUserName={editTeamUserName}
        editTeamUserPosition={editTeamUserPosition}
      />
      <ChangeSection
        comp={comp}
        compName={compName}
        comps={comps}
        index={index}
        designNum={designNum}
        setComps={setComps}
      />
      {editSections && <AddSection index={index} />}
    </div>
  );
};

export default MainTeam;
