import { configureStore } from '@reduxjs/toolkit'

import translateReducer from './translateSlice'
import changThemeReducer from './changThemeSlice'

export const store = configureStore({
  reducer: {
    translate: translateReducer,
    changeTheme: changThemeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
