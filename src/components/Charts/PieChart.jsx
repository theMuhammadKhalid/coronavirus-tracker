import { Pie } from "react-chartjs-2";

export default function PieChart({ pieCharttData }) {
  let totalConfirmed = pieCharttData
    .map(({ confirmed }) => confirmed)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  let totalDeaths = pieCharttData
    .map(({ deaths }) => deaths)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return (
    <Pie
      data={{
        labels: ["Confirmed", "Deaths"],
        datasets: [
          {
            data: [totalConfirmed, totalDeaths],
            backgroundColor: ["#3098F2", "#D93B3B"],
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: "Pie Chart (Last 30 days)",
          fontSize: 20,
        },
        maintainAspectRatio: false,
      }}
    />
  );
}
