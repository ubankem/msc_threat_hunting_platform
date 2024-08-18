import { exec } from "child_process";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { features } = await request.json();
  console.log("Received features:", features); // Log the features to verify the data

  return new Promise((resolve) => {
    const featuresStr = JSON.stringify(features);
    console.log("Features String:", featuresStr); // Log the JSON string

    // Use double quotes around the JSON string
    exec(
      `python scripts/predict.py "${featuresStr}"`,
      (error, stdout, stderr) => {
        if (error) {
          resolve(NextResponse.json({ error: stderr }, { status: 500 }));
        } else {
          console.log("Output:", stdout); // Log the output
          resolve(
            NextResponse.json({ result: JSON.parse(stdout) }, { status: 200 })
          );
        }
      }
    );
  });
}