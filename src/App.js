import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { Header, CountryPicker, Cards, Charts, Footer } from "./components";

import {
  fetchTotalData,
  fetchTotalTimelineData,
  fetchAllCountriesData,
} from "./api";

function App() {
  const [totalData, setTotalData] = useState({});
  const [totalTimelineData, setTotalTimelineData] = useState([]);
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [country, setCountry] = React.useState("Global");

  useEffect(() => {
    const fetchAllData = async () => {
      setTotalData(await fetchTotalData());
      setTotalTimelineData(await fetchTotalTimelineData());
      setAllCountriesData(await fetchAllCountriesData());
    };

    fetchAllData();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <CountryPicker
        allCountriesData={allCountriesData}
        handleCountryChange={(getCountry) => {
          setCountry(getCountry);
        }}
      />
      <Cards
        totalData={totalData}
        allCountriesData={allCountriesData}
        country={country}
      />
      <Charts
        totalTimelineData={totalTimelineData}
        allCountriesData={allCountriesData}
        country={country}
      />
      <Footer />
    </div>
  );
}

export default App;
