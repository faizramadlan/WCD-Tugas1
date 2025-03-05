export default async function getDateInput(rl, prompt) {
    while(true) {
        const dateString = await rl.question(prompt);
        const date = new Date(dateString);
        if (!isNaN(date)) return date;
        console.log('Invalid date format! Use YYYY-MM-DD.');
    }
}