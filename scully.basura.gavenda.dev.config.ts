import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './sites/basura.gavenda.dev/src',
  projectName: 'basura.gavenda.dev',
  distFolder: './dist/basura.gavenda.dev',
  outDir: './dist/static/basura.gavenda.dev',
  defaultPostRenderers: [],
  routes: {},
  puppeteerLaunchOptions: {
    args: [
      '--disable-gpu',
      '--renderer',
      '--no-sandbox',
      '--no-service-autorun',
      '--no-experiments',
      '--no-default-browser-check',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions',
    ],
  },
};
