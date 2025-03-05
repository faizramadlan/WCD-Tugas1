import getDateInput from '../helpers/dateInput.js';

export async function calculateDay(rl) {
    const date1 = await getDateInput(rl, "Enter first date (YYYY-MM-DD): ");
    const date2 = await getDateInput(rl, "Enter second date (YYYY-MM-DD): ");
    const diff = Math.abs(date2 - date1);
    console.log(`Days difference: ${Math.ceil(diff / (1000 * 60 * 60 * 24))}`);
}