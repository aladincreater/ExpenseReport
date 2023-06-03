import '../CSS/expenseList.css'
const ExpenseList = (props) =>{
    return(
        <div className="cardList">
            {props.title}
            {props.amount}
            {props.date}
        </div>
    );
}

export default ExpenseList;