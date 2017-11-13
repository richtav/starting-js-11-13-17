//this declares the variable myVar
  var myVar;
  //this sets the value of the myVar variable to the number .7
  myVar = 0.7;
//this declares the myName variable and sets it to the string value of rich
  var myName = 'rich';


// a double quoted string cannot contain double quotes within unless they are esacped using a \,
// same applies for single quoted strings
  var mySentence = 'What\'s up';
  var thing = "and he said \"Whats's up\" to me";


// String cannot break lines by default.
  var myLongString = "This actually isn't too long.";
// Booleans are either true or false
  var myBoolean = false;

  var numA = 14;
  var numB = 27;


//addition in js is done with the + symbol
  var sumOfAandB = numA + numB;

  numA = 32;

  // subtraction is done with the -
var numAMinusNumB = numA - numB;

//multiplication is done through an *
var numC = 3 * 3;


// division is done with a /
var numD = 4 / 2;

//exponents are done with **
var myExponent = 2 ** 4;

// modulus is done with a % returning the remainder after division, 5 % 2 = 1

var myModulus = 5 % 2;


//this is concatenation, adding strings together, spaces must be put in manually
var myFullName = myName + " " + "Cheech";


// this creates the me variable and assigns to be an object
var me = {
  // objects are made of named key value pairs
  name: "rich Cheech",
  age: 29,
  isAwesome: true,
  head: {
    eyes: 2,
    hairColor:'brown',
    brain: true,
  }
};

// properties on the me object would generally be accessed using dot notation
//me.name would retur my name, me.headeyes would return 2

console.log(me.age);
// this sets the age property on the me object to the value of 30
me.age = 30;

console.log(me.age);

//arrays are key value pairs where the key is a number
var myArr = [55, "tiger", true, me ] ;

// arrays in JavaSCript start with a 0 index,
//to acces elements within an array using [] with the index number, myArr[0] would be 55,
//myArr[1] would be tiger
console.log(myArr[0]);

var daysOfTheWeek = ['Sunday', 'Monday', 'tuesday'];

// OBject can hold arrays as the value for properties
// this adds a hobbbies property to the me objectand sets it to be an array
me.hobbies = ['code', 'music', 'food', 'games'];

console.log(me.hobbies[0]);

var something;
// something is undefeined the variable has been declrared but a value has not been set
console.log(something);


var somethingElse;
//if js encounter a variable that does not exist it will throw an error and stop executing any further script by default
console.log(somethingElse);

console.log("not going to happen");


// null is nothing
var nothing = null;

 function sayHello() {
console.log("welcome to javascript city dude!");
 }
 // function declarations do not end in a ;


//this calls or invokes the sayHello function.
sayHello();
//this works because function declarations are hoisted to the top of the document when read by the browser
sayHelloTo("meeee");

//variables created within a functino are only available within the function, this is called function scope.
function sayHelloTo(name) {
  var message = "Welcome to JavasSCript " + name + "!";
console.log(message);
}

//sayHelloTo("Richard Simmons");
//sayHelloTo("Paul Newman")
//sayHelloTo(myFullName);
//sayHelloTo()

//This will throw an error, functions should be defined before they are called
//sumNums();

//This is a function expression that creates a function called sumNums
var sumNums = function (firstNum, secondNum) {
  var sum = firstNum + secondNum;
  //this will return the value of the sum variable to where the function is called, once a return statement is triggered no further no code within the functin is executed.
return sum;
console.log("This is never going to happen");
};

sumNums(2,2);

//console.log(sumNums(2,2) );

var mySum = sumNums(923, 13454);
