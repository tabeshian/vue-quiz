<template>
  <div class="grid gap-4 grid-rows-[1fr,4fr,1fr]">
    <header class="bg-gray-900 grid place-center px-4 py-2 rounded">
      <slot name="header"></slot>
    </header>
    <main
      class="relative bg-gray-900 grid gap-4 grid-rows-[auto,auto] p-4 rounded"
    >
      <div class="">
        <slot name="top"></slot>
      </div>
      <div class="">
        <slot name="bottom"></slot>
      </div>
    </main>
    <footer class="bg-gray-900 grid place-content-center px-4 py-2 rounded">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
