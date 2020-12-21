import React from "react";
import styles from "./Cards.module.css";

import CountUp from "react-countup";

import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import confirmedImage from "../../images/confirmed-cases.png";
import deathsImage from "../../images/deaths.png";
import recoveredImage from "../../images/recovered.png";

export default function Cards({
  totalData: { confirmed, deaths, recovered, lastUpdate },
  allCountriesData,
  country,
}) {
  if (confirmed === undefined && allCountriesData.length === 0) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.globalTitile}>
        {country} statistics
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card className={styles.confirmedCard}>
            <CardContent>
              <div className={styles.titleHeader}>
                <Typography
                  variant="h5"
                  display="inline"
                  className={styles.title}
                >
                  CONFIRMED CASES
                </Typography>
                <img
                  src={confirmedImage}
                  alt="confirmed cases icon"
                  className={styles.images}
                />
              </div>
              <Typography variant="h3" className={styles.numbers}>
                <CountUp
                  start={0}
                  end={
                    country === "Global"
                      ? confirmed.value
                      : getCurrentCountryData(allCountriesData, country)
                          .caseValue
                  }
                  duration={3}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card className={styles.deathsCard}>
            <CardContent>
              <div className={styles.titleHeader}>
                <Typography
                  variant="h5"
                  display="inline"
                  className={styles.title}
                >
                  DEATHS
                </Typography>
                <img
                  src={deathsImage}
                  alt="deaths icon"
                  className={styles.images}
                />
              </div>
              <Typography variant="h3" className={styles.numbers}>
                <CountUp
                  start={0}
                  end={
                    country === "Global"
                      ? deaths.value
                      : getCurrentCountryData(allCountriesData, country)
                          .deathValue
                  }
                  duration={3}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card className={styles.recoveredCard}>
            <CardContent>
              <div className={styles.titleHeader}>
                <Typography
                  variant="h5"
                  display="inline"
                  className={styles.title}
                >
                  RECOVERED
                </Typography>
                <img
                  src={recoveredImage}
                  alt="recovered icon"
                  className={styles.images}
                />
              </div>
              <Typography variant="h3" className={styles.numbers}>
                <CountUp
                  start={0}
                  end={
                    country === "Global"
                      ? recovered.value
                      : getCurrentCountryData(allCountriesData, country)
                          .recoverdValue
                  }
                  duration={3}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography component="p" className={styles.lastUpdate}>
        Last update:{" "}
        {new Date(
          country === "Global"
            ? lastUpdate
            : getCurrentCountryData(allCountriesData, country).lastUpdate
        ).toDateString()}
      </Typography>
    </div>
  );
}

function getCurrentCountryData(allCountriesData, country) {
  let timeline = allCountriesData.filter(
    (value) => value.country === country
  )[0].timeline;
  let { cases, deaths, recovered } = timeline;
  let caseValue = cases[Object.keys(cases)[Object.keys(cases).length - 1]];
  let deathValue = deaths[Object.keys(deaths)[Object.keys(deaths).length - 1]];
  let recoverdValue =
    recovered[Object.keys(recovered)[Object.keys(recovered).length - 1]];
  let lastUpdate = Object.keys(cases)[Object.keys(cases).length - 1];
  return { caseValue, deathValue, recoverdValue, lastUpdate };
}
