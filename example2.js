fruits = "APPLE"
food = ["apple", "frie", "cucumber", "chocolate"];
drinks = ["water", "soda", "juice", "milk"];
numbers = [1, 5, 2, 8, 4, 9, 7, 5, 0];

//Convert a string to lowercase
console.log(fruits.toLowerCase());

//Minipulate an array using map
food.map((item) => {
    console.log(`item ${item} is made plural and the result is ${item + "s"}`);
})

//Cone and merge using spread
let spreadFood = [...food, ...food];
console.log(spreadFood);

let spreadFoods = [...food, ...drinks];
console.log(spreadFoods);

//Print all the elements with index numbers
for(i=0;i<numbers.length; i++){
    console.log(numbers.indexOf(i));
}


let sortNumbers = numbers.sort(function(a,b){
    return a-b;
})
console.log(sortNumbers);