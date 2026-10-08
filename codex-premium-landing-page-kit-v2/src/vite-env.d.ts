/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string
  readonly VITE_BOOKING_URL: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_WHATSAPP_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
