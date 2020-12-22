import React, { useState } from "react";
import styles from "./Charts.module.css";

import { ButtonGroup, Button, CircularProgress } from "@material-ui/core/";

import ShowChartIcon from "@material-ui/icons/ShowChart";
import BarChartIcon from "@material-ui/icons/BarChart";
import PieChartIcon from "@material-ui/icons/PieChart";

import LineChart from "./LineChart.jsx";
import BarChart from "./BarChart.jsx";
import PieChart from "./PieChart.jsx";

export default function Charts({
  totalTimelineData,
  allCountriesData,
  country,
}) {
  const [currentChart, setCurrentChart] = useState("Line");

  return totalTimelineData.length ? (
    <div className={styles.container}>
      {currentChart === "Line" && (
        <LineChart
          lineChartData={
            country === "Global"
              ? totalTimelineData
              : getCurrentCountryTimelineData(allCountriesData, country)
          }
        />
      )}
      {currentChart === "Bar" && (
        <BarChart
          barCharttData={
            country === "Global"
              ? totalTimelineData
              : getCurrentCountryTimelineData(allCountriesData, country)
          }
        />
      )}
      {currentChart === "Pie" && (
        <PieChart
          pieCharttData={
            country === "Global"
              ? totalTimelineData
              : getCurrentCountryTimelineData(allCountriesData, country)
          }
        />
      )}

      <ButtonGroup size="small" className={styles.btnGroup}>
        <Button
          onClick={() => setCurrentChart("Line")}
          style={currentChart === "Line" ? { color: "green" } : null}
          title="Show Line Chart"
        >
          <ShowChartIcon />
        </Button>
        <Button
          onClick={() => setCurrentChart("Bar")}
          style={currentChart === "Bar" ? { color: "green" } : null}
          title="Show Bar Chart"
        >
          <BarChartIcon />
        </Button>
        <Button
          onClick={() => setCurrentChart("Pie")}
          style={currentChart === "Pie" ? { color: "green" } : null}
          title="Show Pie Chart"
        >
          <PieChartIcon />
        </Button>
      </ButtonGroup>
    </div>
  ) : (
    <CircularProgress />
  );
}

function getCurrentCountryTimelineData(allCountriesData, country) {
  let timeline = allCountriesData.filter(
    (value) => value.country === country
  )[0].timeline;

  let { cases, deaths } = timeline;

  let dateArr = Object.keys(cases);

  let newArr = dateArr.map((value) => {
    return {
      confirmed: cases[value],
      date: value,
      deaths: deaths[value],
    };
  });

  return newArr;
}
