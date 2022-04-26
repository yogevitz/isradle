import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import LocationOn from "@material-ui/icons/LocationOn";
import LocationCity from "@material-ui/icons/LocationCity";

export const BoardHeader = () => (
  <Typography variant="h5" gutterBottom component="div">
    <Grid container justifyContent="space-between">
      <Grid item xs>
        <PeopleAlt />
      </Grid>
      <Grid item xs>
        <LocationOn />
      </Grid>
      <Grid item xs>
        <LocationCity />
      </Grid>
    </Grid>
  </Typography>
);
