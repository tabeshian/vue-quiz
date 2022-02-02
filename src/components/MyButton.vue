<template>
  <button
    :class="[
      'text-white text-sm tracking-tighter leading-tight px-4 py-2 font-semibold  shadow-xl disabled:cursor-not-allowed rounded',
      color === 'primary' &&
        'bg-primary-700 shadow-primary-700/30 focus-visible:bg-primary-500 hover:bg-primary-600 disabled:focus-visible:bg-primary-700 disabled:hover:bg-primary-700',
      color === 'secondary' &&
        'bg-secondary-700 focus-visible:bg-gray-500 hover:bg-gray-500 shadow-gray-700/30',
      color === 'success' && 'bg-success-700 shadow-success-700/30',
      color === 'error' && 'bg-error-700 shadow-error-700/30',
    ]"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

type ButtonColor = "primary" | "secondary" | "error" | "success";

defineProps({
  label: {
    type: String,
    required: true,
    default: "default label",
  },
  color: {
    type: String as PropType<ButtonColor>,
    default: "primary",
  },
});
</script>
