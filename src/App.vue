<template>
  <main-layout :show-nav="store.gameStatus !== 'running'">
    <template #header>
      <main-navigation
        :is-disabled="store.gameStatus === 'running'"
      ></main-navigation>
    </template>
    <router-view></router-view>
  </main-layout>
</template>

<script setup lang="ts">
import MainLayout from "./components/MainLayout.vue";
import MainNavigation from "./components/MainNavigation.vue";
import { useStore } from "./stores/game";

const store = useStore();
</script>
