import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ActionType, store } from "./Redux";
import { useDispatch, useSelector } from "react-redux/es/exports";

export const Counter = () => {
  //   const [counter, setCounter] = useState(0);

  const [amount, setAmount] = useState(0);

  const counter = useSelector((store) => store.counter);

  const dispacth = useDispatch();

  const Increment = () => {
    // setCounter(counter + 1);
    dispacth({ type: ActionType.INCREMENT, amount: amount });
  };

  const Decrement = () => {
    // setCounter(counter - 1);
    dispacth({ type: ActionType.DECREMENT, amount: amount });
  };

  const Reset = () => {
    // setCounter(0);
    dispacth({ type: ActionType.RESET });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <Button variant="primary" onClick={Increment}>
        Increment
      </Button>
      <Button variant="secondary" onClick={Reset}>
        Reset
      </Button>
      <Button variant="primary" onClick={Decrement}>
        Decrement
      </Button>
      <input
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
};
