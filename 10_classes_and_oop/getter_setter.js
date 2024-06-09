class User{
    constructor(email, password){               // constructor is used to get and set values to set the value to that variable.
        this.email= email;
        this.password = password 
    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email
    }

    
    get password(){                         // get method is used to get any value or access any value which available outside of the class. with the help of this get method a user can get the value in the changeble format.
        return this._password.toUpperCase()
    }

    set password(value){                    // THere is nedded to excute get code we have to use this set method also. it will ues to set the value for that current context of that function.
        this._password = value
    }
}

const piyush = new User("pi@yush.com", "abcd")
console.log(piyush.password);