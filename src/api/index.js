export async function fetchTotalData() {
  try {
    const { confirmed, deaths, recovered, lastUpdate } = await (
      await fetch("https://covid19.mathdro.id/api")
    ).json();

    return { confirmed, deaths, recovered, lastUpdate };
  } catch (err) {
    console.error(err);
  }
}

export async function fetchTotalTimelineData() {
  try {
    const resp = await (
      await fetch("https://covid19.mathdro.id/api/daily")
    ).json();

    const modifiedData = resp.map((value) => ({
      confirmed: value.confirmed.total,
      deaths: value.deaths.total,
      date: value.reportDate,
    }));

    return modifiedData;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchAllCountriesData() {
  try {
    const resp = await (
      await fetch("https://corona.lmao.ninja/v2/historical?lastdays=30")
    ).json();

    // remove duplicate country values
    let modifiedData = resp.filter(
      (value, index, selfResp) =>
        index ===
        selfResp.findIndex((selfValue) => selfValue.country === value.country)
    );

    return modifiedData;
  } catch (err) {
    console.error(err);
  }
}
