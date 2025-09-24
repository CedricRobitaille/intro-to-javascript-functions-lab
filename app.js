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
  return (age >= 18) ? "Adult" : "Minor"; // If age >= 18, return adult, otherwise, return minor.
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
  let vowels = ["a", "e", "i", "o", "u"]; // documents all the available vowels.
  return (vowels.includes(character)) ? true : false; // if the character provided is found within the vowels array, return true, otherwise, false.
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
  return `${name}@${domain}`; // Returns the name + "@" + domain
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
  return `Good ${time}, ${name}!` // Returns "Good" + time + name + "!"
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



/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (grade) => {
  if (grade >= 100) return "A"; // Let's keep this simple. If they got 100%, they just get an A.
  // To remove complexity, let's shift the decimal over by 1.
  // This will allow us to have a scale of 9-0, rather than messing with a 75.
  grade = Math.trunc(grade / 10); 

  const grades = [[9,"A"],[8,"B"],[7,"C"],[6,"D"]]; // Sets a key-value pair for each grade range.
  
  for (let index = 0; index < grades.length; index++) { // Go through every grade key-value pair
    if (grade === grades[index][0]) return grades[index][1]; // if the grade matches a valid key-value pair, return the value.
  }
  return "F" // grade provided was not in the range from 100-60
}

console.log('Exercise 10 Result:', calculateGrade(85));




/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (firstName, lastName) => {
  let username = "";

  username += firstName.substring(0, 3); // Gets all chars from index 0 -> 2 from the source string.
  username += lastName.substring(0, 3); // Gets all chars from index 0 -> 2 from the source string.
  username += (firstName.length + lastName.length); // Adds the two name string lengths together, then adds to username.
  
  return username;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));






/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = (...args) => {
  return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
