// Reduce 

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {         // This method is used to print all the nums or values of an array in updated format. in this 2 attributes comes first one is accumulator and 2nd is current value. initially accumulator will be 0 which we have to give after diclaration of fuction and then it change with the vlaue of summestion of current value which is used to print latest value with the previous value's record it is use to make cart algo for the ecommerce website. in this current value is array's current index's value. reduce will iterate over all the values of an array.
//     console.log(`acc ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce ((acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "web dev course",
        price: 2500
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);