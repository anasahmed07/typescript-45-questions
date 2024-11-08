// Define an array of usernames
let usernames: string[] = ['admin', 'Eric', 'Alice', 'John', 'Jane'];

// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array
usernames = [];
console.log("now the list is empty. it should print that we need to find some users.")

// Check if the list of users is not empty after removal
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}
