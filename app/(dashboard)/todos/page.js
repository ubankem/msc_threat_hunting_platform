import TodoList from "@/components/todo-list";
import { getTodos } from "@/lib/todo";

export default async function ViewTodo() {
  const todos = await getTodos();
  return <TodoList todos={todos} />;
}
