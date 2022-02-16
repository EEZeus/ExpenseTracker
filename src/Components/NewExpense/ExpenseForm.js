import "./ExpenseForm.css";

import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCost, setEnteredCost] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const costChangeHandler = (event) => {
    setEnteredCost(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitClickHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: enteredTitle,
      cost: +enteredCost,
      date: new Date(enteredDate),
    };
    setEnteredTitle('');
    setEnteredCost('');
    setEnteredDate('');
    props.onExpenseFormSubmit(expenseData);
  };
  return (
    <form onSubmit={submitClickHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Cost</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredCost}
            onChange={costChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-3-27"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onStopEditing}>Cancel</button>
        <button type="submit">New Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
