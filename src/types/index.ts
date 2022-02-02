export interface QuizItem {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface Round {
  status: "pending" | "finished";
  quizItem: QuizItem;
  selectedAnswer: string | null;
  score: 0;
}

export interface Game {
  rounds: Round[];
  totalScore: number;
  currentRound: number;
}

export interface GameState {
  gameStatus: "idle" | "running" | "finished";
  quizItems: QuizItem[];
  totalRounds: number;
  currentGame: Game | null;
}
