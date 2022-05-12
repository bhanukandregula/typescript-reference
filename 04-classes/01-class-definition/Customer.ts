class Customer {
    firstName: string;
    lastname: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastname = theLast;
    }
}

// create an instance of class
// let myCustomer = new Customer();
// myCustomer.firstName = "Bhanu";
// myCustomer.lastname = "Kandregula";

let myCustomer = new Customer("Bhanu", "Kandregula");

console.log(myCustomer.firstName);
console.log(myCustomer.lastname);