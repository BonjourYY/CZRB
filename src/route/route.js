// 路由表
const routes = [
  // 首页
  {
    path: "/",
    name: "home",
    component: () => import("@views/HomeView.vue"),
    children: [
      // 添加项目
      {
        path: "project",
        name: "addProject",
        component: () => import("@views/AddProjectView.vue"),
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
