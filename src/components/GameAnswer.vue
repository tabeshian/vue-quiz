<template>
  <my-button
    :color="
      !isRevealed
        ? 'primary'
        : isCorrect
        ? 'success'
        : isSelected
        ? 'error'
        : 'secondary'
    "
    @click="$emit('clicked', answer)"
    :label="answer"
  >
  </my-button>
</template>

<script setup lang="ts">
import MyButton from "@/components/MyButton.vue";

defineProps({
  answer: {
    type: String,
    default: "default answer",
  },
  isRevealed: {
    type: Boolean,
    default: false,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
});
</script>
