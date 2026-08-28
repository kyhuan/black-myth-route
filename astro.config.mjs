import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blackmythroute.cc',
  output: 'static',
  build: {
    format: 'directory'
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});

