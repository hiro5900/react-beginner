import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
     return (
          <Card className='expense-item'>
               <ExpenseDate date={props.date} />
               <ExpenseDetails
                    title={props.title}
                    amount={props.amount}
                    LocationOfExpenditure={props.LocationOfExpenditure}
               />
          </Card>
     );
}

export default ExpenseItem;