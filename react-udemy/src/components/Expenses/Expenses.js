import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
};

// or

// const Expenses = ({expenses}) => {
//     return(
//         <div className="expenses">
//             {
//                 expenses.map((item, index) =>(
//                    <ExpenseItem
//                    key={index}
//                    title={item.title}
//                    amount={item.amount}
//                    date={item.date}
//                  />
//                 ) )
//             }
//         </div>

//     );
// }

export default Expenses;