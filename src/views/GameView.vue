<template>
  <Head>
    <title>Vue.js Quiz | Spiel</title>
  </Head>
  <div>
    <game-provider v-slot="{ store }">
      <game-layout>
        <template #header>
          <game-header
            :current-round="store.currentRound"
            :total-rounds="store.totalRounds"
            :score-info="store.scoreInfo"
          ></game-header>
        </template>
        <template #top>
          <my-transition enter-delay>
            <game-question
              :key="store.currentRound"
              v-if="store.showQuiz"
              :question="store.currentRoundData?.quizItem.question"
            ></game-question>
          </my-transition>
          <my-transition enter-delay>
            <game-result
              v-if="store.showResult"
              :success-rate="store.successRate"
            ></game-result>
          </my-transition>
        </template>
        <template #bottom>
          <my-transition enter-delay>
            <game-answers
              :key="store.currentRound"
              v-if="store.showQuiz"
              :answers="store.currentRoundData?.quizItem.answers"
              v-slot="{ answer }"
            >
              <game-answer
                :answer="(answer as string)"
                @clicked="store.selectAnswer(answer as string)"
                :is-revealed="store.isRevealed"
                :is-selected="store.isSelected(answer as string)"
                :is-correct="store.isCorrect(answer as string)"
              ></game-answer>
            </game-answers>
          </my-transition>
        </template>
        <template #footer>
          <game-start-button
            v-if="store.showGameStartButton"
            @clicked="store.startGame"
          ></game-start-button>
        </template>
      </game-layout>
    </game-provider>
  </div>
</template>

<script setup lang="ts">
import { Head } from "@vueuse/head";
import GameProvider from "@/components/GameProvider.vue";
import GameLayout from "@/components/GameLayout.vue";
import GameHeader from "@/components/GameHeader.vue";
import GameQuestion from "@/components/GameQuestion.vue";
import GameResult from "@/components/GameResult.vue";
import GameAnswers from "@/components/GameAnswers.vue";
import GameAnswer from "@/components/GameAnswer.vue";
import GameStartButton from "@/components/GameStartButton.vue";
import MyTransition from "@/components/MyTransition.vue";
</script>
