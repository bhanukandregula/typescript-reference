var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastname = theLast;
    }
    return Customer;
}());
// create an instance of class
// let myCustomer = new Customer();
// myCustomer.firstName = "Bhanu";
// myCustomer.lastname = "Kandregula";
var myCustomer = new Customer("Bhanu", "Kandregula");
console.log(myCustomer.firstName);
console.log(myCustomer.lastname);
