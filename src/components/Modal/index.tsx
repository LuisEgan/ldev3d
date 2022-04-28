import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import SVG from "../SVG";

interface IModal {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<Partial<React.ReactPortal> & IModal> = (props) => {
  const nextMain = document.getElementById("__next");

  const { isOpen, children, onClose } = props;

  const ModalComponent = () => {
    return (
      <div className="fixed h-screen w-screen top-0 left-0 z-50 flex justify-center items-center">
        <div
          className="absolute w-full h-full cursor-pointer"
          onClick={onClose}
          style={{ background: "rgba(0,0,0,.4)" }}
        ></div>

        <div className="h-[90vh] z-10 flex flex-col w-5/6 bg-gray-700 shadow-lg rounded-lg right-0 fade-in overflow-x-hidden overflow-y-auto md:w-2/4">
          <div className="flex justify-end m-5">
            <SVG
              src="svg/x.svg"
              size={30}
              onClick={onClose}
              className="hover:scale-125 transition-all"
            />
          </div>
          {children}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return nextMain ? ReactDOM.createPortal(<ModalComponent />, nextMain) : null;
};

export default Modal;
