import "./App.css";
import React, { useEffect } from "react";
import { MDBContainer } from "mdbreact";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  useEffect(() => {
    console.log("Hello World");
  });

  return (
    <GlobalProvider>
      <MDBContainer className="text-center" style={{ margin: "10vh auto" }}>
        <Header />
        <Balance />
        {/* <GlobalProvider> */}
        <IncomeExpense />
        {/* </GlobalProvider> */}
        <TransactionList />
        <AddTransaction />
      </MDBContainer>
    </GlobalProvider>
  );
};

export default App;
