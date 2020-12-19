import React from "react";
import styles from "./CountryPicker.module.css";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default function CountryPicker() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.container}>
      <FormControl variant="outlined" fullWidth="true">
        <InputLabel id="country-picker-label">Select</InputLabel>
        <Select
          labelId="country-picker-label"
          id="select"
          value={age}
          onChange={handleChange}
          label="Select"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
