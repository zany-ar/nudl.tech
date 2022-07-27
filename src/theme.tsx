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
        default: 'gray.800',
        _dark: 'gray.300',
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
        default: "blue.500",
        _dark: 'orange.200',
      },
      navbg: {
        default: '#ffffff',
        _dark: '#20202380'
      },
      bg: {
        default: '#e5e0ff80',
        _dark: 'gray.900'
      },
      body: {
        default: 'black',
        _dark: 'white'
      },
      tag: {
        default: 'navbg',
        _dark: 'gray.800'
      }
    },
    radii: {
      button: '12px',
    },
  },
  components: {
    Link: {
      baseStyle: props => ({
        color: mode('#3d7aed', '#fbd38d')(props),
        textUnderlineOffset: 3
      })
    }
  },
  colors: {
    black: '#16161D',
    accent: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#3d7aed",
      600: "#2e71ee",
      700: "#2168eb",
      800: "#105eec",
      900: "#0258f6",
    },
    btn: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
  },
  fonts,
  styles: {
    global: (_props) => ({
      'html': {
        scrollBehavior: 'smooth'
      }
    })
  }
})

export default theme