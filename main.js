#!/usr/bin/env node
import { calculateCircle } from "./functions/circleDiameter.js";
import { calculateDay } from "./functions/dateDifference.js";
import { calculateRectangle } from "./functions/rectangleArea.js";
import { calculateTriangle } from "./functions/triangleAngles.js"; // Fixed filename
import { findInitial } from "./functions/nameInitial.js";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

async function Run() {
  try {
    while (true) {
      console.log(`
____WCD Calculator (Tugas#1)___
1. Calculate Rectangle Area
2. Calculate Circle Diameter & Circumference
3. Calculate Third Triangle Angle
4. Calculate Days Between Dates
5. Generate Name Initials
0. Exit
      `);
      
      const choice = await rl.question("\nEnter your choice : ");
      
      switch (choice) {
        case "1":
          await calculateRectangle(rl);  // Pass rl instance
          break;
        case "2":
          await calculateCircle(rl);
          break;
        case "3":
          await calculateTriangle(rl);
          break;
        case "4":
          await calculateDay(rl);
          break;
        case "5":
          await findInitial(rl);
          break;
        case "0":
          rl.close();
          return;
        default:
          console.log("Invalid choice! Please try again.\n");
      }
      
      await rl.question("Press Enter to continue...");
      console.clear();
    }
  } catch (error) {
    console.error("Error:", error.message);
    rl.close();
  }
}

Run();