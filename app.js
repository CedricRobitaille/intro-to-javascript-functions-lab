/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// There is a better way to do this (using rest parameters), but we'll tackle that at Exercise #6.
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));




/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
  return (age >= 18) ? "Adult" : "Minor";
}

console.log('Exercise 2 Result:', isAdult(21));




/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (character) => {
  let vowels = ["a", "e", "i", "o", "u"];
  return (vowels.includes(character)) ? true : false;
}

console.log('Exercise 3 Result:', isCharAVowel("a"));




/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
  return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));




/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, time) => {
  return `Good ${time}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));




/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfNums = (...nums) => { // Using a rest parameter, we can expand this to catch any amount of nums provided, so that we don't need a unique function for every quantity!
  let topNum = 0;
  for (num of nums) {  // Loops through the array of nums, declaring the num at every loop.
    if (num > topNum) { // Check if the current num is greater than the previously logged largest num.
      topNum = num; // Swaps it!
    }
  }
  return topNum;
}

console.log('Exercise 6 Result:', maxOfNums(5, 10, 8));



/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (bill, percentage) => {
  return Math.trunc(bill * (percentage/100)); // Math.trunc to remove decimal points (forces int if float)
}

console.log('Exercise 7 Result:', calculateTip(50, 20));




/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temp, unit) => {
  // Math to convert C -> F: num * 1.8 + 32
  // Math to convert F -> C: num - 32 * 5 / 9
  return (unit == "C") ? ((temp * 1.8) + 32) : ((temp - 32) * 5 / 9);
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

/**
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {operator} operator - Valid operators: add, subtract, multiply, divide
 */

const basicCalculator = (num1, num2, operator) => {
  switch (operator){
    case "add":
      return num1 + num2;
      break;
    case "subtract":
      return num1 - num2;
      break;
    case "multiply":
      return num1 * num2;
      break;
    case "divide":
      return num1 / num2;
      break;
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
