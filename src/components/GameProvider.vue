<template>
  <slot :store="store">
    {{ store }}
  </slot>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/game";

const store = useStore();
</script>
