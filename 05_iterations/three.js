// for of loop 

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello world!"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()                           // Initialization of map function. it is used to iterate and print all the values in the form of object.
map.set('IN', 'India')
map.set('USA', 'United states of America')
map.set('FR', 'France')
map.set('IN', 'India')                          // IT will not print because map will print always an unique values it will not take 2 same value. it ignore first and take one among 2.

// console.log(map);

for (const [key, value] of map){                // This is used to take loop on the map object. with the help of this [] destructure we can get key and value of object differently if we want.
    console.log(key, ':-', value);
}

// loop on object

const muObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject){           // we can not iterate on object with this type of for of loop we need to use some other method to iterate over the object. this will show an error.
//     console.log(key, ":-", value);
// }