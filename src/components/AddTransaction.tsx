import React from 'react'


function AddTransaction() {
    return (
        <div>
            <form onSubmit={(e)=>(e.preventDefault())}>
                <input onChange={(e)=> console.log(e.target.value)} type="text" value="" name="text" placeholder="Please enter description"/>
                    <input type="number" value="" name="number" placeholder="Please enter value"/>
              <button onClick={()=>(console.log("I am clicked"))}>Add</button>   
            </form>
            <h5>Please enter positive value for income and negative value for expense</h5>
           
        </div>
    )
}

export default AddTransaction
