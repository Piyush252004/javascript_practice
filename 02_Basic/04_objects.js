// Sinleton object

// const tinderUser = new Object()  // this is singleton object
const tinderUser1 = {}           // This is non-singleton object


tinderUser1.id = "123abc"
tinderUser1.name = "Sammy"
tinderUser1.isLoggedIn = false

// // console.log(tinderUser);
// console.log(tinderUser1);

const regularUser = {
    email: "some@gmail.com",
    fullname: {                 // object in object (nested object)
        userfulname: {
            firstname: "Piyush",
            lastname: "Balwani"
        }
    }
}

// console.log(regularUser.fullname.userfulname.firstname);            // With the help of this dot method we can access this nested object properties and we can get output of this root level property

// combine objects like arrays

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}


// Syntax for combining objects into one object is const obj = obj_1.assign(target, source)
// const obj3 = {obj1, obj2}           // This method is used to combine two objects but this method combines both the objects as is it like two objects in one object
// const obj3 = object.assign(obj1, obj2, obj4) // this method is used to combine values of this objects.
// const obj3 = Object.assign({}, obj1, obj2, obj4)    // This is as same as above but in this we have changed it in out target object as an empty brackets so that all the values are surely store in our target object. make sure while assigning values Object.assign 's O should be capital otherwise it would not be run properly and give us an error. It will not used mostly.
const obj3 = {...obj1, ...obj2, ...obj4}            // Mostly for combining objects with eachother we are using this spread method because it's syntax is easy for us
// console.log(obj3);

const users = [                                     // This is the form where our database get the values and stores it in our database
    {
        id: 1,
        email: "Piyush@gmail.com"
    },
    {
        id: 2,
        email: "krish@gmail.com"
    }
]

console.log(users[0].email);                        // This syntax is used to find a specific data of the specific user.

console.log(tinderUser1)
console.log(Object.keys(tinderUser1));              // This is used to print only keys of our object.
console.log(Object.values(tinderUser1));            // This is used to print only values of our object.
console.log(Object.entries(tinderUser1))            // This method is used to print values in the individual key-value array format in one object. In all array first element is it's key and second element is it's value.

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));      // this method is used to find is that property is available in the object or not. if it available then returns true or else false


// destructuring objects 

const course = {
    courseName: "js",
    price: "999",
    courseInstructor: "Piyush"
}

// course.courseInstructor   // This is one method for accessing values of objects

const {courseInstructor: Instructor} = course       // This is used to destructure of object in this we havve changed courseInstructor into Instructor now we can access it the help of Instructor only.

console.log(Instructor);


// {                       // this is a json format API. In this Object format json file will be writen.
//     ...           
// }