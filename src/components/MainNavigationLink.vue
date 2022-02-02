<template>
  <router-link
    :class="[
      'text-md',
      isDisabled
        ? 'opacity-50 cursor-not-allowed'
        : 'hover:underline focus-visible:underline',
    ]"
    :to="to"
    exact-active-class="underline decoration-primary-500"
  >
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>
