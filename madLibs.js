/* Step 2: Declare and assign values to variables
Include:
Strings (e.g., const timeOfDay = "sunny afternoon";).
Numbers (e.g., const mathResult = 2 + 2;).
A boolean expression (e.g., const booleanValue = timeOfDay.includes("afternoon");).
An object with properties (e.g., const person = { name: "Mike", age: 25 };).
*/
// Step 1: Paste in one of the story templates above
const timeOfDay = "stormy ";
const math = 10 - 7;
const booleanValue = timeOfDay.includes("night");
const ghost = { location: "haunted house", results: 3 };
const object1Owner = ghost.location;
const object2Owner = ghost.results;

const story = `On a ${timeOfDay}night, I ventured into the ${object1Owner}. The creaking walls seemed to whisper, sending chills down my spine. Suddenly, a ghost appeared, its glowing eyes piercing through the darkness. Ghost spoke to me, "Hello stranger". My heart raced as it floated silently toward me. Did you know ${mathResult} equals ${object2Owner}? Spooky, right?`

document.getElementById("madlibs-output").textContent = story;
