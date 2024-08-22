import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ViewReports() {
    const result = await verifyAuth();
  if (!result.user) {
    return redirect("/login");
  }
  return (
    <div>
      <h3>Monthly reports of threats presented a chart and table.</h3>
    </div>
  );
}
