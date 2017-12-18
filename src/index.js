import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'react-css-themr'
import { DarkTheme, LightTheme } from './Themes'

const content = (
  <ThemeProvider theme={LightTheme}>
    <App />
  </ThemeProvider>
)

ReactDOM.render(content, document.getElementById('root'))
