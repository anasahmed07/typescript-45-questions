// Define the make_album function
function make_album(artist: string, title: string, tracks?: number):{ artist: string, title: string, tracks?: number } {
    const album:{ artist: string, title: string, tracks?: number } = { artist, title }; // Define album object with explicit type
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Call the function to create three dictionaries representing different albums
const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12); // Including the number of tracks
const album3 = make_album("Artist3", "Album3");

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
