import { useStore } from "@/stores/game";
import { createRouter, createWebHistory } from "vue-router";
import GameView from "@/views/GameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "game",
      component: GameView,
    },
    {
      path: "/info",
      name: "info",
      // @ts-ignore
      component: () => import("@/views/InfoView.vue"),
    },
  ],
});

router.beforeEach((to) => {
  const store = useStore();

  // WEITERLEITEN ZUM SPIEL, WENN SPIEL LÄUFT
  if (store.gameStatus === "running" && to.name === "info") {
    return { name: "game" };
  }

  return;
});

export default router;
