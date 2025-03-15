export default async function getNumberInput(rl, prompt) {
    while(true) {
        const value = await rl.question(prompt);
        const num = parseFloat(value);
        if (!isNaN(num)) return num;
        console.log('Invalid number! Please try again.');
    }
}