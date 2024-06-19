import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置别名
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@route": path.resolve(__dirname, "./src/route"),
      "@image": path.resolve(__dirname, "./src/image"),
    },
  },
});
