// Define current_users and new_users arrays
let current_users: string[] = ['John', 'Alice', 'Bob', 'Emma', 'Kate'];
let new_users: string[] = ['Eric', 'Bob', 'ALICE', 'Jane', 'Peter'];

// Convert all current_users to lowercase for case-insensitive comparison
let lowercase_current_users: string[] = current_users.map(user => user.toLowerCase());

// Loop through each new user
for (let new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();
    
    // Check if the lowercase username exists in lowercase_current_users array
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`The username '${new_user}' is available.`);
    } else {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    }
}
