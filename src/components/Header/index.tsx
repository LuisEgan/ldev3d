import { Fragment, useState } from "react";
import { WIDTH_MD } from "../../utils/constants";
import { getCV } from "../../utils/contact";
import useWindowSize from "../../utils/hooks/useWindowSize";
import Button from "../Button";
import ScrollLink from "../Links/ScrollLink";
import SVG from "../SVG";
import { MeComponents } from "../_Pages/Me";
import MobileSideMenu from "./MobileSideMenu";

const Header = () => {
  const { screenW } = useWindowSize();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="fixed w-full z-50 h-[13vh] text-gray-400 font-light flex justify-between items-center px-7 bg-gray-800">
      <SVG src="svg/L.svg" size={50} />

      {screenW > WIDTH_MD ? (
        <nav className="flex items-center">
          {MeComponents.map(({ id }, i) => (
            <Fragment key={id}>
              {" "}
              <ScrollLink
                scrollToId={id}
                className="hover:text-white hover:font-bold"
              />
              {i !== MeComponents.length - 1 && <b>|</b>}
            </Fragment>
          ))}

          <Button variant="ghost" className="h-10 ml-5" onClick={getCV}>
            Resume
          </Button>
        </nav>
      ) : (
        <SVG
          src="svg/hamburger.svg"
          size={50}
          onClick={() => setShowMenu(true)}
          fill="rgb(156 163 175)"
        />
      )}

      {showMenu && <MobileSideMenu onClose={() => setShowMenu(false)} />}
    </header>
  );
};

export default Header;
