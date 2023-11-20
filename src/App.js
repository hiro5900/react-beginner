import React, { useState } from 'react';
// import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', LocationOfExpenditure: 'Banri', amount: 294.67, date: new Date(2023, 6, 13) },
  { id: 'e2', title: 'Fuel Refill', LocationOfExpenditure: 'Fuel Station Near Wall Mart, Banri', amount: 1.67, date: new Date(2023, 10, 8) },
  { id: 'e3', title: 'Food', LocationOfExpenditure: 'Wall Mart Food Court, Banri', amount: 4.67, date: new Date(2023, 10, 1) },
  { id: 'e4', title: 'Mobile Bill', LocationOfExpenditure: 'Home', amount: 2, date: new Date(2023, 10, 11) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // const expenseItems = [];
  // for (let i = 0; i < expenses.length; i++) {
  //   expenseItems.push(
  //     <ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date} LocationOfExpenditure={expenses[i].LocationOfExpenditure} />
  //   );
  // };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
