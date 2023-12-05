import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EN, GE, FRE, CHI, JP } from '@/constants/constant'
import { LanguageState, PayloadType } from '@/types/translate'
const localStorageLang = localStorage.getItem('language')

const checkLanguage =
  localStorageLang === EN ||
  localStorageLang === FRE ||
  localStorageLang === CHI ||
  localStorageLang === JP ||
  localStorageLang === GE

const initialState: LanguageState = {
  language: checkLanguage ? localStorageLang : EN
}

export const LanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state: LanguageState, action: PayloadAction<PayloadType>) => {
      state.language = action.payload
      localStorage.setItem('language', action.payload)
    }
  }
})

export const { changeLanguage } = LanguageSlice.actions

export default LanguageSlice.reducer
