import { ThemeProvider, Themes } from '@gui/fluent-ui-allure'
import MainLayout from './layouts/main'
import { RootState } from './store/store'
import { useSelector } from 'react-redux'

export const App = () => {
  const themeStore: any = useSelector((state: RootState) => state.changeTheme.currentTheme)

  const mapThemeKeyToClass = (themeKey: number): string => {
    switch (themeKey) {
      case Themes.Cobalt:
        return 'cobalt'
      case Themes.Teal:
        return 'teal'
      case Themes.Ochre:
        return 'ochre'
      case Themes.Violet:
        return 'violet'
      case Themes.Magenta:
        return 'magenta'
      case Themes.Lavender:
        return 'lavender'
      case Themes.Pewter:
        return 'pewter'
      case Themes.Mint:
        return 'mint'
      default:
        return 'default'
    }
  }

  return (
    <ThemeProvider className={`content ${mapThemeKeyToClass(themeStore)}`} theme={themeStore}>
      <MainLayout />
    </ThemeProvider>
  )
}
