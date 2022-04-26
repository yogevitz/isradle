import React from "react";
import { CityData } from "../constants";
import { Board } from "./Board";

interface GameProps {
  answer: CityData;
}

export const Game = ({ answer }: GameProps) => (
  <div className="game">
    <Board answer={answer} />
  </div>
);
