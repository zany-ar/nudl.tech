import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const fonts = {
  mono: `'Menlo', monospace`,
  heading: `'Noto Sans JP', sans-serif`,
  gugi: `'Gugi', cursive`,
  baloo: `'Baloo 2', cursive`
}

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
      helper: {
        default: 'orange.700',
        _dark: 'orange.200',
      },
      navbg: {
        default: '#ffffff',
        _dark: '#20202380'
      }
    },
    radii: {
      button: '12px',
    },
  },
  components: {
    Link: {
      baseStyle: props => ({
        color: mode('#3d7aed', '#ff63c3')(props),
        textUnderlineOffset: 3
      })
    }
  },
  colors: {
    black: '#16161D'
  },
  fonts,
})

export default theme