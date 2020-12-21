import React from "react";
import styles from "./CountryPicker.module.css";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default function CountryPicker({allCountriesData, handleCountryChange}) {


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
            <MenuItem value={value.country} key={index}>{value.country}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  ) : (
    "Loading..."
  );
}
