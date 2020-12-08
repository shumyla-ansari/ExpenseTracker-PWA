import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className='App'>
      <h1>Expense Tracker</h1>
      <Balance />
      <h2>graph</h2>
    <TransactionList />
    <AddTransaction />
    </div>
  )
}

export default App;
