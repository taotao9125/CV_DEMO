import { defineConfig } from 'vitepress';

const base = process.env.NODE_ENV === 'production' ? '' : '';

console.log(base)
export default defineConfig({
  title: ' ',
  description: ' ',
  base,
  head: [],

  
  lastUpdated: true,
  // themeConfig: {
    
  // },
  // footer: {
  //   message: 'Released the MIT License.'
  // }
});
