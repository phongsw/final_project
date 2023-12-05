import { createSlice } from '@reduxjs/toolkit'
import { Themes } from '@gui/fluent-ui-allure'

const initialState = {
  currentTheme: Themes.Cobalt
}

export const changeThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.currentTheme = action.payload
    }
  }
})

export const { changeTheme } = changeThemeSlice.actions

export default changeThemeSlice.reducer
