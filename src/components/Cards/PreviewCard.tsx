import Image from "next/image";
import { CSSProperties, ReactNode, useState } from "react";
import Modal from "../Modal";

interface IPreviewCard {
  children?: ReactNode;
  className?: string;
  bgSrc?: string;
  size?: number;
}

const PreviewCard = (props: IPreviewCard) => {
  const { children, className, bgSrc, size } = props;

  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const style: CSSProperties = {};

  if (size) {
    style.height = size * 1.5;
    style.width = size;
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {children || (
          <div className="h-full w-full flex justify-center items-center text-gray-300">
            No preview
          </div>
        )}
      </Modal>

      <div
        className={`relative flex justify-center items-center h-full w-full bg-cover cursor-pointer hover:bg-[120% 120%] ${className}`}
        onMouseEnter={() => setIsMouseIn(true)}
        onMouseLeave={() => setIsMouseIn(false)}
        onClick={() => setIsModalOpen(true)}
        style={style}
      >
        <Image
          src={bgSrc || ""}
          alt={"imgAlt"}
          layout="fill"
          objectFit="cover"
          sizes="50vw"
        />

        <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0 hover:opacity-0"></div>

        <div
          className={`pointer-events-none z-10 bg-main-500 rounded-full flex justify-center items-center w-24 h-24 ${
            isMouseIn ? "scale-in scale-100" : "scale-out scale-0"
          }`}
        >
          <span className="blinking text-lg">👁️</span>
        </div>
      </div>
    </>
  );
};

export default PreviewCard;
