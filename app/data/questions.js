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
  // ... continue with all 42 questions
];

export const examConfig = {
  totalPoints: 1000,
  passingScore: 700,
  timeLimit: 7200, // 2 hours in seconds
  allowedAttempts: 3
};