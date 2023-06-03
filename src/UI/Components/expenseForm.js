import { useState } from "react";
import "../CSS/expenseForm.css";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title: title,
      amount: amount,
      date: date,
    };
    console.log(expense);
    props.setExpenses([...props.expenses,expense])
    setTitle("");
    setAmount("");
    setDate("");
    
  };

  return (
    <div>
      <form>
        <div className="card">
          <div className="title">
            <label>Title</label>
            <div className="titlename">
              <input type="text" onChange={titleHandler} value={title} />
            </div>
          </div>
          <div className="amount">
            <label>Amount</label>
            <div className="amountname">
              <input type="number" onChange={amountHandler} value={amount} />
            </div>
          </div>
          <div className="date">
            <label>Date</label>
            <div className="datename">
              <input type="date" onChange={dateHandler} value={date} />
            </div>
          </div>
          <div className="submit">
            <button className="submitname" onClick={submitHandler}>
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
