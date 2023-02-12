import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const addExpenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilter={addExpenseFilterHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
