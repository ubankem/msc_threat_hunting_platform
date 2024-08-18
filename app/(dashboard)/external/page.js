import ExternalTodoForm from "@/components/extTodo-Form";

export default function Page() {
  return (
    <div className="orders-container">
      <h2>Cyber Threats Monitoring</h2>
      <div className="orders-buttons">
        <button className="orders-button active">UNSECURE SOURCE</button>
        <button className="orders-button">CREATE TODO</button>
      </div>
      <div className="orders-empty">
        <ExternalTodoForm />
      </div>
    </div>
  );
}
