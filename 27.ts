let alien_color_1:string
function alienColorTester (alien_color_1:string){
if (alien_color_1 === 'green') {
    console.log("Version 1: The player earned 5 points.");
} else if (alien_color_1 === 'yellow') {
    console.log("Version 2: The player earned 10 points.");
} else if (alien_color_1 === 'red') {
    console.log("Version 3: The player earned 15 points.");
}
}
// Version 1 (alien_color is 'green'):
alien_color_1 = 'green';
alienColorTester(alien_color_1);

// Version 2 (alien_color is 'yellow'):
alien_color_1 = 'yellow';
alienColorTester(alien_color_1);

// Version 3 (alien_color is 'red'):
alien_color_1 = 'red';
alienColorTester(alien_color_1);
