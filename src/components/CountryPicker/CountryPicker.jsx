import React from "react";
import styles from "./CountryPicker.module.css";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
} from "@material-ui/core/";

export default function CountryPicker({
  allCountriesData,
  handleCountryChange,
}) {
  return allCountriesData.length ? (
    <div className={styles.container}>
      <FormControl variant="outlined" className={styles.formControl}>
        <InputLabel id="country-picker-label">Select</InputLabel>
        <Select
          labelId="country-picker-label"
          id="select"
          defaultValue="Global"
          onChange={(event) => handleCountryChange(event.target.value)}
          label="Select"
        >
          <MenuItem value="Global">Global</MenuItem>
          {allCountriesData.map((value, index) => (
            <MenuItem value={value.country} key={index}>
              {value.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  ) : (
    <CircularProgress />
  );
}
