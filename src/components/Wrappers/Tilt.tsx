import { FC, useRef, MouseEvent } from "react";

import { innerDimensions } from "../../utils/elems";

export interface ITilt {
  className?: string;
  deg?: number;
  children?: React.ReactNode;
  shadowColor?: string;
}

const Tilt: FC<ITilt> = (props) => {
  const {
    children,
    className = "",
    deg = 15,
    shadowColor = "rgba(171,171,171,.6)",
  } = props;

  const divRef = useRef<HTMLDivElement>(null);
  const BOX_SHADOW = `30px -3px ${shadowColor}`;

  const onMouseOver = (e: MouseEvent<HTMLElement>) => {
    if (!divRef?.current) return;
    const card = divRef.current;

    const viewportOffset = card.getBoundingClientRect();
    const posWithinX = e.clientX - viewportOffset.x;
    const posWithinY = e.clientY - viewportOffset.y;

    const { height, width } = innerDimensions(card);
    const maxTiltParamX = width / 2;
    const maxTiltParamY = height / 2;

    const MAX_TILT_ANGLE = deg;

    const angleX =
      ((maxTiltParamY - posWithinY) * MAX_TILT_ANGLE) / maxTiltParamY;

    const angleY =
      ((posWithinX - maxTiltParamX) * MAX_TILT_ANGLE) / maxTiltParamX;

    const newRot = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    card.style.transform = newRot;
    card.style.boxShadow = `${-angleY}px ${angleX}px ${BOX_SHADOW}`;
  };

  const straighten = () => {
    if (!divRef?.current) return;
    const card = divRef.current;

    card.style.transform = `rotate3d(1, 1, 0, 0deg)`;
    card.style.boxShadow = `0px 0px 30px -3px ${shadowColor}`;
  };

  return (
    <div
      ref={divRef}
      onMouseOver={onMouseOver}
      onMouseLeave={straighten}
      style={{
        boxShadow: `0px 0px ${BOX_SHADOW}`,
      }}
      className={`transition-all overflow-hidden bg-transparent ${className}`}
    >
      {children}
    </div>
  );
};

export default Tilt;
