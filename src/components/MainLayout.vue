<template>
  <div class="relative h-screen max-w-screen-md mx-auto">
    <header class="">
      <slot name="header"></slot>
    </header>
    <main class="h-full overflow-y-auto">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps({
  showNav: {
    type: Boolean,
    default: true,
  },
});
</script>
