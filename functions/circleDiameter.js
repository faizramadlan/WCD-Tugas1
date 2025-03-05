import getNumberInput from '../helpers/numberInput.js';

export async function calculateCircle(rl) {
    const radius = await getNumberInput(rl, "Enter radius: ");
    console.log(`Diameter: ${2 * radius}`);
    console.log(`Circumference: ${2 * Math.PI * radius}`);
}