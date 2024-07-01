import { createApp } from "vue";
// 引入 Vue Router
import { router } from "./route/main";
// 引入 Element Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
