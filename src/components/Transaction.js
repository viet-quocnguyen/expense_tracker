import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MDBListGroupItem, MDBBox, MDBIcon } from "mdbreact";
const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <MDBListGroupItem className="d-flex justify-content-between align-items-center">
      {transaction.text}
      <MDBBox>
        <MDBBox
          color={`${sign === "+" ? "teal" : "red"}`}
          style={{ marginRight: "10px" }}
          tag="span"
        >
          {sign}${Math.abs(transaction.amount)}
        </MDBBox>

        <MDBIcon
          style={{ cursor: "pointer" }}
          onClick={() => deleteTransaction(transaction.id)}
          icon="trash-alt"
        />
      </MDBBox>
    </MDBListGroupItem>
  );
};

export default Transaction;
