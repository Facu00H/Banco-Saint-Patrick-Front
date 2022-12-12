export class User {
    name;
    lastName;
    email;
    password;
    cards = [];

    constructor(name, lastName, email, password){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

}