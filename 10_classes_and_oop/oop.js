// Object literals

const user = {
    username: "piyush",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        // console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function
// const promiseOne = new Promise()                // Here new word is used for making constructor function. which allows us to make more than 1 instances with the help of 1 object. it will make new context.
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;                      // as we know this is an empty object so that if we want to add any information inside the this object so that we can use this. as an variable name and add parameters in their values.
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this 
}

const userOne = new User("Piyush", 12, true)

console.log(userOne);

// when we declare new keyword one empty onject will be created or defined. whcih is called instance. 
// when we use new keyword a constructor function will be called. 
// whatever we right arguments will be injected in it.
// and it will be display in function.