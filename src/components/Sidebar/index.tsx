import { WIDTH_MD } from "../../utils/constants";
import { contactByLinkedIn, contactByEmail } from "../../utils/contact";
import useWindowSize from "../../utils/hooks/useWindowSize";
import SVG from "../SVG";

const Sidebar = () => {
  const { screenW } = useWindowSize();

  if (screenW > WIDTH_MD) {
    return (
      <div className="fixed flex flex-col justify-end items-center bg-gray-800 w-16 pb-20 h-[88vh] mt-[12vh]">
        <SVG
          src="svg/linkedin.svg"
          size={30}
          className="grayscale hover:grayscale-0 hover:scale-110 transition-all pb-10"
          onClick={contactByLinkedIn}
          stroke="#0a66c2"
        />
        <SVG
          src="svg/mail.svg"
          size={30}
          className="grayscale hover:grayscale-0 hover:scale-110 transition-all"
          onClick={contactByEmail}
          stroke="#e68a00"
        />
      </div>
    );
  }

  return null;
};

export default Sidebar;
