import React from 'react'
import PropTypes from 'prop-types'
import {render as renderRtl} from '@testing-library/react'
import {ThemeProvider} from '@emotion/react'
import {light} from '../src/themes'

const render = (ui, {theme = light, ...options} = {}) => {
  const Wrapper = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )

  Wrapper.propTypes = {
    children: PropTypes.node,
  }

  return renderRtl(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
export {render}
