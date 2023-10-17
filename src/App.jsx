import "./App.css";
import { useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Confirm from "./components/Confirm/Confirm";

function App() {
  const [holder, setHolder] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <Card
        holder={holder}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />
      {!confirmed ? (
        <Form
          holder={holder}
          setHolder={setHolder}
          number={number}
          setNumber={setNumber}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cvc={cvc}
          setCvc={setCvc}
          setConfirmed={setConfirmed}
        />
      ) : (
        <Confirm setConfirmed={setConfirmed} />
      )}
    </>
  );
}

export default App;
