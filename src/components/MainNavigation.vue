<template>
  <nav class="flex gap-4 p-2 justify-end items-center">
    <main-navigation-link :is-disabled="isDisabled" to="/"
      >spiel</main-navigation-link
    >
    <main-navigation-link
      :is-disabled="isDisabled"
      data-test-id="info-link"
      to="/info"
      >info</main-navigation-link
    >
  </nav>
</template>

<script setup lang="ts">
import MainNavigationLink from "@/components/MainNavigationLink.vue";
defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>
