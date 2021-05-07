import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const buttonClicked = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={buttonClicked}>Button</button>
      {/* not using () in function name, because then the function will be called
      and evaluated when the jsx is returned to the DOM instead on when
      button is clicked on the page */}
    </Card>
  );
};

export default ExpenseItem;
