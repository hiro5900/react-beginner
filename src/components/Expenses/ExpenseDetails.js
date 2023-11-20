import React, { useState } from 'react';
import './ExpenseItem.css';


const ExpenseDetails = (props) => {
     const [amount, setAmount] = useState(props.amount);
     const LocationOfExpenditure = props.LocationOfExpenditure;
     const [title, setTitle] = useState(props.title);
     // const clickHandler = () => {
     //      setTitle('Updated');
     //      console.log(title);
     // };
     // const changeAmount = () => {
     //      setAmount(100);
     // }

     return (
          <div className='expense-item__description'>
               <h2>{title}</h2>
               <p>{LocationOfExpenditure}</p>
               <div className='expense-item__price'>${amount}</div>
               {/* <button onClick={clickHandler}>Change title</button> */}
               {/* <button onClick={changeAmount}>Change amount</button> */}
          </div>
     );
}

export default ExpenseDetails;