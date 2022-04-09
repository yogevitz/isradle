import axios from "axios";
import { ANSWERS } from "./assets";
import {
  API,
  AVG_ELEVATION,
  CITIES_RESOURCE_ID,
  CITIES_LIMIT,
  CITY_INFO_RESOURCE_ID,
  COORDINATES,
  ESTABLISHED_YEAR,
  NAME,
  POPULATION,
} from "./constants";

export const getRandomNum = (max: number) => Math.floor(Math.random() * max);

export const getTodaysAnswerCity = () =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ANSWERS[new Date().toISOString().split("T")[0]];

export const getCityData = (city: string) =>
  axios.get(`${API}?resource_id=${CITY_INFO_RESOURCE_ID}&q=${city}`).then(
    ({
      data: {
        result: { records },
      },
    }) => {
      const data = records.find((_: any) => _[NAME] === city);
      return {
        name: data[NAME],
        population: data[POPULATION],
        establishedYear: Number(data[ESTABLISHED_YEAR]),
        coordinates: data[COORDINATES],
        avgElevation: data[AVG_ELEVATION],
      };
    }
  );

export const getCitiesList = () =>
  axios
    .get(`${API}?resource_id=${CITIES_RESOURCE_ID}&limit=${CITIES_LIMIT}`)
    .then(
      ({
        data: {
          result: { records },
        },
      }) => {
        return records
          .map((city: any) => city["שם_ישוב"].slice(0, -1))
          .filter((name: string) => !name.includes("("))
          .sort((a: string, b: string) => a.localeCompare(b));
      }
    );
