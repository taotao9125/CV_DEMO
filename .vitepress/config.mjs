import { defineConfig } from 'vitepress';

const base = process.env.NODE_ENV === 'production' ? '' : '';

export default defineConfig({
  title: ' ',
  description: ' ',
  base,
  head: [],

  
  lastUpdated: true,
  themeConfig: {
    footer: {
      message: 'Powered by vitepress and Vercel'
    }
  }
  
});
