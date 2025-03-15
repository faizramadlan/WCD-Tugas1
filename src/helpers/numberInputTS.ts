import { Interface } from "readline/promises";

export default async function getNumberInput(rl: Interface, prompt: string): Promise<number> {
  while (true) {
    const value = await rl.question(prompt);
    const num = parseFloat(value);
    if (!isNaN(num)) return num;
    console.log("Invalid number! Please try again.");
  }
}