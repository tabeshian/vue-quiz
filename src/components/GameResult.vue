<template>
  <div class="absolute inset-0 grid place-content-center">
    <div class="text-center">
      <p class="text-md text-gray-100">Deine Trefferquote</p>
      <p class="text-lg text-primary-500 font-bold">
        {{ tweenedScorePercentage.toFixed(2) }}%
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TransitionPresets, useTransition } from "@vueuse/core";
import { onMounted, ref } from "vue";

const props = defineProps({
  successRate: {
    type: Number,
    default: 0,
  },
});

const scorePercentage = ref(0);

onMounted(() => {
  scorePercentage.value = props.successRate;
});

const tweenedScorePercentage = useTransition(scorePercentage, {
  duration: 3000,
  transition: TransitionPresets.easeOutCubic,
  delay: 500,
});
</script>
