<template>
  <header
    class="col-span-full row-start-1 row-end-2 flex justify-between items-center"
  >
    <p
      key="header"
      class="col-start-1 col-span-full row-start-1 row-span-1 text-sm text-gray-400"
    >
      Runde
      <span
        data-test-id="current-round"
        class="text-primary-400 text-lg font-bold"
        >{{ currentRound }}
      </span>
      / {{ totalRounds }}
    </p>
    <div class="flex gap-1">
      <div
        v-for="(val, i) in scoreInfo"
        :key="i"
        :class="[
          'rounded-full h-4 w-4 shadow',
          val === 'success' && 'bg-success-600 shadow-success-600/50',
          val === 'error' && 'bg-error-600 shadow-error-600/50',
          val === 'idle' && 'bg-gray-600 shadow-gray-600/50',
        ]"
      ></div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps({
  currentRound: {
    type: Number,
    default: 0,
  },
  totalRounds: {
    type: Number,
    default: 3,
  },
  scoreInfo: {
    type: Array,
    default: [],
  },
});
</script>
