import * as React from 'react'

import './style.scss'

interface IProps {
  children?: React.ReactNode
}

export const NavGroup = (props: IProps) => {
  const { children } = props
  return <div className='nav-group'>{children}</div>
}
