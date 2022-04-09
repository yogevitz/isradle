import React, { useEffect, useState } from "react";
import { Cities, CityData, COLORS } from "../constants";
import {
  getCitiesList,
  getCityData,
  getRandomNum,
  getTodaysAnswerCity,
} from "../utils";
import { About, Game, Footer } from ".";
import "./App.css";

const ANSWER_CITY = getTodaysAnswerCity();

export const App = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [color, setColor] = useState(COLORS[0]);

  const [answerCityData, setAnswerCityData] = useState<CityData>();
  const [cities, setCities] = useState<Cities>();

  useEffect(() => {
    const init = async () => {
      const [newAnswerCityData, newCities] = await Promise.all([
        getCityData(ANSWER_CITY),
        getCitiesList(),
      ]);
      setAnswerCityData(newAnswerCityData);
      setCities(newCities);
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
          {answerCityData && cities ? (
            <div>
              Isradle
              <Game answer={answerCityData} cities={cities} />
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
