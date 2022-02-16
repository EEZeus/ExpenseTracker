import "./NewExpense.css"

import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
  const expenseFormSubmitHandler = (newExpense) => {
    const expense = {
      ...newExpense,
      id: Math.random().toString()
    }
    props.onAddExpense(expense);
    stopIsEditing();
  }
  const [isEditing, setIsEditing] = useState(false);
  const startIsEditing = () => {
    setIsEditing(true);
  }
  const stopIsEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing&&<button onClick={startIsEditing}>Add New Expense</button>}
      {isEditing&&<ExpenseForm onExpenseFormSubmit={expenseFormSubmitHandler} onStopEditing={stopIsEditing} />}
    </div>
  );
}
export default NewExpense;