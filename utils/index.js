import { baseUrl } from "@/constants";

export async function addTodo(payload) {
  const res = await fetch(`${baseUrl}/todo`, {
    method: "POST",
    body: JSON.stringify(payload),
    ContentType: "application/json",
  });
  const data = await res.json();
  return data;
}
