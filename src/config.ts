import type { ThemeConfig } from '@/types'

export const themeConfig: ThemeConfig = {
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  site: {
    // site title
    title: 'Post aus Pune',
    // site subtitle
    subtitle: 'Kilian Kienasts Jahr in Indien',
    // site description
    description: 'Retypeset is a static blog theme based on the Astro framework. Inspired by Typography, Retypeset establishes a new visual standard and reimagines the layout of all pages, creating a reading experience reminiscent of paper books, reviving the beauty of typography. Details in every sight, elegance in every space.',
    // use i18n title/subtitle/description from src/i18n/ui.ts instead of static ones above
    i18nTitle: true, // true, false
    // author name
    author: 'Kilian Kienast',
    // site url
    url: 'https://postauspune.de',
    // favicon url
    // recommended formats: svg, png or ico
    favicon: '/icons/favicon.svg', // or https://example.com/favicon.svg
  },
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  color: {
    // default theme mode
    mode: 'auto', // light, dark, auto
    light: {
      // primary color
      // used for title, hover, etc
      // oklch color picker: https://oklch.com/
      primary: 'oklch(25% 0.005 298)',
      // secondary color
      // used for post text
      secondary: 'oklch(40% 0.005 298)',
      // background color
      background: 'oklch(96% 0.005 298)',
      // highlight color
      // used for navbar, selected text, etc
      highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)', // rgba(255,235,0,0.5)
    },
    dark: {
      // primary color
      primary: 'oklch(92% 0.005 298)',
      // secondary color
      secondary: 'oklch(77% 0.005 298)',
      // background color
      background: 'oklch(22% 0.005 298)',
      // highlight color
      highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)', // rgba(255,235,0,0.2)
    },
  },
  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  global: {
    // default language
    locale: 'de', // de, en, es, fr, ja, ko, pl, pt, ru, zh, zh-tw
    // more languages
    // not fill in the locale code above again, can be an empty array []
    moreLocales: [], // ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh', 'zh-tw']
    // font styles for post text
    fontStyle: 'sans', // sans, serif
    // date format for posts
    dateFormat: 'DAY MONTH YYYY', // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    // table of contents for posts
    toc: true, // true, false
    // KaTeX math rendering
    katex: false, // true, false
    // reduce motion
    reduceMotion: false, // true, false
  },
  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  comment: {
    // enable comment system
    enabled: false, // true, false
    // giscus
    // https://giscus.app/
    giscus: {
      repo: 'jeffconrad18/blog',
      repoId: 'R_kgDOOozLYA', // von giscus.app
      category: 'General', // oder deine gewählte Kategorie
      categoryId: 'DIC_kwDOOozLYM4CtJKG', // von giscus.app
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
    },
    // twikoo
    twikoo: {
      envId: '',
    },
    // waline - Server gehört nicht dir, leer lassen
    waline: {
      serverURL: '',
      emoji: [],
      search: false,
      imageUploader: false,
    },
  },
  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  seo: {
    // Dein Twitter-Handle oder entfernen falls nicht vorhanden
    twitterID: '', // oder dein Twitter-Handle
    verification: {
      // Alle auf leer setzen, dann später bei Bedarf hinzufügen
      google: '',
      bing: '',
      yandex: '',
      baidu: '',
    },
    // Analytics nur aktivieren wenn du es nutzen möchtest
    googleAnalyticsID: '',
    // Diese Umami-ID gehört nicht dir - entfernen!
    umamiAnalyticsID: '',
    follow: {
      feedID: '',
      userID: '',
    },
    apiflashKey: '',
  },
  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  footer: {
    // social links
    links: [
      {
        name: 'WhatsApp-Kanal',
        url: 'https://www.whatsapp.com/channel/0029VbAZOL78qIzyCJcwXB1A',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/sommernachtsbluetenregentraum/',
      },
      {
        name: 'Newsletter',
        url: 'mailto:kilian.kienast@gmx.de?subject=Anmeldung Newsletter Post aus Pune&body=Lieber Kilian,%0D%0A%0D%0AIch möchte mich gerne für deinen Post aus Pune - Newsletter anmelden, um über neue Beiträge informiert zu werden.%0D%0A%0D%0AVielen Dank!',
      },
      {
        name: 'RSS Feed',
        url: '/rss.xml',
      },
      {
        name: 'Email',
        url: 'kilian.kienast@gmx.de',
      },
      // {
      //   name: 'X',
      //   url: 'https://x.com/radishzz_',
      // },
    ],
    // year of website start
    startYear: 2025,
  },
  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  preload: {
    // image hosting url
    // optimize remote images in Markdown files to avoid cumulative layout shift
    imageHostURL: '', // leer lassen, wenn du keinen eigenen Image-Host hast
    // custom google analytics js
    // for users who route analytics javascript to a customized domain
    customGoogleAnalyticsJS: '',
    // custom umami analytics js
    // for users who deploy umami on their own, or route analytics javascript to a customized domain
    customUmamiAnalyticsJS: '', // leer lassen, da nicht dein Server
  },
  // PRELOAD SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END
}

export default themeConfig

export const defaultLocale = themeConfig.global.locale
export const moreLocales = themeConfig.global.moreLocales
export const allLocales = [defaultLocale, ...moreLocales]
