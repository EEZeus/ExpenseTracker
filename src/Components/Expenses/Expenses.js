import './Expenses.css'

import ExpensesItem from './ExpensesItem'
import React from 'react'

function Expenses(props) {
  
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No Expenses Found !</h2>;
  else
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpensesItem
            key={expense.id}
            name={expense.name}
            date={expense.date}
            cost={expense.cost}
          />
        ))}
      </ul>
    );
}

export default Expenses;