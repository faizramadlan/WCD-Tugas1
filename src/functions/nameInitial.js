export async function findInitial(rl) {
    const name = await rl.question("Enter full name: ");
    const initials = name.split(' ')
                        .filter(n => n.length > 0)
                        .map(n => n[0].toUpperCase())
                        .join('');
    console.log(`Initials: ${initials}`);
}