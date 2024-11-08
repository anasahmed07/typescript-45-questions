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

//adding a new guest at starting index of array
guestList.unshift( "Usama");