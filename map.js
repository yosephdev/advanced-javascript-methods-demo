// Using a for loop
let nums = [1, 2, 3, 4, 5];

let results = [];

for  (let num of nums) {
    results.push(num * 2);
}
console.log(results);


// Using map()
const multByTwo = function(num) {
    return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()


// Simplfied w/ map() + arrow function


// With objects: