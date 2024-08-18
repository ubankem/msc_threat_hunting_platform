import db from "./db";

export function createThreat(description, tot) {
  const result = db
    .prepare("INSERT INTO threats(description,tot) VALUES(?,?)")
    .run(description, tot);
  return result.lastInsertRowid;
}

export async function getThreats() {
  const stmt = db.prepare("SELECT * FROM threats");
  return stmt.all();
}
