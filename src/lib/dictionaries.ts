import 'server-only'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'es' | 'en' | string) => {
  if (locale !== 'es' && locale !== 'en') {
    return dictionaries['es']()
  }
  return dictionaries[locale as 'es' | 'en']()
}
