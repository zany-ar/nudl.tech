import { Box, Flex, FlexProps, Text, Link } from '@chakra-ui/react'

export const Footer = (props) => (
  <Box as="footer" textAlign={'center'} pt="150px" pb={'1rem'} width={'100%'} {...props}>
    <Text fontSize={'14px'}>made with ❤️ by <Link href={'https://github.com/0xCN'}>nudlツ</Link></Text>
    <Text fontSize={'12px'} opacity={'80%'}>
      inspired by {' '}
      <Link href={'https://brittanychiang.com'} target='_blank'>Brittany</Link>, {' '}
      <Link href={'https://mahmad.me'} target='_blank'>Ahmad</Link>, {' '}
      <Link href='https://www.craftz.dog' target={'_blank'}>Takuya</Link>
    </Text>
  </Box>
)
