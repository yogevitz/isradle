import React from "react";
import { Direction } from "../constants";
import { Emoji } from "./Emoji";

interface ArrowProps {
  direction: Direction;
}

export const Arrow = ({ direction }: ArrowProps) => {
  switch (direction) {
    case "N":
      return <Emoji symbol="⬆️️" label={direction} />;
    case "NE":
      return <Emoji symbol="↗️" label={direction} />;
    case "E":
      return <Emoji symbol="➡️️" label={direction} />;
    case "SE":
      return <Emoji symbol="↘️️" label={direction} />;
    case "S":
      return <Emoji symbol="⬇️️" label={direction} />;
    case "SW":
      return <Emoji symbol="↙️️" label={direction} />;
    case "W":
      return <Emoji symbol="⬅️️" label={direction} />;
    default:
      return <Emoji symbol="↖️️" label={direction} />;
  }
};
