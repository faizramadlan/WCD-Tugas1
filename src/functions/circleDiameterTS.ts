import { Interface } from "readline/promises";
import getNumberInput from "../helpers/numberInputTS";

export async function calculateCircle(rl: Interface): Promise<void> {
  const radius = await getNumberInput(rl, "Enter radius: ");
  console.log(`Diameter: ${2 * radius}`);
  console.log(`Circumference: ${2 * Math.PI * radius}`);
}