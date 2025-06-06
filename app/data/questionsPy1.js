export const questions = [
  {
    id: 1,
    text: "Complete the function to print numbers in reverse order:",
    code: `def countdown(start):
  for i in range(start, -1, ___):
    print(i)`,
    type: "fill-blank",
    answer: "-1",
    points: 25,
    explanation: "In Python's range() function, the third parameter specifies the step value. Using -1 makes it count down by 1.",
    tutorialLink: "https://www.w3schools.com/python/python_for_loops.asp"
  },
  {
    id: 2,
    text: "Which line of code will correctly append an item to a list?",
    options: [
      "A) my_list.add(item)",
      "B) my_list.append(item)",
      "C) my_list.insert(item)",
      "D) my_list.push(item)"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The append() method is used to add an item to the end of a list in Python.",
    tutorialLink: "https://www.w3schools.com/python/python_lists.asp"
  },
  {
    id: 3,
    text: "What symbol is used for single-line comments in Python?",
    options: [
      "A) //",
      "B) /* */",
      "C) #",
      "D) --"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "Python uses the hash symbol (#) for single-line comments. Multi-line comments use triple quotes (''' or \"\"\").",
    tutorialLink: "https://www.w3schools.com/python/python_comments.asp"
  },
  {
    id: 4,
    text: "Complete the code to display a message to the user:",
    code: `___(\"Hello, welcome to Python!\")`,
    type: "fill-blank",
    answer: "print",
    points: 25,
    explanation: "The print() function is used to display output to the console in Python.",
    tutorialLink: "https://www.w3schools.com/python/ref_func_print.asp"
  },
  {
    id: 5,
    text: "Which method is used to get the length of a list?",
    options: [
      "A) list.size()",
      "B) list.length()",
      "C) len(list)",
      "D) list.count()"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The len() function is used to get the number of items in a list, string, or other sequence types in Python.",
    tutorialLink: "https://www.w3schools.com/python/ref_func_len.asp"
  },
  {
    id: 6,
    text: "What will be the output of the following code?",
    code: `x = 5
print(x)
x += 1`,
    options: [
      "A) 5",
      "B) 6",
      "C) undefined",
      "D) Error"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The code first assigns 5 to x, then prints the value of x (which is 5), and finally increments x by 1. But the incremented value is not printed.",
    tutorialLink: "https://www.w3schools.com/python/python_operators.asp"
  },
  {
    id: 7,
    text: "How do you define a function in Python?",
    options: [
      "A) function myFunction(): {}",
      "B) def myFunction(): pass",
      "C) define myFunction(): pass",
      "D) func myFunction(): pass"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "In Python, functions are defined using the 'def' keyword followed by the function name, parameters in parentheses, and a colon.",
    tutorialLink: "https://www.w3schools.com/python/python_functions.asp"
  },
  {
    id: 8,
    text: "Which data structure is used to store key-value pairs in Python?",
    options: [
      "A) list",
      "B) tuple",
      "C) dictionary",
      "D) set"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "Dictionaries in Python store data as key-value pairs and are defined using curly braces {}.",
    tutorialLink: "https://www.w3schools.com/python/python_dictionaries.asp"
  },
  {
    id: 9,
    text: "Complete the code to open a file for reading:",
    code: `with ___(\"data.txt\", \"r\") as file:
    content = file.read()`,
    type: "fill-blank",
    answer: "open",
    points: 25,
    explanation: "The open() function is used to open files in Python. The 'r' parameter specifies read mode.",
    tutorialLink: "https://www.w3schools.com/python/python_file_open.asp"
  },
  {
    id: 10,
    text: "What is the correct way to import a module in Python?",
    options: [
      "A) include math",
      "B) #include <math>",
      "C) import math",
      "D) using math"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The import statement is used to import modules in Python. You can import the entire module or specific functions.",
    tutorialLink: "https://www.w3schools.com/python/python_modules.asp"
  },
  {
    id: 11,
    text: "How do you create a list in Python?",
    options: [
      "A) list = (1, 2, 3)",
      "B) list = {1, 2, 3}",
      "C) list = [1, 2, 3]",
      "D) list = <1, 2, 3>"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "Lists in Python are created using square brackets [] with elements separated by commas.",
    tutorialLink: "https://www.w3schools.com/python/python_lists.asp"
  },
  {
    id: 12,
    text: "Which method is used to add an element to a set?",
    options: [
      "A) set.add(element)",
      "B) set.append(element)",
      "C) set.insert(element)",
      "D) set.push(element)"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The add() method is used to add an element to a set in Python. Unlike lists, sets don't have append() or insert() methods.",
    tutorialLink: "https://www.w3schools.com/python/python_sets.asp"
  },
  {
    id: 13,
    text: "Complete the code for list comprehension that creates a list of squares:",
    code: `squares = [x**2 ___ x in range(10)]`,
    type: "fill-blank",
    answer: "for",
    points: 25,
    explanation: "In a list comprehension, the 'for' keyword is used to specify the iteration part.",
    tutorialLink: "https://www.w3schools.com/python/python_lists_comprehension.asp"
  },
  {
    id: 14,
    text: "Which operator is used for exponentiation in Python?",
    options: [
      "A) ^",
      "B) **",
      "C) //",
      "D) %%"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "In Python, the ** operator is used for exponentiation. For example, 2**3 equals 8.",
    tutorialLink: "https://www.w3schools.com/python/python_operators.asp"
  },
  {
    id: 15,
    text: "How do you check if two variables are equal in value and type?",
    options: [
      "A) if a == b:",
      "B) if a === b:",
      "C) if a is b:",
      "D) if a equals b:"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The 'is' operator checks if two variables refer to the same object in memory. For value comparison, use the '==' operator.",
    tutorialLink: "https://www.w3schools.com/python/python_operators.asp"
  },
  {
    id: 16,
    text: "Complete the conditional statement:",
    code: `if age < 18:
    print(\"Too young\")
___ age < 65:
    print(\"Working age\")
else:
    print(\"Retirement age\")`,
    type: "fill-blank",
    answer: "elif",
    points: 25,
    explanation: "In Python, 'elif' is short for 'else if' and is used for multiple conditional statements.",
    tutorialLink: "https://www.w3schools.com/python/python_conditions.asp"
  },
  {
    id: 17,
    text: "Which module is used for working with regular expressions in Python?",
    options: [
      "A) regex",
      "B) re",
      "C) regexp",
      "D) pyregex"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The 're' module provides support for regular expressions in Python.",
    tutorialLink: "https://www.w3schools.com/python/python_regex.asp"
  },
  {
    id: 18,
    text: "How do you round a number to the nearest integer in Python?",
    options: [
      "A) math.round(7.25)",
      "B) round(7.25)",
      "C) int(7.25)",
      "D) ceil(7.25)"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The round() function rounds a number to the nearest integer. int() truncates the decimal part.",
    tutorialLink: "https://www.w3schools.com/python/ref_func_round.asp"
  },
  {
    id: 19,
    text: "Complete the f-string syntax:",
    code: `name = \"Alice\"
greeting = f\"Hello, ___\"`,
    type: "fill-blank",
    answer: "{name}",
    points: 25,
    explanation: "F-strings use {variable} syntax to embed expressions inside string literals.",
    tutorialLink: "https://www.w3schools.com/python/python_string_formatting.asp"
  },
  {
    id: 20,
    text: "Which method is used to remove and return the last element from a list?",
    options: [
      "A) list.last()",
      "B) list.get()",
      "C) list.pop()",
      "D) list.remove()"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The pop() method removes and returns the last element from a list by default, or a specified index.",
    tutorialLink: "https://www.w3schools.com/python/ref_list_pop.asp"
  },
  {
    id: 21,
    text: "How do you create an empty dictionary in Python?",
    options: [
      "A) dict()",
      "B) {}",
      "C) []",
      "D) Both A and B"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,
    explanation: "You can create an empty dictionary using either the dict() constructor or empty curly braces {}.",
    tutorialLink: "https://www.w3schools.com/python/python_dictionaries.asp"
  },
  {
    id: 22,
    text: "Complete the code to convert a string to an integer:",
    code: `num = ___(\"42\")`,
    type: "fill-blank",
    answer: "int",
    points: 25,
    explanation: "The int() function converts a string or number to an integer.",
    tutorialLink: "https://www.w3schools.com/python/python_numbers.asp"
  },
  {
    id: 23,
    text: "What does the 'self' parameter refer to in a class method?",
    options: [
      "A) The class itself",
      "B) The instance of the class",
      "C) The parent class",
      "D) The global namespace"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "In Python class methods, 'self' refers to the instance of the class that the method is called on.",
    tutorialLink: "https://www.w3schools.com/python/python_classes.asp"
  },
  {
    id: 24,
    text: "Which module is used to work with JSON data in Python?",
    options: [
      "A) jsonlib",
      "B) json",
      "C) pyjson",
      "D) jsonparser"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The built-in 'json' module provides functions for working with JSON data, such as json.dumps() and json.loads().",
    tutorialLink: "https://www.w3schools.com/python/python_json.asp"
  },
  {
    id: 25,
    text: "Complete the code to handle exceptions:",
    code: `try:
    # Code that might raise an exception
___ FileNotFoundError:
    print(\"File not found!\")`,
    type: "fill-blank",
    answer: "except",
    points: 25,
    explanation: "The except clause catches and handles exceptions raised in the try block.",
    tutorialLink: "https://www.w3schools.com/python/python_try_except.asp"
  },
  {
    id: 26,
    text: "What is the result of type([]) in Python?",
    options: [
      "A) 'array'",
      "B) 'list'",
      "C) <class 'list'>",
      "D) <class 'array'>"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "In Python, type([]) returns <class 'list'>, indicating that [] is an instance of the list class.",
    tutorialLink: "https://www.w3schools.com/python/ref_func_type.asp"
  },
  {
    id: 27,
    text: "Which method is used to remove an item from a list by its index?",
    options: [
      "A) list.remove(index)",
      "B) list.pop(index)",
      "C) list.delete(index)",
      "D) list.discard(index)"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The pop(index) method removes and returns the item at the specified index. If no index is specified, it removes the last item.",
    tutorialLink: "https://www.w3schools.com/python/ref_list_pop.asp"
  },
  {
    id: 28,
    text: "Complete the code to iterate over a dictionary:",
    code: `for key, value ___ my_dict.items():
    print(f\"{key}: {value}\")`,
    type: "fill-blank",
    answer: "in",
    points: 25,
    explanation: "The 'in' keyword is used in for loops to iterate over sequences, including dictionary items.",
    tutorialLink: "https://www.w3schools.com/python/python_dictionaries_loop.asp"
  },
  {
    id: 29,
    text: "How do you access the value of a key in a dictionary?",
    options: [
      "A) dict->key",
      "B) dict.key or dict[\"key\"]",
      "C) dict[\"key\"]",
      "D) dict.get(\"key\")"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,
    explanation: "Both dict[\"key\"] and dict.get(\"key\") access values, but get() is safer as it returns None (or a default value) if the key doesn't exist.",
    tutorialLink: "https://www.w3schools.com/python/ref_dictionary_get.asp"
  },
  {
    id: 30,
    text: "Which function is used to introduce a delay in Python programs?",
    options: [
      "A) time.sleep()",
      "B) delay()",
      "C) wait()",
      "D) python.sleep()"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The sleep() function from the time module pauses execution for the specified number of seconds.",
    tutorialLink: "https://www.w3schools.com/python/python_datetime.asp"
  },
  {
    id: 31,
    text: "Complete the code to select all elements from a list with even indices:",
    code: `my_list = [10, 20, 30, 40, 50]
even_indices = my_list[___]`,
    type: "fill-blank",
    answer: "::2",
    points: 25,
    explanation: "The slice notation ::2 selects every second element, starting from index 0 (i.e., elements with even indices).",
    tutorialLink: "https://www.w3schools.com/python/python_lists_slicing.asp"
  },
  {
    id: 32,
    text: "Which method is used to join elements of a list into a string?",
    options: [
      "A) \"-\".concat(my_list)",
      "B) \"-\".join(my_list)",
      "C) my_list.join(\"-\")",
      "D) combine(my_list, \"-\")"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The join() method is called on a string separator and takes an iterable as an argument, joining its elements with the separator.",
    tutorialLink: "https://www.w3schools.com/python/ref_string_join.asp"
  },
  {
    id: 33,
    text: "What is the correct way to unpack a list or tuple in Python?",
    options: [
      "A) a, b, c = [1, 2, 3]",
      "B) a + b + c = [1, 2, 3]",
      "C) unpack(a, b, c) = [1, 2, 3]",
      "D) [a, b, c] = [1, 2, 3]"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "Python supports unpacking sequences directly into variables using syntax like a, b, c = [1, 2, 3].",
    tutorialLink: "https://www.w3schools.com/python/python_tuples_unpack.asp"
  },
  {
    id: 34,
    text: "Complete the code to define a class with a constructor:",
    code: `class Person:
    def ___(self, name, age):
        self.name = name
        self.age = age`,
    type: "fill-blank",
    answer: "__init__",
    points: 25,
    explanation: "The __init__ method is the constructor in Python classes, called when an instance is created.",
    tutorialLink: "https://www.w3schools.com/python/python_classes.asp"
  },
  {
    id: 35,
    text: "Which function returns the first element in a list that satisfies a condition?",
    options: [
      "A) filter()",
      "B) find()",
      "C) next(filter())",
      "D) list.find()"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "Python doesn't have a direct find() method. You can use next() with filter() or a list comprehension with a condition.",
    tutorialLink: "https://www.w3schools.com/python/ref_func_filter.asp"
  },
  {
    id: 36,
    text: "What is the result of '10' + 5 in Python?",
    options: [
      "A) 15",
      "B) '105'",
      "C) Error",
      "D) '10+5'"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "In Python, you cannot add a string and an integer directly. This raises a TypeError. You would need to convert types first.",
    tutorialLink: "https://www.w3schools.com/python/python_casting.asp"
  },
  {
    id: 37,
    text: "Complete the code to unpack a list with unknown length:",
    code: `first, second, *___ = [1, 2, 3, 4, 5]`,
    type: "fill-blank",
    answer: "rest",
    points: 25,
    explanation: "The asterisk (*) syntax collects the remaining elements of a sequence. Any variable name can be used, but 'rest' is common.",
    tutorialLink: "https://www.w3schools.com/python/python_arrays.asp"
  },
  {
    id: 38,
    text: "Which Python feature allows you to create reusable, stateless functions?",
    options: [
      "A) Decorators",
      "B) Generators",
      "C) Lambda functions",
      "D) Magic methods"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "Lambda functions are small anonymous functions defined with the lambda keyword, typically used for simple operations.",
    tutorialLink: "https://www.w3schools.com/python/python_lambda.asp"
  },
  {
    id: 39,
    text: "Complete the lambda function:",
    code: `multiply = ___ x, y: x * y`,
    type: "fill-blank",
    answer: "lambda",
    points: 25,
    explanation: "Lambda functions are defined using the 'lambda' keyword, followed by parameters, a colon, and the expression.",
    tutorialLink: "https://www.w3schools.com/python/python_lambda.asp"
  },
  {
    id: 40,
    text: "Which method transforms each element in a list to create a new list?",
    options: [
      "A) list.each()",
      "B) map()",
      "C) list.transform()",
      "D) list.apply()"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The map() function applies a given function to each item in an iterable and returns an iterator of results.",
    tutorialLink: "https://www.w3schools.com/python/ref_func_map.asp"
  }
];

export const examConfig = {
  totalPoints: 1000, // 40 questions × 25 points each
  passingScore: 800,
  timeLimit: 2400, // 1 hour in seconds
  allowedAttempts: Infinity
};