import { Interface } from "readline/promises";
import getDateInput from "../helpers/dateInputTS";

export async function calculateDay(rl: Interface): Promise<void> {
  const date1 = await getDateInput(rl, "Enter first date (YYYY-MM-DD): ");
  const date2 = await getDateInput(rl, "Enter second date (YYYY-MM-DD): ");
  const diff = Math.abs(date2.getTime() - date1.getTime());
  console.log(`Days difference: ${Math.ceil(diff / (1000 * 60 * 60 * 24))}`);
}