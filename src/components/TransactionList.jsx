const TransactionList = ({ transactions }) => {
  return (
    <div className="mt-4">
      {transactions.map((t, index) => (
        <div key={index} className={`p-2 border my-1 ${t.type === "expense" ? "bg-red-200" : "bg-green-200"}`}>
          <span>{t.desc} - {t.amount}€ ({t.type})</span>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;