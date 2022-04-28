import { useState } from "react";
import { SECTIONS_IDS, WIDTH_MD } from "../../../utils/constants";
import useWindowSize from "../../../utils/hooks/useWindowSize";
import Button from "../../Button";
import ScrollLink from "../../Links/ScrollLink";
import SVG from "../../SVG";
import Typewrite from "../../Typewrite";

const Hi = () => {
  const { screenW } = useWindowSize();

  const [showName, setShowName] = useState<boolean>(false);
  const [showContact, setShowContact] = useState<boolean>(false);

  return (
    <div className="flex flex-col p-5 text-white min-h-[90vh] md:pl-20 md:pt-11">
      <Typewrite
        textLine="Hi, I'm"
        delay={1000}
        className="text-[5rem] font-bold mb-5 md:mb-0 md:text-[6rem]"
        onFinish={() => setShowName(true)}
      />

      {showName && (
        <div className="flex flex-col md:flex-row md:items-end text-[2rem] fade-in">
          <div className="flex items-end">
            <SVG src="svg/L.svg" size={screenW > WIDTH_MD ? 100 : 60} />
            <Typewrite delay={200} typingSpeed={5} textLine="uis" />
          </div>

          <div className="flex items-end">
            <div className="font-bold text-main-500 md:ml-4">D</div>
            <Typewrite delay={500} typingSpeed={5} textLine="aniel" />
          </div>

          <div className="flex items-end">
            <span className="font-bold text-main-500 md:ml-4">E</span>
            <Typewrite delay={800} typingSpeed={5} textLine="gan" />
          </div>

          <div className="flex items-end">
            <span className="font-bold text-main-500 md:ml-4">V</span>
            <Typewrite
              delay={1000}
              typingSpeed={5}
              textLine="illamizar"
              onFinish={() => setShowContact(true)}
            />
          </div>
        </div>
      )}

      {showContact && (
        <div className="my-5 fade-in">
          <i>Fullstack / Unity developer</i>

          <Button className="w-full my-5 py-0 px-0 md:w-2/5" variant="ghost">
            <ScrollLink
              scrollToId={SECTIONS_IDS.Contact}
              title={"Contact me!"}
              className="w-full h-full px-10 py-5 text-center"
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Hi;
