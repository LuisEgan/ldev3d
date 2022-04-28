import { useState } from "react";
import SVG from "../SVG";
import { IToolIcon } from "../_Pages/Me/constants";

interface IIconsCard {
  icons: IToolIcon[];
  className?: string;
  mainIcon?: string;
  title?: string;
}

const IconsCard = (props: IIconsCard) => {
  const { icons, className = "", mainIcon, title } = props;

  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const [tooltip, setTooltip] = useState<string>("");

  const onIconClick = (url: string) => {
    window.open(url, "_blank").focus();
  };

  return (
    <div
      className={`flex flex-col items-center p-5 bg-gray-800 min-w-60 border-[.1rem] ${
        isMouseIn ? "border-main-500" : "border-gray-700"
      } ${className}`}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
    >
      <SVG
        src={`svg/${mainIcon}.svg`}
        size={50}
        style={{ opacity: isMouseIn ? 1 : 0.2 }}
        stroke={isMouseIn ? "#e68a00" : "white"}
      />

      <span
        className={`text-center text-xl my-5 ${
          isMouseIn ? "text-main-500" : "text-white"
        }`}
      >
        {title}
      </span>

      <div className="grid grid-cols-3 gap-3 my-5 justify-center items-center">
        {icons.map((icon) => (
          <div className="relative w-full" key={icon.name}>
            {tooltip === icon.name && (
              <div className="absolute pointer-events-none -top-10 z-10 left-1/2 -translate-x-1/2 fade-in">
                <div className="rounded-lg bg-gray-900 text-center p-1 text-gray-400 text-sm">
                  {icon.name}
                </div>
              </div>
            )}
            <img
              key={icon.icon}
              src={`png/${icon.icon}.png`}
              alt={icon.name}
              className="w-7 mr-2 cursor-pointer hover:scale-125"
              onClick={() => onIconClick(icon.url)}
              onMouseEnter={() => setTooltip(icon.name)}
              onMouseLeave={() => setTooltip("")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsCard;
