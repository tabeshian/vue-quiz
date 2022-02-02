<template>
  <div class="text-white text-md tracking-tight leading-tight">
    <p>
      {{ question }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  question: {
    type: String,
  },
});
</script>
