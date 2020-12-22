import React from "react";
import styles from "./Footer.module.css";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Typography variant="subtitle2">
        Data Source:{" "}
        <Link href="https://corona.lmao.ninja/" target="_blank">
          Open Disease Data{" "}
        </Link>
        and{" "}
        <Link href="https://covid19.mathdro.id/api" target="_blank">
          Mathdro
        </Link>
      </Typography>
      <Typography variant="subtitle1" className={styles.madeBy}>
        Made by{" "}
        <Link
          href="https://themuhammadkhalid.github.io/"
          target="_blank"
          color="secondary"
          title="View Khalid's Work"
        >
          Muhammad Khalid
        </Link>
      </Typography>
    </footer>
  );
}
