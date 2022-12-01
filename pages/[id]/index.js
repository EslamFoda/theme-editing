import MainEditor from "../../components/mainEditor";
import { useRouter } from "next/router";
const website = () => {
  const {
    query: { id },
  } = useRouter();

  return <> 
  {/* {id && <MainEditor  id={id}/>} */}
  </>;
};

export default website;
