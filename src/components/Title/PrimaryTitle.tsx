import { Stack } from '@gui/fluent-ui-allure'
import * as React from 'react'

import './style.scss'

interface IProps {
  title: string
  children?: React.ReactNode
}

export const PrimaryTitle = (props: IProps) => {
  const style: React.CSSProperties = {
    marginTop: 40,
    marginBottom: 8
  }

  return (
    <Stack style={style}>
      <span className='header-title'>{props.title}</span>
      <div>{props.children}</div>
    </Stack>
  )
}
