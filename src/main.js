import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import ArticleList from "/src/components/ArticleList.vue";
import HomeView from "/src/components/HomeView.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "article",
        component: ArticleList,
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
