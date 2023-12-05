import * as React from 'react'
import { Stack } from '@gui/fluent-ui-allure'
import { NavSidebar } from './NavSidebar'
import { Header } from './Header'
import { Shell } from './Shell'

const MainLayout = () => {
  const layoutStyle: React.CSSProperties = {
    margin: 'auto',
    height: '100%'
  }

  const stackStyle: React.CSSProperties = {
    flex: 1,
    height: '100%',
    overflow: 'hidden'
  }

  return (
    <Stack style={layoutStyle}>
      <Header />

      <Stack style={stackStyle} horizontal tokens={{ childrenGap: 10 }}>
        <NavSidebar />
        <Shell />
      </Stack>
    </Stack>
  )
}

export default MainLayout
