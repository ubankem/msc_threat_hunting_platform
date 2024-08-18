"use client";
import { createTodo } from "@/actions/todo-actions";
import { useFormState } from "react-dom";
import { FaPray } from "react-icons/fa";
import { Toaster } from "sonner";
export default function TodoForm() {
  const [formState, formAction] = useFormState(createTodo, {});
  return (
    <form id="todo-form" action={formAction}>
      <p>
        <label htmlFor="title">Todo</label>
        <input type="text" name="title" id="title" />
      </p>
      <p>
        <label htmlFor="dot">Date of Execution</label>
        <input type="date" name="dot" id="dot" />
      </p>
      {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
      {formState.success && <p>{formState.message}</p>}
      <p>
        <button type="submit">Save Todo</button>
      </p>
    </form>
  );
}
