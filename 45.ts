// Define the car_info function
function car_info(manufacturer: string, modelName: string, additionalInfo: { [key: string]: any }): { manufacturer: string, modelName: string, [key: string]: any } {
    return { manufacturer, modelName, ...additionalInfo };
}

// Call the function with required information and additional key-value pairs
const car1 = car_info("Toyota", "Corolla", { color: "red", year: 2022, features: ["ABS", "Airbags"] });

// Print the Object returned to ensure all the information was stored correctly
console.log(car1);
