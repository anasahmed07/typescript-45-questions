// Define an array of usernames
let usernames: string[] = ['admin', 'john', 'emma', 'alice', 'eric'];

// Loop through the array and print greetings
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else if (username === 'john'){
        console.log(`Hello ${username}, thank you for logging in again.`);
    } else if (username === 'emma'){
        console.log(`Hello ${username}, thank you for logging in again.`);
    } else if (username === 'alice'){
        console.log(`Hello ${username}, thank you for logging in again.`);
    } else if (username === 'eric'){
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
