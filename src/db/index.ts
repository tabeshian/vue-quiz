const quizItems = [
  {
    id: 1,
    question: "Wer ist der Author von Vue.js?",
    correct: "Evan You",
    incorrect: "Dan Abramov",
  },
  {
    id: 2,
    question: "Die neue Version von Vue lautet...",
    correct: "...Version 3",
    incorrect: "...Version 2",
  },
  {
    id: 3,
    question: "Welches ist das offizielle State Management System in Vue.js 3?",
    correct: "Pinia",
    incorrect: "Vuex",
  },
  {
    id: 4,
    question: "Vue.js ist...",
    correct: "...ein JS-Framework",
    incorrect: "...eine JS-Bibiliothek",
  },
  {
    id: 5,
    question: "Was ist der virtuelle Dom?",
    correct: "JS-Objekt, das den DOM representiert",
    incorrect: "Hologramm einer Kirche",
  },
  {
    id: 6,
    question: "Was sind Slots in Vue.js?",
    correct:
      "Platzhalter in Child-Komponente, die von der Parent-Komponente befüllt werden kann.",
    incorrect: "Ort, an dem Plugins registriert werden können.",
  },
  {
    id: 7,
    question: "Was kann mit Hilfe von Scoped Slots erreicht werden?",
    correct:
      "Daten innerhalb einer Child-Komponente werden in der Parent-Komponente verfügbar.",
    incorrect: "Der Komponente kann Scoped CSS zugeteilt werden.",
  },
  {
    id: 8,
    question: "Auf welcher Programmiersprache ist Vue.js aufgebaut?",
    correct: "JavaScript",
    incorrect: "Python",
  },
  {
    id: 9,
    question: "Mit welcher Direktive lassen sich in Vue Listen rendern?",
    correct: "v-for",
    incorrect: "v-bind",
  },
  {
    id: 10,
    question:
      "Mit welcher Direktive lässt sich in Vue ein Two-Way-Binding herstellen?",
    correct: "v-model",
    incorrect: "v-bind",
  },
];

export function getRandomQuizItems(size: number = 3) {
  const items = quizItems.sort(() => Math.random() - 0.5).slice(0, size);

  const result = items.map((item) => ({
    id: item.id,
    question: item.question,
    answers: [item.correct, item.incorrect].sort(() => Math.random() - 0.5),
    correctAnswer: item.correct,
  }));
  console.log(result);

  return result;
}
