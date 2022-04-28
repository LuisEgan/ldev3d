import { contactByLinkedIn, contactByEmail } from "../../../utils/contact";
import SVG from "../../SVG";

const Contact = () => {
  return (
    <div className="flex flex-col p-5 pt-10 text-white md:pl-20 md:pt-20 md:text-6xl">
      <div className="text-5xl font-bold w-full text-center">
        Let's get in touch!
      </div>

      <div className="flex py-20">
        <div className="flex-1 flex justify-center items-center border-r-2 border-r-gray-500">
          <SVG
            src="svg/linkedin.svg"
            size={150}
            className="grayscale hover:grayscale-0 hover:scale-110 transition-all"
            onClick={contactByLinkedIn}
            stroke="#0a66c2"
          />
        </div>
        <div className="flex-1 flex justify-center items-center border-l-2 border-l-gray-500">
          <SVG
            src="svg/mail.svg"
            size={150}
            className="grayscale hover:grayscale-0 hover:scale-110 transition-all"
            onClick={contactByEmail}
            stroke="#e68a00"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
