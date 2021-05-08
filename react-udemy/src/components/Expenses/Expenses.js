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

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p style={{ color: "white" }}>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {expenseContent}
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
