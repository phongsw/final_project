import { Stack, Dropdown } from '@gui/fluent-ui-allure'
import { initialize, Lang } from '@gui/common-i18n-terms'

import Logo from '@/assets/img/logo.png'
import './style.scss'
import { SearchInput } from './SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '@/store/translateSlice'
import {
  EN,
  comboBoxStyles,
  headerStyle,
  langOptions,
  leftPartStyle,
  themeOptions
} from '@/constants/constant'
import { changeTheme } from '@/store/changThemeSlice'
import { RootState } from '@/store/store'
import { useState } from 'react'

export const Header = () => {
  const dispatch = useDispatch()
  const themeStore = useSelector((state: RootState) => state.changeTheme.currentTheme)
  const [lang, setLang] = useState<Lang>(EN)
  const [theme, setTheme] = useState<any>(themeStore)

  initialize(lang)

  const onThemeChanged = (key: any) => {
    setTheme(key)
    dispatch(changeTheme(key))
  }

  const handleChangeLanguage = (language: any) => {
    dispatch(changeLanguage(language))
    setLang(language)
  }

  return (
    <Stack horizontal horizontalAlign='space-between' verticalAlign='center' style={headerStyle}>
      <Stack
        style={leftPartStyle}
        horizontal
        horizontalAlign='space-between'
        verticalAlign='center'
      >
        <span className='logo-style'>
          <img src={Logo} alt='logo' />
          <span>Allure UI</span>
        </span>
        <SearchInput />
      </Stack>

      <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 10 }}>
        <Dropdown
          onChange={(_, option: any) => {
            if (option) {
              handleChangeLanguage(option.key)
            }
          }}
          selectedKey={lang}
          options={langOptions}
          styles={comboBoxStyles}
          calloutProps={{ doNotLayer: true }}
        />
        <Dropdown
          onChange={(_, option) => {
            onThemeChanged(option?.key)
          }}
          selectedKey={theme}
          options={themeOptions}
          styles={comboBoxStyles}
          calloutProps={{ doNotLayer: true }}
        />
      </Stack>
    </Stack>
  )
}
