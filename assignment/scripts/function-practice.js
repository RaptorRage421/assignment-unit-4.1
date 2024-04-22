console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log('Test - should say "Hello, Sam!"', helloName('Sam'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log( 'in addNumbers:', firstNumber, secondNumber);
  
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
 console.log(addNumbers(138,838))
 console.log(addNumbers(2,5))

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  console.log( 'in multiplyThree' , num1, num2, num3)
  return num1 * num2 * num3
}
console.log(multiplyThree(1,2,3))
console.log(multiplyThree(5,8,10))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  console.log('in isPositive', number)
  if (number > 0) {
    return true;
  }
  else
  return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Testing - isPositive', isPositive(21))
console.log('Testing - isPositive', isPositive(-3))

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = ['Strawberry', 'Blueberry', 'Peach', 'Apple', 'Watermelon'];
let last = array[array.length -1];
function getLast(array) {
  if (array === undefined || array.length == 0){
    console.log ('Array is empty, there can be no last value')
  }
  else 
  console.log( 'in getLast', array, last);
  return last;
}

console.log( 'Testing - getLast: ', getLast(array))
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find (value, myArray) {
  console.log('in find: ', myArray);
  let i = 0
  while (i < myArray.length) {
    console.log('in while loop, my Value:' , value , ' checking against myArray[i] value [' , myArray[i] , ']' );
      if (myArray[i] === value) {
        return true;
        console.log('exists in the array');
      }
      i ++;
  }

return false;
}
console.log('Testing find:', find(3, [1,2,3,4,5]))
console.log('Testing find:', find(-1, [5,-1,4,10])) ;
console.log('Testing find:', find(5,[-10,4,6,2,3]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let string;
let letter;
function isFirstLetter(letter, string) {
  console.log('in isFirstLetter: is ', letter , ' the first letter of: ' , string);
  if (string[0] === letter){
  return true;
}

  
return false;
}
 
console.log('Testing isFirstLetter: ', isFirstLetter('e', 'electronic'));
console.log('Testing isFirstLetter: ', isFirstLetter('f', 'effort'));

// 9. Function to return the sum of all numbers in an array
let NumberArray = [];
function sumAll(numArray) {
  numberArray = []
  numberArray = numArray
  sum = 0;
  // TODO: loop to add items
  for (let i=0; i<numArray.length; i++){
    sum += numArray[i]
  }
  // TODO: return the sum
  return sum

}
console.log('Testing sumAll: ', sumAll([6,2,8,4,12]), " is the sum of the array" , numberArray);
console.log('Testing sumAll: ', sumAll([145,234,999,256,-451,70]), " is the sum of the array" , numberArray);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
