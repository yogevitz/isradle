export const COLORS = ["#3E65F0", "#4F7026", "#34232f", "#A00336", "#73513C"];
export const MAIL_TO = "mailto:yogevshlomovitz@gmail.com?subject=Isradle";
export const GITHUB_LINK = "https://github.com/yogevitz/isradle";
export const NUMBER_OF_GUESSES = 6;
export const API = `https://data.gov.il/api/3/action/datastore_search`;
export const CITY_INFO_RESOURCE_ID = "351d4347-8ee0-4906-8e5b-9533aef13595";

export const NAME = "שם יישוב";
export const POPULATION = "סך הכל אוכלוסייה 2019";
export const ESTABLISHED_YEAR = "שנת ייסוד";
export const COORDINATES = "קואורדינטות";
export const AVG_ELEVATION = "גובה ממוצע";

export type Direction = "N" | "E" | "S" | "W" | "NE" | "SE" | "SW" | "NW";
export type Cities = string[];
export type Coordinates = {
  x: number;
  y: number;
};
export type CityData = {
  name: string;
  population: number;
  establishedYear: number;
  avgElevation: number;
  coordinates: Coordinates;
};
