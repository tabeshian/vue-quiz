<template>
  <div class="h-full grid sm:grid-cols-2 gap-4">
    <slot v-for="(answer, i) in answers" :key="i" :answer="answer"></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  answers: {
    type: Array,
  },
});
</script>
