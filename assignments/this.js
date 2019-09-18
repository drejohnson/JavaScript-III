/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
/* 'this' is bound to the global scope which is the Window/Global object */

// code example for Window Binding
function sayHello(greeting) {
  console.log('Global: ', this);
  console.log(`${greeting} world!`)
}

sayHello('Hello')

// Principle 2
/* 'When a method is called on an object, 'this' is bound to that object before the dot */

// code example for Implicit Binding
const myObj = {
  name: 'Dre',
  sayHello: function() {
    console.log('Implicit: ', this);
    console.log(`Hello ${this.name}`);
  }
}

myObj.sayHello()

// Principle 3
/* 'this' is bound to a specific instance of a object that was created by a constructor function */ 
// code example for New Binding
function Person(attrs) {
  this.name = attrs.name
  this.sayHello = function() {
    console.log('New Binding: ', this);
    console.log(`Hello ${this.name}`);
  }
}

const me = new Person({
  name: 'Dre',
})

me.sayHello()

// Principle 4
/* By using 'call' and 'apply', Explicit Binding let you overide what object 'this' refers to */ 

// code example for Explicit Binding
function sayHi() {
  console.log('Explicit: ', this);
  console.log(`Hi ${this.name}`);
}

sayHi.call(me)