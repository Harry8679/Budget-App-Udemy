import { useEffect, useState } from "react";
import API from "../api";
import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";
import Chart from "../components/Chart";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    API.get("/transactions")
      .then(res => setTransactions(res.data))
      .catch(err => console.error("Erreur lors du chargement :", err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Gestionnaire de Budget 💰</h1>
      <AddTransaction setTransactions={setTransactions} />
      <Chart transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Dashboard;