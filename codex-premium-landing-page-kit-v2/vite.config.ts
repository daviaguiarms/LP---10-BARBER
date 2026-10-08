import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = (
    process.env.VITE_SITE_URL ||
    process.env.DEPLOY_PRIME_URL ||
    process.env.URL ||
    env.VITE_SITE_URL ||
    'http://localhost:5173'
  ).replace(/\/+$/, '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'generate-site-metadata',
        apply: 'build',
        transformIndexHtml(html) {
          return html.replaceAll('__SITE_URL__', siteUrl)
        },
        async closeBundle() {
          const outputDir = resolve(process.cwd(), 'dist')
          for (const file of ['sitemap.xml', 'robots.txt']) {
            const path = resolve(outputDir, file)
            const contents = await readFile(path, 'utf8')
            await writeFile(path, contents.replaceAll('__SITE_URL__', siteUrl))
          }
        },
      },
    ],
  }
})
