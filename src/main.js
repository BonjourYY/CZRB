import { createApp } from "vue";
// 引入 Vue Router
import { router } from "./route/main";
// 引入 Element Plus
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount("#app");
