// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer:i believe this will put "indigo" at the end of the array
// b) Verify and explain:Ok so it gave me an output of "5". After review i was partially correct but i didnt state(forgot) that it would give the value(length) of 5 since  the other elements are 1 thru 4.



// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer:This should give me an output of 10 
// b) Verify and explain: becuase  its telling me the number of characters in the string. so this(length) is a  property that tells us how long a string is. Which starts from 1 and ends at 10


// --------------------2) What will this log?

const greeting = "Hello World!"
 //console.log(greeting[4])

// a) Your answer:this should give me an output of the first letter "o". 
// b) Verify and explain: This is telling me that the console log is asking for 
// a specific  character in the string which is indentified by the index of 4, starting from 0


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
//const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: verified! within the languages array the string of words are indexed with "Ruby" being the indexed as 1, basically the value of Ruby is at the 1st index


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]

//console.log(weekendDays.toUpperCase())


// a) Your answer: I thought the answer would be SATURDAY, SUNDAY but i was incorrect
// b) Verify and explain:the constant needs to be changed to a string then we can use the BIM toUpperCase to change the characters
//console.log(weekendDays.toString().toUpperCase())




// --------------------5) What will this log?

const dataTypes = ["hello", "string", "Boolean"]
 console.log(typeof dataTypes.length)

// a) Your answer: not sure
// b) Verify and explain: so the output was "number". I changed "numbers" to "hello" for my own verification and it still gave me numbers.
// .length identifies the character position of an element

