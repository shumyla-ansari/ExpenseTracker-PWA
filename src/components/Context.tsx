import React, { useReducer, createContext, Dispatch } from 'react'
import { ContextProps, Actions } from './Types'
import { reducer } from './Reducer'

const initialState = {
  transactions: [
    { id: 1, itemName: "computer", amountNum: -600, },
    { id: 2, itemName: "computer", amountNum: -600, },
    { id: 3, itemName: "computer", amountNum: -600, },
    { id: 4, itemName: "computer", amountNum: -600, },
  ]
}

export const TransactionContext = createContext<{
  state: ContextProps | [];
  dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });


export const GlobalStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<ContextProps, Actions>>(reducer, initialState);

  function deleteTransaction(id: { id: number }) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction: { id: number; amountNum: number; itemName: string }) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <TransactionContext.Provider value={{
      state,
      dispatch,
      ...addTransaction,
      ...deleteTransaction
    }}>
      {children}
    </TransactionContext.Provider>

  );
}
