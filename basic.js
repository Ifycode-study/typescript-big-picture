var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.announce = function () {
        return "Hello, my name is " + this.name;
    };
    return Customer;
}());
var firstCustomer = new Customer('Mary');
var newMessage = firstCustomer.announce();
var heading = document.querySelector('h1');
heading.textContent = newMessage;
