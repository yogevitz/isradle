import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { CityData } from "../constants";
import { formatNum, getDirection, getDistance } from "../utils";
import { Arrow } from "./Arrow";
import { MoreOrLess } from "./MoreOrLess";

interface GuessRowProps {
  city: CityData;
  answer: CityData;
}

export const GuessRow = ({ city, answer }: GuessRowProps) => {
  const direction = getDirection(answer.coordinates, city.coordinates);
  const distance = getDistance(answer.coordinates, city.coordinates);
  const populationDelta = city.population - answer.population;
  const populationIsGreater = populationDelta > 0 ? "less" : "more";

  return (
    <Grid container spacing={1} justifyContent="space-between">
      <Grid container item xs>
        <Box
          sx={{
            width: "100%",
            display: "inline-flex",
            border: "1px dashed grey",
          }}
        >
          <Grid container spacing={1} justifyContent="center">
            <Grid key="b" item>
              <Typography variant="h6" gutterBottom component="div">
                {formatNum(Math.abs(populationDelta))}
              </Typography>
            </Grid>
            <Grid key="a" item>
              <Typography variant="h6" gutterBottom component="div">
                <MoreOrLess type={populationIsGreater} />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid container item xs>
        <Box
          sx={{
            width: "100%",
            display: "inline-flex",
            border: "1px dashed grey",
          }}
        >
          <Grid container spacing={1} justifyContent="center">
            <Grid key="c" item>
              <Typography variant="h6" gutterBottom component="div">
                <div dir="rtl">{distance} ק״מ</div>
              </Typography>
            </Grid>
            <Grid key="d" item>
              <Typography variant="h6" gutterBottom component="div">
                <Arrow direction={direction} />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid key="e" container item xs>
        <Box
          sx={{
            width: "100%",
            display: "inline-flex",
            border: "1px dashed grey",
          }}
        >
          <Grid
            key="f"
            container
            item
            xs
            // direction="column"
            // spacing={1}
            justifyContent="center"
          >
            <Typography variant="h6" gutterBottom component="div">
              {city.name}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
