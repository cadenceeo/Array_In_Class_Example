let months = ["jan","apr","mar","may"];
let number = [1,4,76,32,5,90];
console.log(months);

//Splice
months.splice(1,0,"feb");
console.log(months);

months[2] = 2;
console.log(months);
months.splice(1,1, "feb");
console.log(months);

//Slice
let slicemonths = months.slice(1,3);
console.log(slicemonths);

//Reverse
let reversemonths = months.reverse();
console.log(reversemonths);


//IndexOf
let indexOfMonths = months.indexOf("may");
console.log(indexOfMonths);

//LastIndexOf
let lastIndexOfMonths = months.lastIndexOf("apr");
console.log(lastIndexOfMonths);

//Sort
let sortMonths = months.sort();
console.log(sortMonths);

//Sorting numbers by value
let sortNumbers = number.sort(function(a,b){
    return a-b;
})
console.log(sortNumbers);

//Join
let joinMonths = months.join(" - ");
console.log(joinMonths);

//Spread
let spreadMonths = [...number, ...months];
console.log(spreadMonths);

let numberMonths = [number, months];
console.log(numberMonths);

for(i=0;i<months.length; i++){
    console.log(months);
}

//forEach loop
let number2 = [123, 234, 3543, 64532, 123];
number2.forEach((item, index, array) => {
    console.log(`item of ${item} index is ${index} in ${array}`);
})

//Map
number2.map((item) => {
    console.log(`item ${item} is multiplied by 3 and the result is ${item*3}`);
})