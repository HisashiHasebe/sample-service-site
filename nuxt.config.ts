import development from './env.development.js'
import staging from './env.staging.js'
import production from './env.production.js'

const envs = { development, staging, production }
const environment = (process.env.APP_ENV ?? 'development') as keyof typeof envs
const envSettings = envs[environment]

if (!envSettings) {
  throw new Error(`Unknown APP_ENV: ${process.env.APP_ENV}`)
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiBase: envSettings.API_BASE,
    },
  },
  app: {
    head: {
      title: envSettings.SITE_TITLE,
    },
  },
})
