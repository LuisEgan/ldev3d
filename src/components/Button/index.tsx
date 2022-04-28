import { FC, useRef, MouseEvent } from "react";

interface IButton {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
}

const Button: FC<IButton> = (props) => {
  const {
    children,
    onClick: onClickProp,
    className = "",
    variant = "primary",
  } = props;

  const buttonRef = useRef<HTMLDivElement>(null);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    // * Add the ripple effect
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const viewportOffset = button.getBoundingClientRect();

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - viewportOffset.left - radius}px`;
    circle.style.top = `${e.clientY - viewportOffset.top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    if (onClickProp) onClickProp();
  };

  return (
    <div
      ref={buttonRef}
      onClick={onClick}
      className={`relative select-none overflow-hidden px-10 py-5 flex justify-center items-center cursor-pointer text-white rounded-lg ${
        variant === "primary"
          ? "bg-main-500"
          : "bg-transparent border-2 border-main-500"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
