import { Language, ThemeProvider, getAllureTheme } from '@gui/fluent-ui-allure'
import MainLayout from './layouts/main'
import { RootState } from './store/store'
import { useSelector } from 'react-redux'

export const App = () => {
  const themeStore = useSelector((state: RootState) => state.changeTheme.currentTheme)

  return (
    <ThemeProvider className='content' theme={getAllureTheme(themeStore, Language.EN)}>
      <MainLayout />
    </ThemeProvider>
  )
}
