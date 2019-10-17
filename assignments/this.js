/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*/
// Four Principles for "this":
// 1. If the “new” keyword is used when calling the function, “this” inside the function is a brand new object. 
// 2. If “apply”, “call”, “bind” are used to call a function, “this” inside the function is the object that is passed in as the argument. 
// 3. If a function is called as a method that is, if don’t notation is used to invoke the function, “this” is the object that the function invocation, “this” is the object to the left of the dot. Whenever they are used as a method, “this” is explicitly defined. 
// 4. If the function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, “this” is the global object. In a browser, it’s “window”.

/* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
'use strict mode'
// if you have “strict mode” enabled, JavaScript will do the right thing and instead of defaulting to the window object will just keep “this” as undefined.
console.log(this)

// Principle 2

// code example for Implicit Binding
let myCat = {
  name: 'Whiskers',
  speech: 'meow',
  cat: function(){
    console.log(this.speech);
  }
}

myCat.cat();

// Principle 3

// code example for New Binding

function User (name, age) {
  this.person = name
  this.value = age
}
let myUser = new User ('Shaqib a great guy!');

console.log(myUser.person);

// Principle 4

// code example for Explicit Binding

function pet(){
  console.log(this.sound);
}

let myBird = {
  name: 'Tweety',
  sound: 'Chirp Chirp'
}

let otherBird = {
  name: 'BlueJay',
  sound: 'Tweet Tweet'
}

pet.call(myBird); //invoking the function here
pet.call(otherBird);