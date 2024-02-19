import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // base: "./",
  // cách khác "build": "vite build --base=./"
  resolve: {
    alias: [{ find: '~', replacement: '/src' }]
  }
})
