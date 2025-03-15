import getNumberInput from '../helpers/numberInput.js';

export async function calculateRectangle(rl) {
    const length = await getNumberInput(rl, "Enter length: ");
    const width = await getNumberInput(rl, "Enter width: ");
    console.log(`Area: ${length * width}`);
}