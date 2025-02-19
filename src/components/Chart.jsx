import { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ transactions }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [transactions]);

  const income = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + Number(t.amount), 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + Number(t.amount), 0);

  return (
    <Bar
      ref={chartRef}
      data={{
        labels: ["Revenus", "Dépenses"],
        datasets: [{ data: [income, expense], backgroundColor: ["#4CAF50", "#F44336"] }],
      }}
    />
  );
};

export default Chart;