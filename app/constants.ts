export type Question = {
  question: string;
  options: string[];
  type?: "multiple" | "single";
  correctAns: string | string[];
};

export const questions: Question[] = [
  {
    question: "Who is the CEO of Google?",
    options: ["Sunder Pichhai", "Raj Kumar", "Elon Musk", "Tony Stark"],
    correctAns: "Sunder Pichhai",
  },
  {
    question: "On which planet do we live?",
    options: ["Pluto", "Earth", "Naptue", "Saturn", "Sun"],
    correctAns: "Earth",
  },
  {
    question: "Who can fly amongs the following?",
    options: ["Cow", "Crow", "Dob", "Sparrow"],
    correctAns: ["Crow", "Sparrow"],
    type: "multiple",
  },
  {
    question: "What is the capital of India?",
    options: ["Washington DC", "Delhi", "Jaipur", "Tokyo"],
    correctAns: "Delhi",
  },
  {
    question: "What did newton discovered?",
    options: [
      "DNA",
      "Pythagoras Theorem",
      "Low of motion",
      "Theory of relativity",
    ],
    correctAns: "Low of motion",
  },
  {
    question: "How many information are there in one pixle of a png image?",
    options: ["1", "2", "3", "4"],
    correctAns: "4",
  },
];
