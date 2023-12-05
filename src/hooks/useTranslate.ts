import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { translate as translateFunction } from '@/utils/translate'

const useTranslate = (text: string) => {
  const { language } = useSelector((state: RootState) => state.translate)

  // Use the translate function from your utils
  const translatedText = translateFunction(text, language)

  return translatedText
}

export default useTranslate
