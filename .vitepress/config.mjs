import { defineConfig } from 'vitepress';

const base = process.env.NODE_ENV === 'production' ? '' : '';

export default defineConfig({
  title: ' ',
  description: ' ',
  base,
  head: [],
  appearance: 'force-dark',
  title: 'History Projects',
  titleTemplate: false,
  themeConfig: {
    logo: '/icons/Home.svg',
    darkModeSwitchLabel: false,
    footer: {
      message: 'Powered by vitepress, Vercel and stackblitz.'
    },
    nav: false
  }
  
});
