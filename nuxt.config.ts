// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

const config = defineNuxtConfig({
  ssr: false,
	devtools: { enabled: true },
  runtimeConfig: {
    public: {
      payphoneAppId: process.env.PAYPHONE_APP_ID,
      payphoneToken: process.env.PAYPHONE_TOKEN, 
      serviceId: process.env.SERVICE_ID,
      templateId: process.env.TEMPLATE_ID,
      publicKey: process.env.PUBLIC_KEY,  
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },
	alias: {
		"@": fileURLToPath(new URL("./", import.meta.url)),
    "@nabux-crush/crush-header": require.resolve('@nabux-crush/crush-header'),
    "@nabux-crush/crush-footer": require.resolve('@nabux-crush/crush-footer'),
    "@nabux-crush/crush-text-field": require.resolve('@nabux-crush/crush-text-field'),
    "@nabux-crush/crush-button": require.resolve('@nabux-crush/crush-button'),
	},
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
            @import '@fortawesome/fontawesome-free/scss/solid.scss';
            @import '@fortawesome/fontawesome-free/scss/regular.scss';
            @import '@fortawesome/fontawesome-free/scss/brands.scss';
            @import '@nabux-crush/crush-styles/_nabuxInternalVariables';
            @import '@/styles/_styles.scss';
          `
        }
      }
    },
  },
  modules: [
    '@pinia/nuxt'
  ]
});

export default config;