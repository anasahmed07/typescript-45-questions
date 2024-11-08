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
