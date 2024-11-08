// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three different city-country pairs
const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("Paris", "France");
const city3 = city_country("Tokyo", "Japan");

// Print the values returned by the function
console.log(city1);
console.log(city2);
console.log(city3);
