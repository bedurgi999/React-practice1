import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    onAddExpense(enteredExpenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing((cur) => !cur);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={startEditingHandler}
        />
      ) : (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
}

export default NewExpense;
