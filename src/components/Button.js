import React from 'react'
import {
  shape,
  string,
  oneOf,
  arrayOf,
  node,
} from 'prop-types'
import { themr } from 'react-css-themr'

const applyThemr = themr('UIButton')

const Button = ({ theme, children}) => (
  <button className={theme.button}>
    {children}
  </button>
)

Button.propTypes = {
  theme: shape({
    button: string,
  }),
  children: oneOf([
    arrayOf(node),
    string,
    node,
  ]).isRequired,
}

Button.defaultProps = {
  theme: {},
}

export default applyThemr(Button)

