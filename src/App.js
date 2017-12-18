import React, { Component } from 'react'
import {
  shape,
  string,
  oneOfType,
  arrayOf,
  node,
} from 'prop-types'
import Button from './components/Button.js'
import { themr } from 'react-css-themr'
import colorcolor from 'colorcolor'

const applyThemr = themr('UIApp')

const App = ({theme, children, primaryColor}) => { 
  
  const hsb = colorcolor(primaryColor, "hsb")
  console.log(hsb)
  
  return (
    <div className={theme.app}>
      <Button>Teste</Button>
    </div>
  )
}

App.prototype = {
  theme: shape({
    app: string,
  }),
  children: oneOfType([
    arrayOf(node),
    string,
    node,
  ]),
  primaryColor: string,
}

App.defaultProps = {
  theme: {},
  children: null,
  primaryColor: '#ffffff'
}

export default applyThemr(App)
