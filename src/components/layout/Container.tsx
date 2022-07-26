import { Flex, FlexProps } from '@chakra-ui/react'
import { LoadingScreen } from './LoadingScreen'

export const Container = (props: FlexProps) => (
  <LoadingScreen>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgColor="bg"
      color="body"
      transition="all 0.15s ease-out"
      {...props}
    />
  </LoadingScreen>
)
