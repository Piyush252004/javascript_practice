const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 220,
    isAvailable: true,
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,                // with the help of this we can give changes access method properties for our declared objects. 
//     enumerable: false 
// })

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
}

