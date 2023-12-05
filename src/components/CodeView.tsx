import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeViewProps {
  code: string
  style?: React.CSSProperties
}

const CodeView: React.FC<CodeViewProps> = ({ code, style }) => {
  return (
    <div style={style}>
      <SyntaxHighlighter language='tsx' style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeView
