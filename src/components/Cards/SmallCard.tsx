import Image from "next/image";

import Tilt from "../Wrappers/Tilt";
import { ICard } from "./cards.types";

const SmallCard = (props: ICard) => {
  const {
    imgSrc,
    title,
    description,
    className = "",
    soon,
    onClick: onClickProp,
  } = props;

  const onClick = () => {
    if (onClickProp) {
      onClickProp(props);
    }
  };

  return (
    <Tilt className={`rounded-xl ${className}`}>
      <div
        onClick={onClick}
        className={`relative bg-gray-500 flex rounded-xl shadow-lg flex-col items-center p-5 h-full ${
          onClickProp ? "cursor-pointer" : ""
        }`}
      >
        {soon && (
          <div className="absolute top-4 right-4 bg-soon-green rounded-2xl flex justify-center items-center px-10 py-1 text-sm">
            pronto
          </div>
        )}

        <div className="relative h-40 w-full mb-5">
          <Image
            src={imgSrc}
            alt={title}
            layout="fill"
            className="object-cover"
          />
        </div>

        <p
          className={`text-center font-bold my-5 ${
            description ? "text-xl" : "text-sm"
          }`}
        >
          {title}
        </p>

        {description && (
          <p className="text-center text-sm text-gray-300 font-light leading-5">
            {description}
          </p>
        )}
      </div>
    </Tilt>
  );
};

export default SmallCard;
