import './ExpenseItem.css'

function ExpenseDetails(props) {
     const amount = props.amount;
     const title = props.title;
     const LocationOfExpenditure = props.LocationOfExpenditure;
     console.log(props.LocationOfExpenditure)

     return (
          <div className='expense-item__description'>
               <h2>{title}</h2>
               <p>{LocationOfExpenditure}</p>
               <div className='expense-item__price'>${amount}</div>
          </div>
     );
}

export default ExpenseDetails;