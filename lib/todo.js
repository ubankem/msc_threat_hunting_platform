import db from "./db";

export function createTodo(title, dot) {
  const result = db
    .prepare("INSERT INTO todo(title,dot) VALUES(?,?)")
    .run(title, dot);
  return result.lastInsertRowid;
}

export async function getTodos() {
  const stmt = db.prepare("SELECT * FROM todo");
  return stmt.all();
}
