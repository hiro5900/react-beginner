import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
     // const [titleChange, setTitleChange] = useState(props.title);
     // const clickHandler = () => {
     //      setTitleChange('Updated')
     //      console.log(titleChange);
     // };

     const deleteBtn = (event) => {
          event.target.parentElement.remove();
     };
     return (
          <Card className='expense-item'>
               <ExpenseDate date={props.date} />
               <ExpenseDetails
                    title={props.title}
                    amount={props.amount}
                    LocationOfExpenditure={props.LocationOfExpenditure}
               />
               {/* <button onClick={clickHandler}>Change title</button> */}
               <button onClick={deleteBtn}>Delete</button>
          </Card>
     );
}

export default ExpenseItem;