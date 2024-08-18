"use client";
import { externalCreateTodo } from "@/actions/todo-actions";
import { useFormState } from "react-dom";
export default function ExternalTodoForm() {
  const [formState, formAction] = useFormState(externalCreateTodo, {});
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
      {formState.error && (
        <ul id="form-errors">
          <li>{formState.message}</li>
        </ul>
      )}
      <p>
        <button type="submit">Save Todo</button>
      </p>
    </form>
  );
}
