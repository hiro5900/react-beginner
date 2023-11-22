import React, { useState } from 'react';
import './ExpenseItem.css';


const ExpenseDetails = (props) => {
     const [amount, setAmount] = useState(props.amount);
     const LocationOfExpenditure = props.LocationOfExpenditure;
     const [title, setTitle] = useState(props.title);

     return (
          <div className='expense-item__description'>
               <h2>{title}</h2>
               <p>{LocationOfExpenditure}</p>
               <div className='expense-item__price'>${amount}</div>
          </div>
     );
}

export default ExpenseDetails;