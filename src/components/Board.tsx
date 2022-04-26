import React, { useState } from "react";
import { Grid, Box } from "@material-ui/core";
import CITIES from "../assets/cities.json";
import { CityData, NUMBER_OF_GUESSES } from "../constants";
import { GuessRow } from "./GuessRow";
import { InputRow } from "./InputRow";
import { BoardHeader } from "./BoardHeader";
import { getCityData } from "../utils";
import { CorrectAnswerRow } from "./CorrectAnswerRow";
import { CityHint } from "./CityHint";
import { EmptyGuessRow } from "./EmptyGuessRow";

interface BoardProps {
  answer: CityData;
}

export const Board = ({ answer }: BoardProps) => {
  const [guesses, setGuesses] = useState<CityData[]>([]);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const emptyGuesses = new Array(
    NUMBER_OF_GUESSES - guesses.length - Number(isWinner)
  ).fill("");

  const handleGuess = async (guessCity: string) => {
    if (guessCity === answer.name) {
      setIsWinner(true);
    } else {
      const _ = guesses;
      const guessCityData = await getCityData(guessCity);
      _.push(guessCityData);
      setGuesses([..._]);
    }
  };

  return (
    <div>
      <CityHint />
      <Box sx={{ marginTop: "20px" }}>
        <Grid key="board-header" item xs={12}>
          <BoardHeader />
        </Grid>
      </Box>
      <Grid container spacing={1}>
        {guesses.map((_, i) => (
          <Grid key={`guess-row-${i}`} item xs={12}>
            <GuessRow key={i} city={_} answer={answer} />
          </Grid>
        ))}
        {isWinner && (
          <Grid key={`correct-answer-row`} item xs={12}>
            <CorrectAnswerRow answer={answer} />
          </Grid>
        )}
        {emptyGuesses.map((_, i) => (
          <Grid key={`empty-guess-row-wrapper-${i}`} item xs={12}>
            <EmptyGuessRow key={i} />
          </Grid>
        ))}
        <Grid key="input-row" item xs={12}>
          <InputRow cities={CITIES} onGuess={handleGuess} disabled={isWinner} />
        </Grid>
      </Grid>
    </div>
  );
};
