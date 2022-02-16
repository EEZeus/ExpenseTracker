import React, {useState}from 'react'

import ExpenseList from "./Components/Expenses/ExpenseList";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    name: "car insurace",
    date: new Date(2021, 2, 25),
    cost: 295.45,
  },
  {
    id: "e2",
    name: "clothes",
    date: new Date(2021, 3, 24),
    cost: 225.5,
  },
  {
    id: "e3",

    name: "home rent",
    date: new Date(2021, 5, 5),
    cost: 350,
  },
  {
    id: "e4",

    name: "netflix fee",
    date: new Date(2021, 2, 10),
    cost: 250.99,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(expenseList => {
      return [expense, ...expenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
