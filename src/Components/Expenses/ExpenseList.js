import "./ExpenseList.css";

import React, {useState} from 'react'

import Card from "../UI/Card";
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "../NewExpense/ExpenseForm";
import Expenses from './Expenses';

function ExpenseList(props) {
  const [selected, setSelected] = useState('2020');

  const changeFilter = (selectedYear) => {
    setSelected(selectedYear)
    console.log(selectedYear);
  }
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selected;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selected} onChangeFilter={changeFilter} />
        <ExpenseChart expenses={filteredExpenses} />
        <Expenses items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default ExpenseList;
