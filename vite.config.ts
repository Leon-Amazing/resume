import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//引入
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: 'resume',

  //进行配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    // 类型： string[] 导入时想要省略的扩展名列表。
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
  },
});
