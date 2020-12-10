export type transactionsType= {
      id: number,
      itemName: String,
      amountNum: number,
    }
  
export type ContextProps = {
   transactions: transactionsType[],
  }

  export type Actions =
  | {
      type: "ADD_TRANSACTION";
      payload: { id: number ; amountNum: number; itemName: string }
  }
  | {
      type: "DELETE_TRANSACTION";
      payload: { id: number }
  }


//  export type ActionMap<M extends { [index: string]: any }> = {
//     [Key in keyof M]: M[Key] extends undefined
//       ? {
//           type: Key;
//         }
//       : {
//           type: Key;
//           payload: M[Key];
//         }
//   };


// export enum ActionType {
//     ADD_TRANSACTION = "ADD_TRANSACTION",
//     DEL_TRANSACTION = "DEL_TRANSACTION"
 // }
//     export interface IReducer {
//     type: ActionType;
//     count: number;
//   }
  
//   export interface ICounter {
//     result: number;
//   }

  // export enum Types {
  //   Add = 'ADD_TRANSACTION',
  //   Delete = 'DELETE_TRANSACTION',
  // }

//   export type TransactionPayload = {
//       [Types.Add] : [
//         transactions: {
//             id: number,
//             itemName: String,
//             amountNum: number,
//           }
//         ];
//       [Types.Delete] : [
//         transactions: {
//             id: number,
//         itemName: String,
//         amountNum: number,
//       }
//     ]
// }
  
  // export type ReducerActions = ActionMap<TransactionPayload>[keyof ActionMap<TransactionPayload>];

  