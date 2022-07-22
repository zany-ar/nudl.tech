import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    fontFamily={'mono'}
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    pt="7rem"
    px="1rem"
    {...props}
  />
)
