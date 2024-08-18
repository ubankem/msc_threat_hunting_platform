import { createThreat } from "@/lib/threats";
import { createTodo } from "@/lib/todo";
import { exec } from "child_process";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { features, title, dot } = await request.json();
  console.log("Received features:", features); // Log the features to verify the data

  return new Promise((resolve) => {
    const featuresStr = JSON.stringify(features);
    console.log("Features String:", featuresStr); // Log the JSON string
    function getCurrentTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    exec(
      `python scripts/predict.py "${featuresStr}"`,
      (error, stdout, stderr) => {
        if (error) {
          createThreat(
            `Threats occurred trying to trigger the todo end point ${title} and ${dot})`,
            getCurrentTime()
          );
          resolve(
            NextResponse.json(
              { error: stderr, data: "", message: "Threats Detected" },
              { status: 200 }
            )
          );
        } else {
          console.log("Output:", stdout); // Log the output
          createTodo(title, dot);
          resolve(
            NextResponse.json(
              { error: "", data: JSON.parse(stdout), mmessage: "success" },
              { status: 200 }
            )
          );
        }
      }
    );
  });
}
