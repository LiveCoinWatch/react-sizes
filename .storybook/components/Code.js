import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism'
import { prism as theme } from 'react-syntax-highlighter/dist/styles/prism'
import Block from './Block'

const Code = ({ children }) => (
  <Block title="Code">
    <SyntaxHighlighter language="jsx" style={theme} customStyle={{ margin: 0 }}>
      {children}
    </SyntaxHighlighter>
  </Block>
)

export default Code
