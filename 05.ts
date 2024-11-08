// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let Quote: string = "A person who never made a mistake never tried anything new.";
let Author: string = "Albert Einstein";

console.log(`${Author}  once said, "${Quote}"`);



// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: String = "Albert Einstein";
let message: string = `${famous_person} Once Said, ${Quote} `

console.log(message);