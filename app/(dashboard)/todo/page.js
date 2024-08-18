import TodoForm from "@/components/todo-form";

export default function Page() {
  return (
    <div className="orders-container">
      <h2>Cyber Threats Monitoring</h2>
      <div className="orders-buttons">
        <button className="orders-button active">SECURE CLIENT (0)</button>
        <button className="orders-button">DETECTED THREATS (0)</button>
      </div>
      <div className="orders-empty">
        <TodoForm />
      </div>
    </div>
  );
}
