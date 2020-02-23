import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBIcon,
  MDBBox
} from "mdbreact";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <MDBContainer style={{ padding: "20px 20%" }}>
      {console.log("render Transaction List")}
      <h4>History</h4>
      <MDBListGroup>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </MDBListGroup>
    </MDBContainer>
  );
};

export default TransactionList;
