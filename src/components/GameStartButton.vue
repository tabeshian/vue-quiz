<template>
  <my-button
    data-test-id="start-button"
    class="col-span-full row-start-4 row-end-5 place-self-center animate-pulse"
    label="neues Spiel"
    @click="$emit('clicked')"
  ></my-button>
</template>

<script setup lang="ts">
import MyButton from "@/components/MyButton.vue";

defineEmits(["clicked"]);
</script>
