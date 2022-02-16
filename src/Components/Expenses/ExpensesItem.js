import "./ExpensesItem.css";

import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpensesItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate name={props.name} date={props.date} cost={props.cost} />
        <div className="expense-item__description">
          <h2>{props.name}</h2>
          <div className="expense-item__price">${props.cost}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpensesItem;
