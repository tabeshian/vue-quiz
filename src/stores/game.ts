import { defineStore } from "pinia";
import { getRandomQuizItems } from "@/db";
// import { useLocalStorage } from "@vueuse/core";
import type { GameState, Round, Game } from "@/types";
import { sleep } from "@/utils";

export const useStore = defineStore({
  id: "game",
  // MIT LOKALEM SPEICHER
  // state: () =>
  //   useLocalStorage<GameState>("my-game-state", {
  //     gameStatus: "idle",
  //     currentRound: 0,
  //     totalRounds: 3,
  //     quizItems: [],
  //     currentGame: null,
  //   }),

  // OHNE LOKALEM SPEICHER
  state: () =>
    <GameState>{
      gameStatus: "idle",
      totalRounds: 3,
      quizItems: [],
      currentGame: null,
    },
  getters: {
    currentRoundData: (state) =>
      state.currentGame?.rounds[state.currentGame.currentRound - 1],

    currentRound: (state) => state.currentGame?.currentRound,

    showQuiz: (state) => state.gameStatus === "running",

    showResult: (state) => state.gameStatus === "finished",

    showGameStartButton: (state) => state.gameStatus !== "running",

    scoreInfo: (state) => {
      const arr: string[] = [];
      state.currentGame?.rounds.forEach((round) => {
        if (!round.selectedAnswer) arr.push("idle");
        else if (round.selectedAnswer === round.quizItem.correctAnswer)
          arr.push("success");
        else arr.push("error");
      });
      return arr;
    },

    successRate: (state) => {
      if (!state.currentGame) return 0;

      return (state.currentGame.totalScore / state.totalRounds) * 100;
    },

    isRevealed: (state): boolean =>
      !!state.currentGame?.rounds[state.currentGame?.currentRound - 1]
        .selectedAnswer,

    isSelected: (state) => (answer: string | null | undefined) =>
      answer ===
      state.currentGame?.rounds[state.currentGame.currentRound - 1]
        .selectedAnswer,

    isCorrect: (state) => (answer: string) =>
      answer ===
      state.currentGame?.rounds[state.currentGame.currentRound - 1].quizItem
        .correctAnswer,
  },
  actions: {
    async startGame() {
      this.quizItems = [];

      if (this.gameStatus === "running") {
        return;
      }

      const randomQuizItems = await getRandomQuizItems(this.totalRounds);

      const rounds: Round[] = randomQuizItems.map((item) => ({
        status: "pending",
        selectedAnswer: null,
        quizItem: item,
        score: 0,
      }));
      const game: Game = {
        rounds,
        totalScore: 0,
        currentRound: 1,
      };
      this.currentGame = game;
      this.gameStatus = "running";
    },

    async selectAnswer(answer: string) {
      if (this.currentRoundData?.selectedAnswer) {
        return;
      }
      const currentRound =
        this.currentGame?.rounds[this.currentGame.currentRound - 1];
      currentRound!.selectedAnswer = answer;

      if (answer === currentRound?.quizItem.correctAnswer) {
        this.currentGame!.totalScore += 1;
      }
      await sleep(1000);
      this.incrementRound();
    },

    async incrementRound() {
      if (this.currentGame?.currentRound === this.totalRounds) {
        return (this.gameStatus = "finished");
      }
      this.currentGame!.currentRound++;
    },
  },
});
