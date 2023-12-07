import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import translateReducer from './translateSlice'
import changThemeReducer from './changThemeSlice'

const translatePersistConfig = {
  key: 'translate',
  storage
}

const changeThemePersistConfig = {
  key: 'changeTheme',
  storage
}

const persistedTranslateReducer = persistReducer(translatePersistConfig, translateReducer)
const persistedChangeThemeReducer = persistReducer(changeThemePersistConfig, changThemeReducer)

const rootReducer = {
  translate: persistedTranslateReducer,
  changeTheme: persistedChangeThemeReducer
}

const store = configureStore({
  reducer: rootReducer
})

const persistor = persistStore(store)

export { store, persistor }

// Define RootState type
export type RootState = ReturnType<typeof store.getState>
