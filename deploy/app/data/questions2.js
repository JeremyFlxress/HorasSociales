export const questions = [
  {
    id: 1,
    text: "Complete the code to iterate through the properties of an object:",
    code: `const person = {name: "John", age: 30, job: "Developer"};
for (let key ___ person) {
  console.log(key + ": " + person[key]);
}`,
    type: "fill-blank",
    answer: "in" && "In",
    points: 25,
    explanation: "The for...in loop is used to iterate over the enumerable properties of an object.",
    tutorialLink: "https://www.w3schools.com/js/js_loop_forin.asp"
  },
  {
    id: 2,
    text: "What is the result of the following expression?",
    code: `console.log(2 + "2" - 1);`,
    options: [
      "A) 21",
      "B) 3",
      "C) \"21\"",
      "D) NaN"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "In JavaScript, 2 + \"2\" becomes \"22\" (string concatenation), then \"22\" - 1 converts the string to a number and subtracts 1, resulting in 21.",
    tutorialLink: "https://www.w3schools.com/js/js_type_conversion.asp"
  },
  {
    id: 3,
    text: "Complete the code to stop a form from submitting:",
    code: `document.getElementById(\"myForm\").addEventListener(\"submit\", function(event) {
  ___.preventDefault();
});`,
    type: "fill-blank",
    answer: "event",
    points: 25,
    explanation: "The preventDefault() method is called on the event object to stop the form from submitting.",
    tutorialLink: "https://www.w3schools.com/jsref/event_preventdefault.asp"
  },
  {
    id: 4,
    text: "What method would you use to add a CSS class to an element?",
    options: [
      "A) element.addClass(\"newClass\")",
      "B) element.class += \"newClass\"",
      "C) element.classList.add(\"newClass\")",
      "D) element.className = \"newClass\""
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The classList.add() method adds a CSS class to an element without overwriting existing classes.",
    tutorialLink: "https://www.w3schools.com/jsref/prop_element_classlist.asp"
  },
  {
    id: 5,
    text: "Complete the code to get the length of an array:",
    code: `const fruits = [\"apple\", \"banana\", \"orange\"];
console.log(fruits.___);`,
    type: "fill-blank",
    answer: "length",
    points: 25,
    explanation: "The length property returns the number of elements in an array.",
    tutorialLink: "https://www.w3schools.com/js/js_arrays.asp"
  },
  {
    id: 6,
    text: "Which operator would you use to check if a variable is of a specific type?",
    options: [
      "A) istype",
      "B) instanceof",
      "C) typeof",
      "D) typeOf"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The typeof operator returns a string indicating the type of the operand.",
    tutorialLink: "https://www.w3schools.com/js/js_typeof.asp"
  },
  {
    id: 7,
    text: "Complete the code to define a default parameter:",
    code: `function greet(name ___ \"Guest\") {
  return \"Hello, \" + name;
}`,
    type: "fill-blank",
    answer: "=",
    points: 25,
    explanation: "Default parameters are set using the assignment operator (=) in the function parameter list.",
    tutorialLink: "https://www.w3schools.com/js/js_function_parameters.asp"
  },
  {
    id: 8,
    text: "What is the correct way to check if a variable is NOT undefined?",
    options: [
      "A) if (variable !== undefined)",
      "B) if (typeof variable !== \"undefined\")",
      "C) if (!variable.isUndefined())",
      "D) if (defined(variable))"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "Using typeof prevents errors if the variable hasn't been declared, making option B the safest approach.",
    tutorialLink: "https://www.w3schools.com/js/js_undefined.asp"
  },
  {
    id: 9,
    text: "Complete the code to convert a JSON string to an object:",
    code: `const jsonStr = '{\"name\":\"John\", \"age\":30}';
const person = JSON._____(jsonStr);`,
    type: "fill-blank",
    answer: "parse",
    points: 25,
    explanation: "The JSON.parse() method parses a JSON string and returns a JavaScript object.",
    tutorialLink: "https://www.w3schools.com/js/js_json_parse.asp"
  },
  {
    id: 10,
    text: "Which statement correctly creates a Date object for January 1, 2023?",
    options: [
      "A) new Date(\"2023-01-01\")",
      "B) new Date(2023, 0, 1)",
      "C) Date(\"01/01/2023\")",
      "D) Both A and B are correct"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,
    explanation: "Both formats work: a string in ISO format (\"2023-01-01\") or parameters (year, month, day) where months are zero-indexed (0 is January).",
    tutorialLink: "https://www.w3schools.com/js/js_dates.asp"
  },
  {
    id: 11,
    text: "Complete the code to hide an element by changing its CSS:",
    code: `document.getElementById(\"myElement\").style.___ = \"none\";`,
    type: "fill-blank",
    answer: "display",
    points: 25,
    explanation: "Setting the display property to \"none\" hides an element in the DOM.",
    tutorialLink: "https://www.w3schools.com/js/js_htmldom_css.asp"
  },
  {
    id: 12,
    text: "What is the correct way to write a JavaScript multiline comment?",
    options: [
      "A) // This is a comment //",
      "B) <!-- This is a comment -->",
      "C) /* This is a comment */",
      "D) ** This is a comment **"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "JavaScript uses /* and */ for multiline comments.",
    tutorialLink: "https://www.w3schools.com/js/js_comments.asp"
  },
  {
    id: 13,
    text: "Complete the code to get a random number between 1 and 10:",
    code: `function getRandomNumber() {
  return Math._____(Math.random() * 10) + 1;
}`,
    type: "fill-blank",
    answer: "floor",
    points: 25,
    explanation: "Math.floor() rounds down to the nearest integer. Math.random() * 10 gives a number from 0 to 9.999..., then adding 1 gives a number from 1 to 10.999..., which is floored to 1-10.",
    tutorialLink: "https://www.w3schools.com/js/js_random.asp"
  },
  {
    id: 14,
    text: "What is the result of the following code?",
    code: `let x = 10;
let y = \"10\";
console.log(x == y);`,
    options: [
      "A) true",
      "B) false",
      "C) undefined",
      "D) Error"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The == operator performs type conversion, so a number 10 is considered equal to the string \"10\".",
    tutorialLink: "https://www.w3schools.com/js/js_comparisons.asp"
  },
  {
    id: 15,
    text: "Complete the code to execute a function repeatedly at specified intervals:",
    code: `const intervalId = window._____(function() {
  console.log(\"Hello\");
}, 1000);`,
    type: "fill-blank",
    answer: "setInterval",
    points: 25,
    explanation: "The setInterval() method calls a function repeatedly at specified intervals (in milliseconds).",
    tutorialLink: "https://www.w3schools.com/js/js_timing.asp"
  },
  {
    id: 16,
    text: "Which HTML event is triggered when a user stops typing in an input field?",
    options: [
      "A) onchange",
      "B) onkeyup",
      "C) onblur",
      "D) onstop"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The onkeyup event is triggered when a user releases a key after typing in an input field.",
    tutorialLink: "https://www.w3schools.com/js/js_events.asp"
  },
  {
    id: 17,
    text: "Complete the code to replace all occurrences of a substring in a string:",
    code: `const str = \"Hello World\";
const newStr = str._____(\"o\", \"x\");`,
    type: "fill-blank",
    answer: "replaceAll",
    points: 25,
    explanation: "The replaceAll() method replaces all occurrences of a specified substring with another substring.",
    tutorialLink: "https://www.w3schools.com/js/js_string_methods.asp"
  },
  {
    id: 18,
    text: "What is the correct way to check if a variable is an array?",
    options: [
      "A) typeof variable === \"array\"",
      "B) variable instanceof Array",
      "C) Array.isArray(variable)",
      "D) Both B and C are correct"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,
    explanation: "Both Array.isArray() and the instanceof operator can determine if a variable is an array.",
    tutorialLink: "https://www.w3schools.com/js/js_arrays.asp"
  },
  {
    id: 19,
    text: "Complete the code to combine two arrays:",
    code: `const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1._____(array2);`,
    type: "fill-blank",
    answer: "concat",
    points: 25,
    explanation: "The concat() method is used to merge two or more arrays and returns a new array.",
    tutorialLink: "https://www.w3schools.com/js/js_array_methods.asp"
  },
  {
    id: 20,
    text: "What method is used to execute a function once after a delay?",
    options: [
      "A) wait()",
      "B) setTimeout()",
      "C) setDelay()",
      "D) delay()"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The setTimeout() function executes a specified function once after a specified delay (in milliseconds).",
    tutorialLink: "https://www.w3schools.com/js/js_timing.asp"
  },
  {
    id: 21,
    text: "Complete the code to get the button that was clicked in an event handler:",
    code: `document.querySelectorAll(\"button\").forEach(function(button) {
  button.addEventListener(\"click\", function(event) {
    console.log(___.target);
  });
});`,
    type: "fill-blank",
    answer: "event",
    points: 25,
    explanation: "The event.target property returns the element that triggered the event.",
    tutorialLink: "https://www.w3schools.com/jsref/event_target.asp"
  },
  {
    id: 22,
    text: "What is the purpose of the localStorage object in JavaScript?",
    options: [
      "A) To store data temporarily while the page is loaded",
      "B) To store data that persists across browser sessions",
      "C) To store data on the server",
      "D) To store data for exactly one day"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "localStorage stores data with no expiration date that persists even after the browser is closed and reopened.",
    tutorialLink: "https://www.w3schools.com/js/js_storage.asp"
  },
  {
    id: 23,
    text: "Complete the code to check if a string includes a substring:",
    code: `const message = \"Hello, welcome to JavaScript!\";
const containsJS = message._____(\"JavaScript\");`,
    type: "fill-blank",
    answer: "includes",
    points: 25,
    explanation: "The includes() method determines whether a string contains the specified substring.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_includes.asp"
  },
  {
    id: 24,
    text: "Which method can be used to perform an action for each element in an array?",
    options: [
      "A) every()",
      "B) each()",
      "C) loop()",
      "D) forEach()"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,
    explanation: "The forEach() method executes a provided function once for each array element.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_forEach.asp"
  },
  {
    id: 25,
    text: "Complete the code to get the current year:",
    code: `const currentYear = new Date().___();`,
    type: "fill-blank",
    answer: "getFullYear",
    points: 25,
    explanation: "The getFullYear() method returns the year of the specified date according to local time.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_getfullyear.asp"
  },
  {
    id: 26,
    text: "What is the output of the following code?",
    code: `const arr = [1, 2, 3];
arr[10] = 10;
console.log(arr.length);`,
    options: [
      "A) 3",
      "B) 10",
      "C) 11",
      "D) Error"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "Setting an array element with an index beyond the current length extends the array. The length becomes index + 1, which is 11.",
    tutorialLink: "https://www.w3schools.com/js/js_arrays.asp"
  },
  {
    id: 27,
    text: "Complete the code to split a string into an array of substrings:",
    code: `const names = \"John,Jane,Mark,Lisa\";
const namesArray = names.___(\",\");`,
    type: "fill-blank",
    answer: "split",
    points: 25,
    explanation: "The split() method divides a string into an array of substrings using a specified separator.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_split.asp"
  },
  {
    id: 28,
    text: "Which method creates a new array with all elements that pass a test?",
    options: [
      "A) find()",
      "B) some()",
      "C) filter()",
      "D) select()"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_filter.asp"
  },
  {
    id: 29,
    text: "Complete the code to make the first letter of a string uppercase:",
    code: `function capitalize(str) {
  return str.charAt(0)._____ + str.slice(1);
}`,
    type: "fill-blank",
    answer: "toUpperCase",
    points: 25,
    explanation: "The toUpperCase() method converts a string to uppercase letters.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_touppercase.asp"
  },
  {
    id: 30,
    text: "What is the correct way to create a JavaScript Date object for the current date and time?",
    options: [
      "A) var now = Date.current();",
      "B) var now = new Date();",
      "C) var now = Date.now;",
      "D) var now = Date.today();"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The new Date() constructor creates a Date object representing the current date and time.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_date.asp"
  },
  {
    id: 31,
    text: "Complete the code to check if all array elements pass a test:",
    code: `const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers._____(num => num > 0);`,
    type: "fill-blank",
    answer: "every",
    points: 25,
    explanation: "The every() method tests whether all elements in the array pass the test implemented by the provided function.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_every.asp"
  },
  {
    id: 32,
    text: "What is the purpose of the optional chaining operator (?.) in JavaScript?",
    options: [
      "A) To perform mathematical operations conditionally",
      "B) To access object properties safely without causing an error if a property is undefined",
      "C) To check if a variable exists before using it",
      "D) To create conditional functions"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The optional chaining operator (?.) allows reading the value of a property located deep within a chain of connected objects without having to validate each reference in the chain.",
    tutorialLink: "https://www.w3schools.com/js/js_objects.asp"
  },
  {
    id: 33,
    text: "Complete the code to copy an array:",
    code: `const original = [1, 2, 3];
const copy = [...___];`,
    type: "fill-blank",
    answer: "original",
    points: 25,
    explanation: "The spread operator (...) can be used to create a shallow copy of an array.",
    tutorialLink: "https://www.w3schools.com/js/js_array_methods.asp"
  },
  {
    id: 34,
    text: "Which method is used to sort an array in JavaScript?",
    options: [
      "A) order()",
      "B) arrange()",
      "C) sort()",
      "D) organize()"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The sort() method sorts the elements of an array in place and returns the sorted array.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_sort.asp"
  },
  {
    id: 35,
    text: "Complete the code to remove whitespace from both ends of a string:",
    code: `const username = \"  john.doe  \";
const trimmedUsername = username.___();`,
    type: "fill-blank",
    answer: "trim",
    points: 25,
    explanation: "The trim() method removes whitespace from both ends of a string.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_trim.asp"
  },
  {
    id: 36,
    text: "What does the isNaN() function do?",
    options: [
      "A) Checks if the value is not a number",
      "B) Checks if the value is null",
      "C) Checks if the value is undefined",
      "D) Checks if the value is zero"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The isNaN() function determines whether a value is NaN (Not-a-Number).",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_isnan.asp"
  },
  {
    id: 37,
    text: "Complete the code to find the maximum value in an array of numbers:",
    code: `const numbers = [5, 2, 9, 1, 7];
const max = Math.___(...numbers);`,
    type: "fill-blank",
    answer: "max",
    points: 25,
    explanation: "The Math.max() function returns the largest of the provided numbers.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_max.asp"
  },
  {
    id: 38,
    text: "What will the following code log to the console?",
    code: `let a = 5;
let b = a;
a = 10;
console.log(b);`,
    options: [
      "A) 5",
      "B) 10",
      "C) undefined",
      "D) Error"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "Primitive values like numbers are copied by value, not by reference. Changing a doesn't affect b.",
    tutorialLink: "https://www.w3schools.com/js/js_operators.asp"
  },
  {
    id: 39,
    text: "Complete the code to execute an async function and handle its result:",
    code: `asyncFunction()
  ._____((result) => console.log(result))
  .catch((error) => console.error(error));`,
    type: "fill-blank",
    answer: "then",
    points: 25,
    explanation: "The then() method is used to handle the fulfillment of a Promise returned by an async function.",
    tutorialLink: "https://www.w3schools.com/js/js_async.asp"
  },
  {
    id: 40,
    text: "Which method is used to extract a section of a string?",
    options: [
      "A) slice()",
      "B) cut()",
      "C) section()",
      "D) extract()"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The slice() method extracts a section of a string and returns it as a new string.",
    tutorialLink: "https://www.w3schools.com/jsref/jsref_slice_string.asp"
  }
];

export const examConfig = {
  totalPoints: 1000, // 40 questions × 25 points each
  passingScore: 800,
  timeLimit: 2400, // 1 hour in seconds
  allowedAttempts: Infinity
};