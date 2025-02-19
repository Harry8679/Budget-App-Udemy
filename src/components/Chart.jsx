import { Bar } from "react-chartjs-2";

const Chart = ({ transactions }) => {
  const income = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + Number(t.amount), 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + Number(t.amount), 0);

  return (
    <Bar
      data={{
        labels: ["Revenus", "Dépenses"],
        datasets: [{ data: [income, expense], backgroundColor: ["#4CAF50", "#F44336"] }],
      }}
    />
  );
};

export default Chart;