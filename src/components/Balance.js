import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0);
  const sign = total > 0 ? "" : "-";

  return (
    <div>
      {console.log("render Balance")}
      <h4>Your Blance</h4>
      <h1>
        {sign}${Math.abs(total)}
      </h1>
    </div>
  );
};

export default Balance;
