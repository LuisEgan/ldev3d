import { FC } from "react";
import ReactDOM from "react-dom";
import { getCV } from "../../utils/contact";
import Button from "../Button";
import ScrollLink from "../Links/ScrollLink";
import SVG from "../SVG";
import { MeComponents } from "../_Pages/Me";

interface IMobileSideMenu {
  onClose: () => void;
  children?: React.ReactNode;
}

const MobileSideMenu: FC<Partial<React.ReactPortal> & IMobileSideMenu> = (
  props
) => {
  const nextMain = document.getElementById("__next");

  const { onClose } = props;

  const Menu = () => {
    return (
      <div className="fixed h-screen w-screen flex top-0 left-0 z-50 text-gray-400">
        <div
          className="w-full cursor-pointer"
          onClick={onClose}
          style={{ background: "rgba(0,0,0,.4)" }}
        ></div>

        <div className="absolute h-screen w-5/6 flex flex-col bg-gray-700 shadow-lg right-0 fade-in-right md:w-1/4">
          <div className="flex justify-end p-10">
            <SVG src="svg/x.svg" size={30} onClick={onClose} />
          </div>

          <div className="text-lg font-bold w-full border-b-2 border-b-gray-600 px-5 pb-5">
            Menu
          </div>

          <div className="flex-1 overflow-auto flex flex-col">
            {MeComponents.map(({ id }) => (
              <ScrollLink
                key={id}
                onClick={onClose}
                scrollToId={id}
                className="mr-5 py-6 px-5 cursor-pointer hover:bg-gray-600"
              />
            ))}

            <Button
              variant="ghost"
              className="h-10 ml-5 w-[80%] m-auto"
              onClick={getCV}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return nextMain ? ReactDOM.createPortal(<Menu />, nextMain) : null;
};

export default MobileSideMenu;
