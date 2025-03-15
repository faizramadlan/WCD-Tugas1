import { Interface } from "readline/promises";

export default async function getDateInput(rl: Interface, prompt: string): Promise<Date> {
  while (true) {
    const dateString = await rl.question(prompt);
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) return date;
    console.log("Invalid date format! Use YYYY-MM-DD.");
  }
}