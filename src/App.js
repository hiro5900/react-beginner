import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', LocationOfExpenditure: 'Banri', amount: 294.67, date: new Date(2023, 6, 13) },
    { id: 'e2', title: 'Fuel Refill', LocationOfExpenditure: 'Fuel Station Near Wall Mart, Banri', amount: 1.67, date: new Date(2023, 10, 8) },
    { id: 'e3', title: 'Food', LocationOfExpenditure: 'Wall Mart Food Court, Banri', amount: 4.67, date: new Date(2023, 10, 1) },
    { id: 'e4', title: 'Mobile Bill', LocationOfExpenditure: 'Home', amount: 2, date: new Date(2023, 10, 11) },
  ];

  const expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    expenseItems.push(
      <ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date} LocationOfExpenditure={expenses[i].LocationOfExpenditure} />
    );
  };

  return (
    <div>
      <header>
        {expenseItems}
      </header>
    </div>
  );
}

export default App;
