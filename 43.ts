// Array of magician's names
const magicianNames: string[] = ["Harry potter", "Woldemont", "Scarlet Witch", "Ronn Wislee","Snape","Dumbeldoor"];

// Define the show_magicians function
function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians: string[]) {
    return magicians.map(magician => `the Great ${magician}`);
}

// Call make_great function to modify the array and then call show_magicians to display it
show_magicians(make_great(magicianNames));

// Create a copy of the magicianNames array
const originalMagicianNames: string[] = magicianNames.slice();

// Call make_great function with a copy of the array to modify the magician names
const greatMagicianNames: string[] = make_great(magicianNames.slice());

// Call show_magicians function to show the original and modified arrays
console.log("Original Magicians:");
show_magicians(originalMagicianNames);

console.log("\nMagicians with 'the Great' added:");
show_magicians(greatMagicianNames);
