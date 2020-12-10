import {  Actions, ContextProps } from './Types'

export const reducer = (state: ContextProps , action: Actions) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [
                 action.payload, 
                 ...state.transactions
                ]

                }
            
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction, id) => transaction.id !== action.payload.id )
            }
        default:
                return state;
    }
}