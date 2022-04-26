import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { CityData } from "../constants";
import { formatNum, getDirection, getDistance } from "../utils";
import { Emoji } from "./Emoji";

interface CorrectAnswerRowProps {
  answer: CityData;
}

export const CorrectAnswerRow = ({ answer }: CorrectAnswerRowProps) => {
  return (
    <Grid container spacing={1} justifyContent="space-between">
      {[1, 2].map((_, i) => (
        <Grid key={`correct-wrapper-${i}`} container item xs>
          <Box
            sx={{
              width: "100%",
              display: "inline-flex",
              border: "1px dashed grey",
            }}
          >
            <Grid
              key={`correct-child-${i}`}
              container
              item
              xs
              justifyContent="center"
            >
              <Typography variant="h6" gutterBottom component="div">
                <Emoji symbol="🎉" label="success" />
              </Typography>
            </Grid>
          </Box>
        </Grid>
      ))}
      <Grid key="e" container item xs>
        <Box
          sx={{
            width: "100%",
            display: "inline-flex",
            border: "1px dashed grey",
          }}
        >
          <Grid key="f" container item xs justifyContent="center">
            <Typography variant="h6" gutterBottom component="div">
              {answer.name}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
