// Define the describe_city function
function describe_city(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Sydney"); // Here, the default country "Unknown" will be used
