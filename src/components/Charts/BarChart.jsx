import { Bar } from "react-chartjs-2";

export default function BarChart({ barCharttData }) {
  return (
    <Bar
      data={{
        labels: barCharttData.map(({ date }) => date),
        datasets: [
          {
            data: barCharttData.map(({ confirmed }) => confirmed),
            label: "Confirmed",
            backgroundColor: "#3098F2",
          },
          {
            data: barCharttData.map(({ deaths }) => deaths),
            label: "Deaths",
            backgroundColor: "#D93B3B",
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: "Bar Chart",
          fontSize: 20,
        },
        maintainAspectRatio: false,
      }}
    />
  );
}
