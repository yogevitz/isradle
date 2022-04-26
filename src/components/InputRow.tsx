import React, { useState } from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Cities } from "../constants";

interface InputRowProps {
  cities: Cities;
  onGuess: any;
  disabled: boolean;
}

export const InputRow = ({ cities, onGuess, disabled }: InputRowProps) => {
  const [value, setValue] = useState<string | null>(null);

  const onClick = () => {
    onGuess(value);
    setValue(null);
  };
  const onChange = (event: any, newValue: string | null) => {
    setValue(newValue);
  };

  return (
    <div dir="rtl" style={{ marginTop: "20px" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid key="input" item xs={9}>
          <Autocomplete
            value={value}
            onChange={onChange}
            options={cities}
            autoHighlight
            getOptionLabel={(option) => option}
            disabled={disabled}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="בחר ישוב..."
              />
            )}
          />
        </Grid>
        <Grid key="main-cta" item xs>
          <Button
            onClick={onClick}
            variant="contained"
            color="default"
            size="medium"
            disabled={value === null}
          >
            נחש
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
