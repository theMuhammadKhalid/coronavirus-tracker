import { Line } from "react-chartjs-2";

export default function LineChart({ lineChartData }) {
  return (
    <Line
      data={{
        labels: lineChartData.map(({ date }) => date),
        datasets: [
          {
            data: lineChartData.map(({ confirmed }) => confirmed),
            label: "Confirmed",
            borderColor: "#3098F2",
            pointBackgroundColor: "#3098F2",
            pointRadius: 1,
            fill: false,
          },
          {
            data: lineChartData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#D93B3B",
            pointBackgroundColor: "#D93B3B",
            pointRadius: 1,
            fill: false,
          },
        ],
      }}
    />
  );
}
