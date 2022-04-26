import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { CityData } from "../constants";
import { formatNum, getDirection, getDistance } from "../utils";
import { Arrow } from "./Arrow";
import { MoreOrLess } from "./MoreOrLess";

export const EmptyGuessRow = () => (
  <Grid container spacing={1} justifyContent="space-between">
    {[1, 2, 3].map((_, i) => (
      <Grid key={`empty-guess-row-${i}`} container item xs>
        <Box
          sx={{
            width: "100%",
            height: "39px",
            display: "inline-flex",
            border: "1px dashed grey",
          }}
        />
      </Grid>
    ))}
  </Grid>
);
