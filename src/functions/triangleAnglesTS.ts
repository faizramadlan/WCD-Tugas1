import { Interface } from "readline/promises";
import getNumberInput from "../helpers/numberInputTS";

export async function calculateTriangle(rl: Interface): Promise<void> {
  const angle1 = await getNumberInput(rl, "Enter first angle: ");
  const angle2 = await getNumberInput(rl, "Enter second angle: ");
  const total = angle1 + angle2;
  if (total >= 180) throw new Error("Invalid triangle angles");
  console.log(`Third angle: ${180 - total} degrees`);
}