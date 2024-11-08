let guestList: string [] = ['Zain Khan', 'Eman Abbasi', 'adil'];

guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

console.log(`Total number of people invited to dinner: ${guestList.length}`);
