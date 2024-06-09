// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5,3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());       // It will give time in mili seconds
console.log(Math.floor(Date.now()/1000));   // Used to convert it in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);        // Used to find the current date's month
console.log(newDate.getDay());              // used to find the current date's day

newDate.toLocaleDateString('default',{
    weekday: "long"
})