import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className='App box'>
      <h2>Expense Tracker</h2>
      <Balance />
      <h3>graph</h3>
    <TransactionList />
    <AddTransaction />
    </div>
  )
}

export default App;
