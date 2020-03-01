import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MDBInput, MDBBtn } from "mdbreact";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { transactions, addTransaction } = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();
    let id = transactions.length
      ? Math.floor(transactions[transactions.length - 1].id + 1)
      : 1;

    const newTransaction = { id: id, text, amount: parseFloat(amount) };

    addTransaction(newTransaction);
  }

  return (
    <div style={{ padding: "20px 20%" }}>
      <h4>Add New Transaction</h4>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <MDBInput
            value={text}
            onChange={e => setText(e.target.value)}
            label="Description"
          />
        </div>
        <div className="form-group">
          <MDBInput
            value={amount}
            onChange={e => setAmount(e.target.value)}
            hint="Positive - Income, Negative - Expense"
            type="number"
            label="Number"
          />
        </div>
        <MDBBtn type="submit" color="secondary" size="sm">
          Add transaction
        </MDBBtn>
      </form>
    </div>
  );
};

export default AddTransaction;
