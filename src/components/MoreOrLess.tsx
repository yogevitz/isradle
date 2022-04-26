import React from "react";
import { Emoji } from "./Emoji";

interface MoreOrLessProps {
  type: "more" | "less";
}

export const MoreOrLess = ({ type }: MoreOrLessProps) => {
  switch (type) {
    case "more":
      return <Emoji symbol="👆" label={type} />;
    default:
      return <Emoji symbol="👇" label={type} />;
  }
};
