import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EN } from '@/constants/constant'
import { LanguageState, PayloadType } from '@/types/translate'

const initialState: LanguageState = {
  language: EN
}

export const LanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state: LanguageState, action: PayloadAction<PayloadType>) => {
      state.language = action.payload
    }
  }
})

export const { changeLanguage } = LanguageSlice.actions

export default LanguageSlice.reducer
