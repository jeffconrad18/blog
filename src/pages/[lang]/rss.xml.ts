import type { APIContext } from 'astro'
import { generateRSS } from '@/utils/feed'
import { langMap } from '@/i18n/config'

export async function getStaticPaths() {
  return Object.keys(langMap).map((lang) => ({
    params: { lang },
  }))
}

export async function GET(context: APIContext) {
  return generateRSS(context)
}