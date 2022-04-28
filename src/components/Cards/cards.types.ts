import { ReactNode } from "react";

export interface ICard {
  imgSrc: string;
  title: string;
  description?: string | ReactNode;
  className?: string;
  soon?: boolean;
  onClick?: (card: ICard) => void;
}
