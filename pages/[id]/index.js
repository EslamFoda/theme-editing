import MainEditor from "../../components/mainEditor";
import { useRouter } from "next/router";
const Website = () => {
  const {
    query: { id },
  } = useRouter();

  return <> 
  {id && <MainEditor  id={id}/>}</>;
};

export default Website;
