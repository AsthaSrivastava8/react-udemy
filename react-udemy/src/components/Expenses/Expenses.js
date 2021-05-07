import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {props.expenses
          .filter(
            (expense) => expense.date.getFullYear().toString() === filteredYear
          )
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
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
