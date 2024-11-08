//creating a guestList array
let guestList = ["Hammad", "Ijaz", "Ali", "Muhammad",];

//making variable for those who can't come
let dontCome = guestList[0];

//printing the name who can't  come to the dinner; 
console.log(dontCome, "He is not able to attend");

guestList.splice(0, 1, "Zain"); // remove the first

//message for bigger table
console.log("Good News!  We Found a Bigger Table For Dinner.")

//adding new Guests
guestList.unshift("ALI");


//adding a new value at ending index of array
guestList.push("Ameen");

//get a add one neew guest at middle index of array
let middleIndex: number = Math.floor(guestList.length / 2);

//adding a new guest to index of array
guestList.splice(middleIndex ,0,"Samiullah")

console.log("The Updated Guest");

guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

// Informing about the limitation
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// using while-loop to remove  guests until there are no more than 2 people left in the party
while(guestList.length > 2) {
    let remmedguest = guestList.pop();
    console.log(` ${remmedguest} Sorry we have reached our limit and had to remove you from the  list.`);
}

//sending a invitation to vthe last two guest on the list
console.log("Invitation to the last 2 gusts");

guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner!`))

guestList.pop();
guestList.pop();

console.log("Empty  List:", guestList);
