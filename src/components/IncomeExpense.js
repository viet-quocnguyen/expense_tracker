import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  console.log(transactions);
  let income = 0;
  let expense = 0;
  amounts.forEach(amount => {
    if (amount > 0) {
      income += amount;
    } else {
      expense += amount;
    }
  });
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <div>Income</div>
          <span>${income.toFixed(2)}</span>
        </MDBCol>
        <MDBCol>
          <div>Expense</div>
          <span>-${Math.abs(expense.toFixed(2))}</span>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default IncomeExpense;
