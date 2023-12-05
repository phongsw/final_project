import en from '@/translations/en.json'
import ge from '@/translations/ge.json'
import fre from '@/translations/fre.json'
import chi from '@/translations/chi.json'
import jp from '@/translations/jp.json'
import { EN, GE, FRE, CHI, JP } from '@/constants/constant'

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {}
  switch (language) {
    case EN:
      langData = en
      break
    case GE:
      langData = ge
      break
    case FRE:
      langData = fre
      break
    case CHI:
      langData = chi
      break
    case JP:
      langData = jp
      break
    default:
      break
  }
  return langData[key]
}
