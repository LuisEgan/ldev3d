import Image from "next/image";

import Tilt from "../Wrappers/Tilt";
import { ICard } from "./cards.types";

export interface IFullCard extends ICard {
  tags?: string[];
  date?: string;
  readingTime?: string;
}

const Card = (props: IFullCard) => {
  const {
    imgSrc,
    title,
    className = "",
    description,
    tags,
    date,
    readingTime,
    onClick: onClickProp,
  } = props;

  const onClick = () => {
    if (onClickProp) {
      onClickProp(props);
    }
  };

  return (
    <Tilt className="rounded-xl">
      <div
        onClick={onClick}
        className={`flex flex-col rounded-xl bg-white p-2 h-full ${
          onClickProp ? "cursor-pointer" : ""
        } ${className}`}
      >
        <div className="relative h-36 w-full mb-5 rounded-t-md overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            layout="fill"
            className="object-cover"
          />
        </div>

        <div className="mb-6 flex-wrap flex text-xs text-primary-300">
          {tags?.map((t) => (
            <span key={`${Math.random()}_${t}`} className="">
              #{t}&nbsp;
            </span>
          ))}
        </div>

        <div className="text-xl mb-5 flex-1">{title}</div>

        <div className="text-gray-300 text-sm mb-5 flex-1">{description}</div>
      </div>
    </Tilt>
  );
};

export default Card;
