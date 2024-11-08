// Task 14

let guesArr : string [] = ["Ali", "Hassan", "Mohammed"];
let message : string = " is invited to dinner.";

console.log(guesArr[1] + " can't make it.");                //Ali cant attend
guesArr[1] = "Zain";                                   //removing ali and adding zain instead
guesArr.map((items) => console.log(items + message));       //printing new invitations
console.log("Guest list updated.");
