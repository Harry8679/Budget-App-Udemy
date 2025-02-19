import { useState } from "react";
import API from "../api";

const AddTransaction = ({ setTransactions }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = { desc, amount, type };
    
    try {
      const res = await API.post("/transactions", newTransaction);
      setTransactions(prev => [...prev, res.data]);
    } catch (err) {
      console.error("Erreur :", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input type="text" placeholder="Description" className="border p-2" value={desc} onChange={(e) => setDesc(e.target.value)} required />
      <input type="number" placeholder="Montant" className="border p-2" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Revenu</option>
        <option value="expense">Dépense</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Ajouter</button>
    </form>
  );
};

export default AddTransaction;