import { IComboBoxStyles, Themes } from '@gui/fluent-ui-allure'
import { IDropdownOption } from '@gui/fluent-ui-allure'
//LANGUAGE
const EN = 'en'
const GE = 'de'
const FRE = 'fr'
const CHI = 'zh'
const JP = 'ja'

const langOptions: IDropdownOption[] = [
  { text: 'English', key: 'en' },
  { text: 'German', key: 'de' },
  { text: 'French', key: 'fr' },
  { text: 'Japanese', key: 'ja' },
  { text: 'Chinese', key: 'zh' }
]

const themeOptions: IDropdownOption[] = [
  { key: Themes.Cobalt, text: 'Theme: Cobalt' },
  { key: Themes.Teal, text: 'Theme: Teal' },
  { key: Themes.Ochre, text: 'Theme: Ochre' },
  { key: Themes.Violet, text: 'Theme: Violet' },
  { key: Themes.Magenta, text: 'Theme: Magenta' },
  { key: Themes.Lavender, text: 'Theme: Lavender' },
  { key: Themes.Pewter, text: 'Theme: Pewter' },
  { key: Themes.Mint, text: 'Theme: Mint' }
]

const headerStyle: React.CSSProperties = {
  borderBottom: '1px solid #F2F3F4',
  height: 60,
  display: 'flex',
  flexShrink: 0,
  padding: '0 15px',
  width: 1289,
  margin: 'auto'
}

const leftPartStyle: React.CSSProperties = {
  width: 500
}

const comboBoxStyles: Partial<IComboBoxStyles> = { root: { width: 200 } }

export {
  EN,
  FRE,
  JP,
  CHI,
  GE,
  langOptions,
  themeOptions,
  headerStyle,
  leftPartStyle,
  comboBoxStyles
}
