class Customer {
    constructor(name) {
        this.name = name;
    }
    announce() {
        return `Hello, my name is ${this.name}`;
    }
}
let firstCustomer = new Customer('Mary');
let newMessage = firstCustomer.announce();
let heading = document.querySelector('h1');
heading.textContent = newMessage;
