class Customer {

    constructor(private _firstName: string, private _lastName: string){

    }

    // accessors
    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName = value;
    }
}

// create an intance of class
let myCustomer = new Customer("Bhanu", "Kandregula");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);