// Declaring Functions
function doNothing() { }

function sayHello() {
    console.log("Hello!");
}

// Calling Functions
sayHello();

// Specific Greetings
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

// Calling Specific Greetings
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

// Generalizing Greeting
function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

// Testing Generalized Greeting
sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

// Custom Greetings
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}

// Verifying Custom Greeting
console.log(say("Goodbye", "Julio"));
console.log(say("Hello", "Julio"));

// Basic Addition Function
function add(x, y) {
    return x + y;
}

// Testing Addition Function
console.log(add(1, 2));

// Logging within Function
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}
console.log(say("Hello", "Liz"));

// Order of return and log
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");  // Will not execute
}

// Testing Order
console.log(say("Howdy", "partner"));

// Adjusting Order
function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
}

console.log(say("Hola", "Jack"));
