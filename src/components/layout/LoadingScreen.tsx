import { Box, Flex, Heading, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const LoadingScreen = (props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (<>
    {loading ? (
      <Flex
        justifyContent={'center'}
        alignItems='center'
        textAlign={'center'}
        bgColor="bg"
        color="body"
        minH='100vh'>
        <Spinner
          verticalAlign={'middle'}
          thickness='4px'
          speed='0.70s'
          color='helper'
          size='xl'
        >
          <Heading>nudl</Heading>
        </Spinner>
      </Flex>) : (props.children)}
  </>)
}