export const questions = [
  {
    id: 1,
    text: "Complete the countdown function:",
    code: `function countdown(start) {
  for (var i=start; i>=0; i-___) {
    console.log(i);
  }
}`,
    type: "fill-blank",
    answer: "--",
    points: 25,
    explanation: "The loop needs to decrement the counter using the -- operator."
  },
  {
    id: 2,
    text: "Which line of code should you use at line 09?",
    options: [
      "A) document.getElementById(\"para\").innerHTML += rooms[i];",
      "B) document.getElementById(\"para\").innerHTML = rooms[i]+ \"<br/>\";",
      "C) document.getElementById(\"para\").innerHTML += rooms[i]+<br/>;",
      "D) document.getElementById(\"para\").innerHTML += rooms[i]+ \"<br/>\";"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,
    explanation: "Option D correctly appends each room with a line break."
  },
  {
    id: 3,
    text: "Which symbol is used for single line comments in JavaScript?",
    options: [
      "A) //",
      "B) /* */",
      "C) #",
      "D) $"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "// is used for single line comments, while /* */ is used for multi-line comments."
  },
  {
    id: 4,
    text: "Complete the code to display 'Hello World' in an alert box:",
    code: `___("Hello World");`,
    type: "fill-blank",
    answer: "alert",
    points: 25,
    explanation: "The alert() function is used to display a dialog box with a message and an OK button."
  },
  {
    id: 5,
    text: "Which function is used to add a new element at the end of an array?",
    options: [
      "A) push()",
      "B) pop()",
      "C) shift()",
      "D) unshift()"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "push() adds elements to the end of an array, while pop() removes from the end, shift() removes from the beginning, and unshift() adds to the beginning."
  },
  {
    id: 6,
    text: "What will be the output of the following code?",
    code: `let x = 5;
console.log(x++);`,
    options: [
      "A) 5",
      "B) 6",
      "C) undefined",
      "D) Error"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The post-increment operator (x++) returns the original value before incrementing. So it prints 5, then x becomes 6."
  },
  {
    id: 7,
    text: "How do you create a function in JavaScript?",
    options: [
      "A) function = myFunction() {}",
      "B) function myFunction() {}",
      "C) function:myFunction() {}",
      "D) create function myFunction() {}"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The correct syntax to create a function in JavaScript is using the 'function' keyword followed by the function name and parentheses."
  },
  {
    id: 8,
    text: "Which event occurs when a user clicks on an HTML element?",
    options: [
      "A) onmouseover",
      "B) onchange",
      "C) onclick",
      "D) onmouseclick"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The onclick event occurs when a user clicks on an HTML element."
  },
  {
    id: 9,
    text: "Complete the code to get the element with ID 'demo':",
    code: `document.___(\"demo\");`,
    type: "fill-blank",
    answer: "getElementById",
    points: 25,
    explanation: "The getElementById() method returns the element with the specified ID."
  },
  {
    id: 10,
    text: "What is the correct syntax for referring to an external JavaScript file?",
    options: [
      "A) <script href=\"script.js\">",
      "B) <script name=\"script.js\">",
      "C) <script src=\"script.js\">",
      "D) <script file=\"script.js\">"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The correct attribute to specify the URL of an external JavaScript file is 'src'."
  },
  {
    id: 11,
    text: "How do you write 'Hello World' in an alert box?",
    options: [
      "A) msgBox(\"Hello World\");",
      "B) alertBox(\"Hello World\");",
      "C) msg(\"Hello World\");",
      "D) alert(\"Hello World\");"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,
    explanation: "The alert() function is used to display a message box with a specified message and an OK button."
  },
  {
    id: 12,
    text: "How do you create a new array in JavaScript?",
    options: [
      "A) var colors = \"red\", \"green\", \"blue\";",
      "B) var colors = (1:\"red\", 2:\"green\", 3:\"blue\");",
      "C) var colors = [\"red\", \"green\", \"blue\"];",
      "D) var colors = 1=(\"red\"), 2=(\"green\"), 3=(\"blue\");"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "Arrays in JavaScript are defined with square brackets [], with elements separated by commas."
  },
  {
    id: 13,
    text: "Complete the code to add an event listener to a button:",
    code: `document.getElementById(\"myBtn\")._____(\"click\", function() {
  alert(\"Button was clicked!\");
});`,
    type: "fill-blank",
    answer: "addEventListener",
    points: 25,
    explanation: "The addEventListener() method attaches an event handler to the specified element."
  },
  {
    id: 14,
    text: "Which operator is used to assign a value to a variable?",
    options: [
      "A) *",
      "B) =",
      "C) ==",
      "D) -"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The equal sign (=) is the assignment operator. == is the equality operator that compares values."
  },
  {
    id: 15,
    text: "How to check if a variable is not equal to a value?",
    options: [
      "A) if (x <> 5)",
      "B) if (x != 5)",
      "C) if (x !== 5)",
      "D) if (x not 5)"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The != operator checks if values are not equal. !== checks if values are not equal or not of the same type."
  },
  {
    id: 16,
    text: "Complete the conditional statement:",
    code: `if (age < 18) {
  result = \"Too young\";
} ___ {
  result = \"Old enough\";
}`,
    type: "fill-blank",
    answer: "else",
    points: 25,
    explanation: "The else statement specifies a block of code to be executed if the condition in the if statement is false."
  },
  {
    id: 17,
    text: "Which method returns the first element that matches a specified CSS selector?",
    options: [
      "A) querySelector()",
      "B) getElementById()",
      "C) getElementsByClassName()",
      "D) getElementsByTagName()"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "querySelector() returns the first element that matches a specified CSS selector."
  },
  {
    id: 18,
    text: "How do you round the number 7.25 to the nearest integer?",
    options: [
      "A) Math.round(7.25)",
      "B) Math.rnd(7.25)",
      "C) round(7.25)",
      "D) rnd(7.25)"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "Math.round() returns the nearest integer to a given number."
  },
  {
    id: 19,
    text: "Complete the template literal syntax:",
    code: `let name = \"John\";
let greeting = \`Hello, ___\`;`,
    type: "fill-blank",
    answer: "${name}",
    points: 25,
    explanation: "Template literals use ${expression} to embed expressions within the string."
  },
  {
    id: 20,
    text: "Which method is used to remove the last element from an array?",
    options: [
      "A) last()",
      "B) get()",
      "C) pop()",
      "D) remove()"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The pop() method removes the last element from an array and returns that element."
  },
  {
    id: 21,
    text: "How to declare a JavaScript object?",
    options: [
      "A) var person = Object();",
      "B) var person = {};",
      "C) var person = [];",
      "D) var person = new Array();"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "Objects in JavaScript can be created using object literals, which are defined with curly braces {}."
  },
  {
    id: 22,
    text: "Complete the code to convert a string to a number:",
    code: `let num = ___(\"42\");`,
    type: "fill-blank",
    answer: "parseInt",
    points: 25,
    explanation: "The parseInt() function parses a string and returns an integer. Another valid answer could be Number."
  },
  {
    id: 23,
    text: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "A) The current function",
      "B) The global object",
      "C) The object the function is a property of",
      "D) It depends on how the function is called"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,
    explanation: "The value of 'this' depends on how a function is called. It can refer to different objects depending on the context."
  },
  {
    id: 24,
    text: "Which method is used to serialize an object into a JSON string?",
    options: [
      "A) JSON.parse()",
      "B) JSON.stringify()",
      "C) JSON.toText()",
      "D) JSON.toString()"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "JSON.stringify() converts a JavaScript object into a JSON string."
  },
  {
    id: 25,
    text: "Complete the code to handle errors:",
    code: `try {
  // Code that might throw an error
} ___ (error) {
  console.log(error.message);
}`,
    type: "fill-blank",
    answer: "catch",
    points: 25,
    explanation: "The catch statement lets you handle the error if an exception is thrown in the try block."
  },
  {
    id: 26,
    text: "What is the output of: typeof []?",
    options: [
      "A) \"array\"",
      "B) \"object\"",
      "C) \"undefined\"",
      "D) \"null\""
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "In JavaScript, arrays are a type of object, so typeof [] returns \"object\"."
  },
  {
    id: 27,
    text: "Which method removes the first element of an array?",
    options: [
      "A) shift()",
      "B) unshift()",
      "C) pop()",
      "D) splice()"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The shift() method removes the first element from an array and returns that element."
  },
  {
    id: 28,
    text: "Complete the loop that iterates over array elements:",
    code: `const fruits = [\"apple\", \"banana\", \"orange\"];
for (___ fruit of fruits) {
  console.log(fruit);
}`,
    type: "fill-blank",
    answer: "let",
    points: 25,
    explanation: "The for...of loop needs a variable declaration with let, const, or var to store each array element during iteration."
  },
  {
    id: 29,
    text: "How do you access the value of a property in a JavaScript object?",
    options: [
      "A) person->name",
      "B) person.name or person[\"name\"]",
      "C) person=>name",
      "D) person::name"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "In JavaScript, object properties can be accessed using dot notation (object.property) or bracket notation (object[\"property\"])."
  },
  {
    id: 30,
    text: "Which function is used to execute code after a specified time interval?",
    options: [
      "A) setTimeout()",
      "B) setInterval()",
      "C) delay()",
      "D) sleep()"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "setTimeout() executes a function once after a specified delay. setInterval() repeatedly executes a function."
  },
  {
    id: 31,
    text: "Complete the code to select all paragraph elements:",
    code: `const paragraphs = document._____(\"p\");`,
    type: "fill-blank",
    answer: "querySelectorAll",
    points: 25,
    explanation: "querySelectorAll() returns all elements that match the specified CSS selector."
  },
  {
    id: 32,
    text: "Which method is used to join the elements of an array into a string?",
    options: [
      "A) concat()",
      "B) merge()",
      "C) join()",
      "D) combine()"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The join() method joins all elements of an array into a string and returns this string."
  },
  {
    id: 33,
    text: "What is the spread operator in JavaScript?",
    options: [
      "A) ...",
      "B) ***",
      "C) &&&",
      "D) ==="
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The spread syntax (...) allows an iterable to be expanded in places where zero or more arguments or elements are expected."
  },
  {
    id: 34,
    text: "Complete the code to create a promise:",
    code: `const myPromise = new ___(function(resolve, reject) {
  // async operation
});`,
    type: "fill-blank",
    answer: "Promise",
    points: 25,
    explanation: "A Promise object represents a value that may not be available yet but will be resolved at some point in the future."
  },
  {
    id: 35,
    text: "Which method is used to find an element in an array that satisfies a condition?",
    options: [
      "A) filter()",
      "B) find()",
      "C) search()",
      "D) locate()"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The find() method returns the first element in an array that passes a test function."
  },
  {
    id: 36,
    text: "What is the result of 10 + '5' in JavaScript?",
    options: [
      "A) 15",
      "B) \"105\"",
      "C) Error",
      "D) \"10+5\""
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "When a number is added to a string, JavaScript converts the number to a string and performs string concatenation, resulting in \"105\"."
  },
  {
    id: 37,
    text: "Complete the code to destructure an array:",
    code: `const numbers = [1, 2, 3, 4, 5];
const [first, second, ...___] = numbers;`,
    type: "fill-blank",
    answer: "rest",
    points: 25,
    explanation: "The rest parameter syntax (...) collects the remaining elements of an array. Any variable name can be used, but 'rest' is common."
  },
  {
    id: 38,
    text: "Which keyword is used to declare a block-scoped variable that cannot be reassigned?",
    options: [
      "A) var",
      "B) let",
      "C) const",
      "D) fixed"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The const keyword declares a block-scoped variable that cannot be reassigned after declaration."
  },
  {
    id: 39,
    text: "Complete the arrow function:",
    code: `const multiply = (a, b) ___ a * b;`,
    type: "fill-blank",
    answer: "=>",
    points: 25,
    explanation: "The arrow function syntax uses => to separate the parameter list from the function body."
  },
  {
    id: 40,
    text: "Which method creates a new array with the results of calling a provided function on every element?",
    options: [
      "A) forEach()",
      "B) map()",
      "C) reduce()",
      "D) filter()"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The map() method creates a new array with the results of calling a function on every element in the original array."
  }
];

export const examConfig = {
  totalPoints: 1000, // 40 questions × 25 points each
  passingScore: 800,
  timeLimit: 3600, // 1 hour in seconds
  allowedAttempts: 3
};