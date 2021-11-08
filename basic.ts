class Customer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    announce(): string {
        return `Hello, my name is ${this.name}`;
    }
}

let firstCustomer = new Customer('Mary');
let newMessage: string = firstCustomer.announce();

let heading = document.querySelector('h1');
heading!.textContent = newMessage;