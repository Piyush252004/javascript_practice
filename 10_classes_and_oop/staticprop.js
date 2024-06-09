class User {
    constructor(username) {
        this.username = username 
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){                        // Static keyword is used to not give all of them permission to access their properties and functionality. if we try to execute it will show an error like function is not defined but it is defined in our code.
        return `123`
    }
}

const piyush = new User("Piyush")
// console.log(piyush.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email 
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()