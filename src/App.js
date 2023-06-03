
import { useState } from 'react';
import './App.css';
import ExpenseForm from './UI/Components/expenseForm';
import ExpenseList from './UI/Components/expenseList';

function App() {
  const [expenses,setExpenses] = useState([
    {
      title : "",
      amount: "",
      date : ""
}]);
  return (
    <div className="App">
        <ExpenseForm setExpenses={setExpenses} expenses={expenses}>
        {" "}
        </ExpenseForm>
        {
          expenses.map(
            (item,idx) => (
              <ExpenseList 
                key={idx}
                title = {item.title}
                amount = {item.amount}
                date = {item.date}
              />
            )
          )
        }
       
    </div>
  );
}

export default App;
