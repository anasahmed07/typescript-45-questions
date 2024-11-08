// Array of magician's names
const magicianNames: string[] = ["Harry potter", "Woldemont", "Scarlet Witch", "Ronn Wislee","Snape","Dumbeldoor"];

// Define the show_magicians function
function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Call the show_magicians function
show_magicians(magicianNames);

// Define the make_great function
function make_great(magicians: string[]) {
    return magicians.map(magician => `the Great ${magician}`);
}

// Call make_great function to modify the array and then call show_magicians to display it
show_magicians(make_great(magicianNames));
