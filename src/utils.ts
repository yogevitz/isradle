import axios from "axios";
import { ANSWERS } from "./assets";
import {
  API,
  AVG_ELEVATION,
  CITY_INFO_RESOURCE_ID,
  COORDINATES,
  ESTABLISHED_YEAR,
  NAME,
  POPULATION,
  Coordinates,
  Direction,
} from "./constants";

export const getRandomNum = (max: number) => Math.floor(Math.random() * max);

export const getTodaysAnswerCity = () =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ANSWERS[new Date().toISOString().split("T")[0]];

export const getDirection = (a: Coordinates, b: Coordinates): Direction => {
  let ans =
    a.x > b.x && a.y > b.y
      ? "NE"
      : a.x > b.x && a.y < b.y
      ? "SE"
      : a.x < b.x && a.y > b.y
      ? "NW"
      : "SW";
  if (Math.abs(a.x - b.x) < 200 && Math.abs(a.y - b.y) < 200) {
    // too close, don't remove any letter
  } else if (Math.abs(a.x - b.x) < 200) {
    ans = ans.slice(0, 1);
  } else if (Math.abs(a.y - b.y) < 200) {
    ans = ans.slice(1);
  }
  return ans as Direction;
};

export const getDistance = (a: Coordinates, b: Coordinates) => {
  return Math.round(
    Math.sqrt(Math.abs(Math.pow(a.x - b.x, 2) - Math.pow(a.y - b.y, 2))) / 100
  );
};

export const formatNum = (num: number): string => {
  if (num > 999) {
    return `${Math.round(num / 1000)}k`;
  }
  return `${num}`;
};

export const getCityData = (city: string) =>
  axios.get(`${API}?resource_id=${CITY_INFO_RESOURCE_ID}&q=${city}`).then(
    ({
      data: {
        result: { records },
      },
    }) => {
      const data = records.find((_: any) => _[NAME] === city) || records[0];
      return {
        name: city,
        population: data[POPULATION],
        establishedYear: Number(data[ESTABLISHED_YEAR]),
        coordinates: {
          x: Number(("" + data[COORDINATES]).substring(0, 5)),
          y: Number(("" + data[COORDINATES]).substring(5, 10)),
        },
        avgElevation: data[AVG_ELEVATION],
      };
    }
  );
