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
    ];
    
  export const examConfig = {
    totalPoints: 1000, // 40 questions × 25 points each
    passingScore: 700,
    timeLimit: 3600, // 1 hour in seconds
    allowedAttempts: 3
  };