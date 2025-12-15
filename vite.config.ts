import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If your repository name is not madilium.com, change the base path.
  // e.g., for a repo named 'my-site', it would be base: '/my-site/'
  // For a custom domain, base should be '/'
  base: '/',
})
