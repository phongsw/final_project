import * as React from 'react'
import { DefaultButton, IButtonStyles } from '@fluentui/react'
import CodeView from '@/components/CodeView'

import './style.scss'

interface IProps {
  children?: React.ReactNode
  codeFile: string
}

const buttonStyles: IButtonStyles = {
  root: {
    display: 'block',
    width: '100%',
    height: 48,
    borderRadius: 0,
    border: 'none'
  },
  icon: {
    color: '#949494'
  },
  iconHovered: {
    color: '#0072D0'
  }
}

export const SampleViewer = (props: IProps) => {
  const [showCode, setShowCode] = React.useState(false)

  const iconName = showCode ? 'fas-caret-up' : 'fas-code'

  return (
    <div className='sample-viewer-wrapper'>
      <div className='content-view'>{props.children}</div>
      {showCode && (
        <div className='code-style'>
          <CodeView code={props.codeFile} />
        </div>
      )}
      <DefaultButton
        styles={buttonStyles}
        onClick={() => setShowCode(!showCode)}
        iconProps={{ iconName: iconName }}
      ></DefaultButton>
    </div>
  )
}
