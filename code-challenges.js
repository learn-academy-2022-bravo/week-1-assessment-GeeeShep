// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
//const fruit1 = "apple"
//const fruit2 = "banana"

// Set two:
//const fruit3 = "cherry"
//const fruit4 = "kiwi"

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// function boiling point
// inputs are the numbers 42, 350, 212
// output will be a string saying "42 is below boiling point", 350 is above boiling point", "212 is at boiling point"

//create a function called tempRead that gives different results for the temperature. 
//if the temp says 42 then "below boiling point"
//if temp says 350 then "at boiling point" 
//if temp says 212 then "is at boiling point"

//(forgot to save what i had originally)
//i was originally thinking that i needed to do an array where instead of nums it would be the three constants. Maybe over thinking??

//const temp1 = 42
//const temp2 = 350
//const temp3 = 212

//const tempRead = (nums) => {
//if(nums < 212) {
 //   return `${nums} is below boiling point`
//} 
//else if (nums > 212) {
//    return `${nums} is above boiling point`
//} 
//else if (nums = 212) {
//    return  `${nums} is at boiling point`
//  }
//}
//console.log(tempRead(temp1))
//console.log(tempRead(temp2))
//console.log(tempRead(temp3))
//console.log(tempRead("nums is below boiling point", "nums is above boiling point", "nums is at boiling point"))

//// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js
// nums is at boiling point
//// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js
// 212 nums is at boiling point
//// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js
// 42 nums is below boiling point

// above this is what i originally had but it gave me an output of "nums is below point", etc...
//// `${nums} is below boiling point` this is how the codes captures an input dynamically, didnt have this originally.

//// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js
// 42 is below boiling point
// 350 is above boiling point
// 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

//inputs are myNumbers1 and myNumbers2
//1st output...joining the array
//2nd output ... length of 10

//process
//use an accessor .concat to join array
//use .length property to get total output of array

//const myNumbers1 = [3, 7, 0, 36, -9]
//const myNumbers2 = [8, -7, 42, 9, 13]

//console.log(myNumbers1.concat(myNumbers2))
//ran this just to fact check to make sure im on the right track
//error...forgot to save..hehe

//console.log(myNumbers1.concat(myNumbers2).length)
//ran this originally and it worked

//const joinNums = myNumbers1.concat(myNumbers2)

//console.log(joinNums.length)
//tried this other way and it worked too
////[
    // learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js
//[
//   3,  7,  0, 36, -9,
//   8, -7, 42,  9, 13
// ]


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// need to use a built-in-method, .reverse
//use another built-in-method, .join
//1. Change a string to an array (you must do this because the reverse ONLY works on an array).  2. Then reverse it.  3. Then “join” it back together.

// const currentCohort = "Bravo 2022"
// let nameChars = Array.from(currentCohort)
// console.log(nameChars)

// console.log(nameChars.reverse()) 
// console.log(nameChars.join(''))


// let nameChar = Array.from(currentCohort)
// console.log(nameChar)

// currentCohort = (currentCohort.reverse().join)

// console.log(currentCohort)

// console.log(currentCohort)

// console.log(currentCohort.reverse("Bravo 2022"))


// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js
// [
//   'B', 'r', 'a', 'v',
//   'o', ' ', '2', '0',
//   '2', '2'
// ]
// [
//   '2', '2', '0', '2',
//   ' ', 'o', 'v', 'a',
//   'r', 'B'
// ]
// 2202 ovarB
//----------------------------



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

//tough one here. 
//i believe i want todo an iteration using For loop.
//the count starts at O
//how many iterations i want the loop to do??? 6?
//taking each number and dividing bt 2 to determine if its even or not
//if it doesnt equal to 0 then its odd
//else if it does then its even


// const myArray = [13, 34, 5, 10, 27, 42]

// for(let i = 0; i<myArray.length; i++){
//  if(myArray[i] % 2 !==0){
//    console.log(`"odd"`)
//  } else{
//      console.log(`"even"`)
//  }
// }
// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js
// "odd"
// "even"
// "odd"
// "even"
// "odd"
// "even"

//ALL THE PREVIOUS ATTEMPTS, I FORGOT TO WRITE DOWN MY PROCESSES.
// 13 is an odd number
// 5 is an odd number
// 27 is an odd number
// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js node code-challenges.js
// 13 odd
// 5 odd
// 27 odd
// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js node code-challenges.js
// 13 odd
// 34 even
// 5 odd
// 10 even
// 27 odd
// 42 even
// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js node code-challenges.js
// 13 "odd"
// 34 "even"
// 5 "odd"
// 10 "even"
// 27 "odd"
// 42 "even"
// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js node code-challenges.js
// 13,34,5,10,27,42 "odd"
// 13,34,5,10,27,42 "even"
// 13,34,5,10,27,42 "odd"
// 13,34,5,10,27,42 "even"
// 13,34,5,10,27,42 "odd"
// 13,34,5,10,27,42 "even"
// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js node code-challenges.js
// 13,34,5,10,27,42 "odd"
// 13,34,5,10,27,42 "even"
// 13,34,5,10,27,42 "odd"
// 13,34,5,10,27,42 "even"
// 13,34,5,10,27,42 "odd"
// 13,34,5,10,27,42 "even"
// learnacademy@LEARNs-Air-4 week-1-assessment-GeeeShep % node code-challenges.js node code-challenges.js
// 13 "odd"
// 34 "even"
// 5 "odd"
// 10 "even"
// 27 "odd"
// 42 "even"
//-----------------------------

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// so i know i need to get an output of 42 and 3 by subtracting the two constants in each set
//i first tried console.log(number2 - number1) which gave me 42.
//now i can put them together in a string to get the output on the same line

// // Set one:
 const number1 = 58
 const number2 = 100

// // Set two:
 const number3 = 27
 const number4 = 24

 //console.log(number2 - number1)

//console.log(number2 - number1, (number3 - number4))
