// Define the Shirt interface
interface Shirt {
    size: string;
    message: string;
}

// Define the make_shirt function
function make_shirt(size: string = "large", message: string = "I love TypeScript"): Shirt {
    return { size, message };
}

// Create a large shirt with the default message
const largeShirt = make_shirt();
console.log("Large Shirt:", largeShirt);

// Create a medium shirt with the default message
const mediumShirt = make_shirt("medium");
console.log("Medium Shirt:", mediumShirt);

// Create a shirt of any size with a different message
const customShirt = make_shirt("small", "Think Negative and be Positive");
console.log("Custom Shirt:", customShirt);
