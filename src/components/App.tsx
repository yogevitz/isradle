import React, { useEffect, useState } from "react";
import { CityData, COLORS } from "../constants";
import { getCityData, getRandomNum, getTodaysAnswerCity } from "../utils";
import { About, Game, Footer } from ".";
import "./App.css";

const ANSWER_CITY = getTodaysAnswerCity();

export const App = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [color, setColor] = useState(COLORS[0]);
  const [answerCityData, setAnswerCityData] = useState<CityData>();

  useEffect(() => {
    const init = async () => {
      const newAnswerCityData = await getCityData(ANSWER_CITY);
      setAnswerCityData(newAnswerCityData);
    };
    init();
  }, []);

  const onCloseAbout = () => {
    setIsAboutOpen(false);
    const newColor = COLORS[getRandomNum(COLORS.length)];
    setColor(newColor);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div>
        <About isOpen={isAboutOpen} onClose={onCloseAbout} />
        <header className="App-header">
          {answerCityData ? (
            <div>
              Isradle
              <Game answer={answerCityData} />
              <Footer onClick={() => setIsAboutOpen(true)} />
            </div>
          ) : (
            "loading..."
          )}
        </header>
      </div>
    </div>
  );
};
