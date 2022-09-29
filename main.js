//Declaring an array

//Syntax 1 let arrayName = [];
let fruits = [];

fruits = ["Apple","Banana", "Orange"];
//Syntax 2 let arrayName = new Array[];
let colors = new Array("Red", "blue", fruits);




console.log(fruits);
console.log(colors);

//Mixed Values
const mix = ["hello", 2,3.4, true, fruits];

console.log(mix);

//Index of an array

let seaCreatures = [];

seaCreatures[0] = "Shark";
seaCreatures[1] = "Squid";
seaCreatures[2] = "shark";
seaCreatures[3] = "Starfish";
seaCreatures[4] = "";
seaCreatures[5] = colors;

console.log(seaCreatures);


//Accessing values inside an array
console.log(seaCreatures[3]);

//array inside an array
console.log(seaCreatures[5][2][1]); 

console.log(seaCreatures.length);

//Adding values at the end of an array
seaCreatures.push("fish", "fish2")
seaCreatures.pop("fish2")
seaCreatures.shift("fish")
console.log(seaCreatures)

//Adding values at the beginning of an array
seaCreatures.unshift("fish")
console.log(seaCreatures)