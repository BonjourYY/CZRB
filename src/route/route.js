// 路由表
const routes = [
  // 首页
  {
    path: "/",
    component: () => import("@components/HomeView.vue"),
    children: [
      // 新建稿件
      {
        path: "add",
        name: "add",
        component: () => import("@components/AddArticleView.vue"),
      },
      // 稿源中心
      {
        path: "articles",
        name: "articles",
        component: () => import("@components/ArticlesView.vue"),
      },
    ],
  },

  // 登录页
  {
    path: "/login",
    name: "login",
    component: () => import("@components/LoginView.vue"),
  },
];

export { routes };
