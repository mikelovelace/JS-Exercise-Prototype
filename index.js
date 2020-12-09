/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name,
    this.age = age,
    this.stomach = []
}

Person.prototype.eat = function (food) {
  if (this.stomach.length <= 10) {
    this.stomach.push(food)
  }
}

Person.prototype.poop = function () {
  return this.stomach = []
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`
}

const personOne = new Person("Jason", 32);
const personTwo = new Person("Josh", 25);
const personThree = new Person("Mike", 41);

personOne.eat("Grilled Cheese Sandwich");
personTwo.eat("Nachos Supreme");
personThree.eat("Banana Pudding");

console.log(personOne.toString())
console.log(personTwo.toString())
console.log(personThree.toString())

console.log(personOne.stomach)
console.log(personOne.poop())
console.log(personOne.stomach)




/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model,
    this.milesPerGallon = milesPerGallon,
    this.tank = 0,
    this.odometer = 0
}

Car.prototype.fill = function (gallons) {
  return this.tank = this.tank + gallons
}

Car.prototype.drive = function (distance) {

  let maxDistance = this.tank * this.milesPerGallon; // 200 miles max // 10 gallons * 20 miles per gallon
  let distTraveled = distance;

  if (distance > maxDistance) {
    distTraveled = maxDistance;
  }

  this.odometer = this.odometer + distTraveled;
  let gallonsUsed = distTraveled / this.milesPerGallon;
  this.tank = this.tank - gallonsUsed

  if (this.tank === 0) {
    return `I ran out of fuel at ${this.odometer} miles!`
  } else {
    return `I have ${this.tank} gallons of gas left in my tank.`
  }
}

const carOne = new Car("Ice Cream Truck", 20); // 20 miles per gallon
carOne.fill(10) // 10 gallon limit
console.log(carOne.drive(199))
console.log(carOne)


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
}

const babyOne = new Baby("Mario", 2, "Nintendo");
console.log(babyOne.toString())
console.log(babyOne.play())

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global Binding - Global binding occurs when the `this` keyword is called from the global binding scope. `this` will then refer to the window/console object.

  2. Implicit Binding - Implicit binding occurs on object methods when the `this` keyword refers to whatever `this` is refering to.

  3. Explicit Binding - Explicit binding occurs when .call, .apply, and .bind are used

  4. New Binding -  New binding occurs when a function is called with the new keyword. Whatever is passed into the function becomes `this`.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  return 'bar';
}

export default {
  foo,
  Person,
  Car,
  Baby
}