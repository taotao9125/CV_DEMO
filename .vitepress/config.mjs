import { defineConfig } from 'vitepress';

const base = process.env.CONTRAINER_ENV === 'PAGES' ? '/CV_DEMO' : '';

export default defineConfig({
  description: ' ',
  base,
  head: [],
  outDir: process.env.CONTRAINER_ENV === 'PAGES' ? './docs' : './.vitepress/dist',
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
