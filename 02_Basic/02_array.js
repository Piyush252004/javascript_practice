const marvel_heros = ["thor","IronMan","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)             // It will take all the values in array form and push it in first array as it is in array form. it push array in existing array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)      // It will concatinate values of array with other array. it will make a new array and concatinate in that array only it not effect on existing array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   // This is a spread operator which is used to spread all the elements from the array in indivitually and concat it in a new array.
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)     // This method is used to solve array in array format in one array. we can check n number of array into array. if we want to solve any perticular number then isteat of "infinite" we have to give it a particular number.
console.log(real_another_array);


console.log(Array.isArray("Piyush"))            // It is used to check weather this string is array or not if yes then retun true otherwise it return false
console.log(Array.from("Piyush"))               // It will convert a strin into an array. 
console.log(Array.from({name: "Piyush"}))       // It's an interesting one because for that we have to specify by which we have to make an array by key or value. if we not specify for which we want to make an array then it return empty array. 

let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1,score2,score3));    // This method is used to make an array of different-different variables.