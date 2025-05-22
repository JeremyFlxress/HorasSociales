export const questions = [
  {
    id: 1,
    text: "Complete the function to find the maximum value in a list:",
    code: `def find_max(numbers):
    max_value = numbers[0]
    for num in numbers:
        if num > ___:
            max_value = num
    return max_value`,
    type: "fill-blank",
    answer: "max_value",
    points: 25,
    explanation: "The function compares each number with the current max_value and updates it if a larger value is found.",
    tutorialLink: "https://www.w3schools.com/python/python_functions.asp"
  },
  {
    id: 2,
    text: "Which method is used to remove a specific item from a list?",
    options: [
      "A) list.delete(item)",
      "B) list.remove(item)",
      "C) list.discard(item)",
      "D) list.erase(item)"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The remove() method removes the first occurrence of the specified item from a list.",
    tutorialLink: "https://www.w3schools.com/python/python_lists_methods.asp"
  },
  {
    id: 3,
    text: "How do you convert a string to lowercase in Python?",
    options: [
      "A) str.toLower()",
      "B) str.lowercase()",
      "C) str.lower()",
      "D) lowercase(str)"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,    explanation: "The lower() method returns a string where all characters are lowercase.",
    tutorialLink: "https://www.w3schools.com/python/ref_string_lower.asp"
  },
  {
    id: 4,
    text: "Complete the code to split a string into a list:",
    code: `sentence = "Python is awesome"
words = sentence.___()`,
    type: "fill-blank",
    answer: "split",
    points: 25,    explanation: "The split() method splits a string into a list. By default, it splits on whitespace.",
    tutorialLink: "https://www.w3schools.com/python/ref_string_split.asp"
  },
  {
    id: 5,
    text: "Which operator is used for floor division in Python?",
    options: [
      "A) /",
      "B) %",
      "C) //",
      "D) **"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,    explanation: "The // operator performs floor division, which divides and rounds down to the nearest integer.",
    tutorialLink: "https://www.w3schools.com/python/python_operators.asp"
  },
  {
    id: 6,
    text: "What will be the output of the following code?",
    code: `a = [1, 2, 3]
b = a
b.append(4)
print(a)`,
    options: [
      "A) [1, 2, 3]",
      "B) [1, 2, 3, 4]",
      "C) [4, 1, 2, 3]",
      "D) Error"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,    explanation: "In Python, assigning a list to a new variable creates a reference to the same list, not a copy. Changes to b affect a.",
    tutorialLink: "https://www.w3schools.com/python/python_lists.asp"
  },
  {
    id: 7,
    text: "How do you check if a specific key exists in a dictionary?",
    options: [
      "A) if key in dict:",
      "B) if dict.contains(key):",
      "C) if dict.hasKey(key):",
      "D) if dict.exists(key):"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,    explanation: "The 'in' operator can be used to check if a key exists in a dictionary.",
    tutorialLink: "https://www.w3schools.com/python/python_dictionaries.asp"
  },
  {
    id: 8,
    text: "Which data type is immutable in Python?",
    options: [
      "A) List",
      "B) Dictionary",
      "C) Set",
      "D) Tuple"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,    explanation: "Tuples are immutable, meaning their elements cannot be changed after creation.",
    tutorialLink: "https://www.w3schools.com/python/python_tuples.asp"
  },
  {
    id: 9,
    text: "Complete the code to generate a random integer between 1 and 10:",
    code: `import random
num = random.___(1, 10)`,
    type: "fill-blank",
    answer: "randint",
    points: 25,    explanation: "The randint() function from the random module generates a random integer between the specified values (inclusive).",
    tutorialLink: "https://www.w3schools.com/python/module_random.asp"
  },
  {
    id: 10,
    text: "Which function is used to sort a list in place?",
    options: [
      "A) sorted(list)",
      "B) list.sort()",
      "C) list.order()",
      "D) order(list)"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,    explanation: "The sort() method sorts a list in place (modifies the original list), while sorted() returns a new sorted list.",
    tutorialLink: "https://www.w3schools.com/python/ref_list_sort.asp"
  },
  {
    id: 11,
    text: "What's the result of bool(0) in Python?",
    options: [
      "A) True",
      "B) False",
      "C) None",
      "D) Error"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,    explanation: "In Python, integers like 0, empty collections, None, and empty strings are considered False when converted to boolean.",
    tutorialLink: "https://www.w3schools.com/python/python_booleans.asp"
  },
  {
    id: 12,
    text: "Which method adds multiple items to a list at once?",
    options: [
      "A) list.append(items)",
      "B) list.add(items)",
      "C) list.extend(items)",
      "D) list.insert(items)"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,    explanation: "The extend() method adds all elements of an iterable to the end of the list.",
    tutorialLink: "https://www.w3schools.com/python/ref_list_extend.asp"
  },
  {
    id: 13,
    text: "Complete the code for a while loop:",
    code: `i = 0
___ i < 5:
    print(i)
    i += 1`,
    type: "fill-blank",
    answer: "while",
    points: 25,    explanation: "The while keyword is used to create a loop that continues as long as the specified condition is true.",
    tutorialLink: "https://www.w3schools.com/python/python_while_loops.asp"
  },
  {
    id: 14,
    text: "Which operator is used for string concatenation in Python?",
    options: [
      "A) +",
      "B) &",
      "C) .",
      "D) ||"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,    explanation: "The + operator is used to concatenate strings in Python.",
    tutorialLink: "https://www.w3schools.com/python/python_strings.asp"
  },
  {
    id: 15,
    text: "Which method checks if a string starts with a specified prefix?",
    options: [
      "A) string.beginsWith(prefix)",
      "B) string.hasPrefix(prefix)",
      "C) string.startsWith(prefix)",
      "D) string.starts_with(prefix)"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,    explanation: "The startswith() method returns True if a string starts with the specified prefix.",
    tutorialLink: "https://www.w3schools.com/python/ref_string_startswith.asp"
  },
  {
    id: 16,
    text: "Complete the code to check if a variable is None:",
    code: `if x ___ None:
    print("x is None")`,
    type: "fill-blank",
    answer: "is",
    points: 25,    explanation: "The 'is' operator checks for identity (if two variables reference the same object). It's recommended to use 'is' with None.",
    tutorialLink: "https://www.w3schools.com/python/ref_keyword_none.asp"
  },
  {
    id: 17,
    text: "Which function returns a copy of a string with whitespace removed from both ends?",
    options: [
      "A) string.trim()",
      "B) string.strip()",
      "C) string.clean()",
      "D) string.clear()"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,    explanation: "The strip() method removes whitespace from both ends of a string.",
    tutorialLink: "https://www.w3schools.com/python/ref_string_strip.asp"
  },
  {
    id: 18,
    text: "How do you get the absolute value of a number in Python?",
    options: [
      "A) Math.abs(x)",
      "B) absolute(x)",
      "C) abs(x)",
      "D) x.abs()"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,    explanation: "The abs() function returns the absolute value of a number.",
    tutorialLink: "https://www.w3schools.com/python/ref_func_abs.asp"
  },
  {
    id: 19,
    text: "Complete the string method to replace characters in a string:",
    code: `text = "Hello world"
new_text = text.___("world", "Python")`,
    type: "fill-blank",
    answer: "replace",
    points: 25,    explanation: "The replace() method returns a copy of the string with occurrences of the old substring replaced by the new substring.",
    tutorialLink: "https://www.w3schools.com/python/ref_string_replace.asp"
  },
  {
    id: 20,
    text: "Which method removes and returns an item at a specific index from a list?",
    options: [
      "A) list.get(index)",
      "B) list.extract(index)",
      "C) list.pop(index)",
      "D) list.pull(index)"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,    explanation: "The pop() method removes and returns the item at the specified index. If no index is specified, it removes the last item.",
    tutorialLink: "https://www.w3schools.com/python/ref_list_pop.asp"
  },
  {
    id: 21,
    text: "How do you create a copy of a list in Python?",
    options: [
      "A) list_copy = list",
      "B) list_copy = list.copy()",
      "C) list_copy = copy(list)",
      "D) list_copy = new list()"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,    explanation: "The copy() method creates a shallow copy of a list. Alternatives include list[:], list(original_list), or copy.copy(list).",
    tutorialLink: "https://www.w3schools.com/python/ref_list_copy.asp"
  },
  {
    id: 22,
    text: "Complete the code to find the length of a string:",
    code: `text = "Python"
length = ___(text)`,
    type: "fill-blank",
    answer: "len",
    points: 25,    explanation: "The len() function returns the number of items in an object, such as characters in a string.",
    tutorialLink: "https://www.w3schools.com/python/ref_func_len.asp"
  },
  {
    id: 23,
    text: "What keyword is used to define a base case in a recursive function?",
    options: [
      "A) base",
      "B) case",
      "C) default",
      "D) if"
    ],
    type: "multiple-choice",
    answer: "D",
    points: 25,    explanation: "Recursive functions typically use 'if' statements to define base cases that stop the recursion.",
    tutorialLink: "https://www.w3schools.com/python/python_functions.asp"
  },
  {
    id: 24,
    text: "Which module provides mathematical functions in Python?",
    options: [
      "A) mathematics",
      "B) math",
      "C) calc",
      "D) mathlib"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,    explanation: "The 'math' module provides mathematical functions like sin(), cos(), sqrt(), etc.",
    tutorialLink: "https://www.w3schools.com/python/module_math.asp"
  },
  {
    id: 25,
    text: "Complete the code to iterate through a range of numbers:",
    code: `for i ___ range(1, 6):
    print(i)`,
    type: "fill-blank",
    answer: "in",
    points: 25,    explanation: "The 'in' keyword is used in for loops to iterate over sequences like ranges, lists, and strings.",
    tutorialLink: "https://www.w3schools.com/python/python_for_loops.asp"
  },
  {
    id: 26,
    text: "What is the result of 7 % 3 in Python?",
    options: [
      "A) 1",
      "B) 2",
      "C) 2.33",
      "D) 0"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,    explanation: "The % operator returns the remainder of division. 7 divided by 3 is 2 with a remainder of 1.",
    tutorialLink: "https://www.w3schools.com/python/python_operators.asp"
  },
  {
    id: 27,
    text: "Which method checks if all characters in a string are alphabetic?",
    options: [
      "A) str.alpha()",
      "B) str.isalpha()",
      "C) str.alphabetic()",
      "D) alpha(str)"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,    explanation: "The isalpha() method returns True if all characters in the string are alphabetic (letters).",
    tutorialLink: "https://www.w3schools.com/python/ref_string_isalpha.asp"
  },
  {
    id: 28,
    text: "Complete the code to create a set from a list:",
    code: `my_list = [1, 2, 2, 3, 4, 4, 5]
unique_items = ___(my_list)`,
    type: "fill-blank",
    answer: "set",
    points: 25,
    explanation: "The set() function creates a set object from an iterable, removing duplicates in the process.",
    tutorialLink: "https://www.w3schools.com/python/python_sets.asp"
  },
  {
    id: 29,
    text: "How do you access the second element of a list?",
    options: [
      "A) list[1]",
      "B) list[2]",
      "C) list.get(2)",
      "D) list.at(1)"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "Python uses zero-based indexing, so the second element has index 1.",
    tutorialLink: "https://www.w3schools.com/python/python_lists_access.asp"
  },
  {
    id: 30,
    text: "Which function can be used to find the maximum value in a sequence?",
    options: [
      "A) large()",
      "B) maximum()",
      "C) max()",
      "D) highest()"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The max() function returns the largest item in an iterable or the largest of multiple arguments.",
    tutorialLink: "https://www.w3schools.com/python/ref_func_max.asp"
  },
  {
    id: 31,
    text: "Complete the code to count occurrences of a substring:",
    code: `text = "Mississippi"
count = text.___("s")`,
    type: "fill-blank",
    answer: "count",
    points: 25,
    explanation: "The count() method returns the number of times a specified value appears in the string.",
    tutorialLink: "https://www.w3schools.com/python/ref_string_count.asp"
  },
  {
    id: 32,
    text: "Which statement is used to exit a loop prematurely?",
    options: [
      "A) exit",
      "B) stop",
      "C) break",
      "D) continue"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The break statement terminates the current loop and resumes execution at the next statement after the loop.",
    tutorialLink: "https://www.w3schools.com/python/python_break.asp"
  },
  {
    id: 33,
    text: "What is the purpose of the pass statement in Python?",
    options: [
      "A) To skip the rest of the code",
      "B) To act as a placeholder",
      "C) To return from a function",
      "D) To terminate a program"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The pass statement is a null operation; it does nothing. It's used as a placeholder where syntactically code is required.",
    tutorialLink: "https://www.w3schools.com/python/ref_keyword_pass.asp"
  },
  {
    id: 34,
    text: "Complete the code to read lines from a file:",
    code: `with open("file.txt", "r") as file:
    lines = file.___()`,
    type: "fill-blank",
    answer: "readlines",
    points: 25,
    explanation: "The readlines() method returns a list containing each line in the file as a list item.",
    tutorialLink: "https://www.w3schools.com/python/python_file_handling.asp"
  },
  {
    id: 35,
    text: "Which method is used to add an element at a specific position in a list?",
    options: [
      "A) list.append(pos, item)",
      "B) list.add(pos, item)",
      "C) list.insert(pos, item)",
      "D) list.put(pos, item)"
    ],
    type: "multiple-choice",
    answer: "C",
    points: 25,
    explanation: "The insert() method adds an element at the specified position in a list.",
    tutorialLink: "https://www.w3schools.com/python/ref_list_insert.asp"
  },
  {
    id: 36,
    text: "What will be the output of this conditional expression?",
    code: `x = 5
y = 10 if x > 3 else 0
print(y)`,
    options: [
      "A) 5",
      "B) 10",
      "C) 0",
      "D) Error"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "This is a ternary operator in Python. Since the condition x > 3 is True, y gets the value 10.",
    tutorialLink: "https://www.w3schools.com/python/python_conditions.asp"
  },
  {
    id: 37,
    text: "Complete the code to create a reversed copy of a list:",
    code: `original = [1, 2, 3, 4, 5]
reversed_list = original[___]`,
    type: "fill-blank",
    answer: "::-1",
    points: 25,
    explanation: "The slice notation ::-1 creates a copy of the list in reverse order.",
    tutorialLink: "https://www.w3schools.com/python/python_lists_slicing.asp"
  },
  {
    id: 38,
    text: "Which function converts a value to a string in Python?",
    options: [
      "A) text()",
      "B) str()",
      "C) string()",
      "D) toString()"
    ],
    type: "multiple-choice",
    answer: "B",
    points: 25,
    explanation: "The str() function converts a specified value to a string.",
    tutorialLink: "https://www.w3schools.com/python/python_strings.asp"
  },
  {
    id: 39,
    text: "Complete the dictionary comprehension:",
    code: `squares = {x: x**2 ___ x in range(5)}`,
    type: "fill-blank",
    answer: "for",
    points: 25,
    explanation: "The 'for' keyword is used in dictionary comprehensions to specify the iteration.",
    tutorialLink: "https://www.w3schools.com/python/python_dictionaries_comprehension.asp"
  },
  {
    id: 40,
    text: "What is the correct way to open a file for writing in Python?",
    options: [
      "A) open(\"file.txt\", \"w\")",
      "B) open(\"file.txt\", \"r\")",
      "C) open(\"file.txt\", \"read\")",
      "D) open(\"file.txt\", \"write\")"
    ],
    type: "multiple-choice",
    answer: "A",
    points: 25,
    explanation: "The \"w\" mode opens a file for writing. If the file exists, it truncates the file. If not, it creates a new file.",
    tutorialLink: "https://www.w3schools.com/python/python_file_handling.asp"
  }
];

export const examConfig = {
  totalPoints: 1000, // 40 questions × 25 points each
  passingScore: 800,
  timeLimit: 2400, // 1 hour in seconds
  allowedAttempts: Infinity
};