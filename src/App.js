import React from "react";
import styles from "./App.module.css";

import { Header, CountryPicker, Cards, Charts } from "./components";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <CountryPicker />
      <Cards />
      <Charts />
    </div>
  );
}

export default App;
