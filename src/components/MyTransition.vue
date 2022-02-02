<template>
  <transition
    appear
    mode="out-in"
    enter-active-class="transition-opacity ease-in-out duration-300 delay-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-1"
    leave-active-class="transition ease-in-out duration-300"
    leave-from-class="opacity-1"
    leave-to-class="opacity-0"
  >
    <slot />
  </transition>
</template>
