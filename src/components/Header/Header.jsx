import React from "react";
import styles from "./Header.module.css";

import Typography from "@material-ui/core/Typography";
import CoronavirusLogo from "./CoronavirusLogo.jsx";

export default function Header() {
  return (
    <div className={styles.container}>
      <Typography variant="h1" align="center" className={styles.title}>
        C<CoronavirusLogo className={styles.coronavirusLogo} />
        VID-19 TRACKER
      </Typography>
    </div>
  );
}
