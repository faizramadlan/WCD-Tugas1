import { Interface } from "readline/promises";
import getNumberInput from "../helpers/numberInputTS";

export async function calculateRectangle(rl: Interface): Promise<void> {
  const length = await getNumberInput(rl, "Enter length: ");
  const width = await getNumberInput(rl, "Enter width: ");
  console.log(`Area: ${length * width}`);
}