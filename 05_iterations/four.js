// Iteration over loop

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {                    // For iteraring over object we have to use for-in loop so that we can iteratr over an object and print their key-value in different - different line.
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// For-in loop in array.

const programming = ["js", "rb","cpp"]

for (const val in programming) {                // important:- Initialy for-in loop will print always keys of array and objects it executes with the help of keys and values.
    // console.log(programming[val]);
}

// for-in loop on map

// const map = new Map()                           // Initialization of map function. it is used to iterate and print all the values in the form of object.
// map.set('IN', 'India')
// map.set('USA', 'United states of America')
// map.set('FR', 'France')
// map.set('IN', 'India')  

// for (const key in map) {                       // This will return nothing because map is not iterable so we cannot use for-in loop while iterating on map.
//     console.log(key);
// }

