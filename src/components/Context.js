import React from 'react'
import { createContext } from 'vm'

function transactionContext() {
       return createContext({
         state: { itemName: "", amountNum: "" },
         dispatch: () => {},
       });
}

export default transactionContext
