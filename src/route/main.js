import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./route";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   // 如果用户未登录，且访问的页面不是登录页，则跳转到登录页
//   if (to.path !== "login") {
//     return { path: "login" };
//   } else {
//     next();
//   }
// });

export { router };
