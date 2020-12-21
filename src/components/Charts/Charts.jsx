import React from "react";
import styles from "./Charts.module.css";

import LineChart from "./LineChart.jsx";

export default function Charts({ totalTimelineData }) {
  return totalTimelineData.length ? (
    <div className={styles.container}>
      <LineChart lineChartData={totalTimelineData} />
    </div>
  ) : (
    "Loading..."
  );
}
