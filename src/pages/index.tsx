import {
  Link,
  Text,
  Heading,
  useColorModeValue,
  Button,
  IconButton,
  Box,
  Tooltip,
  Divider,
} from '@chakra-ui/react'
import { CheckCircleIcon, CopyIcon, EmailIcon, LinkIcon } from '@chakra-ui/icons'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import NextLink from 'next/link'
import { email } from '../../details'

const Index = () => {
  const helper = useColorModeValue('orange.700', 'orange.200')
  const link = useColorModeValue('#ffffff40', '#20202380');
  return (
    <Container>
      <Navbar />
      <Main>
        {/* About Me */}
        <Text color={helper} fontFamily={'mono'}>
          Hi, my name is
        </Text>
        <Heading as='h1' size={'2xl'} mt='16px !important' >
          Zanyar Jamal
        </Heading>
        <Heading as='h1' color={'text'} size={'lg'} mt='10px !important' >
          I build web applications.
        </Heading>
        <Text color="text" maxW={'600px'} mt='30px !important'>
          I'm a full stack developer and a freelancer who likes to build digital products and services, alias <NextLink href={'https://github.com/0xCN/'} passHref><Link>nudlツ</Link></NextLink>. If you want to partner up on a project or just contact me:
        </Text>
        <Box mt={'55px !important'}>
          <Button
            as={Link}
            isExternal
            href={`mailto:${email}`}
            variant="outline"
            colorScheme="orange"
            rounded="button"
            width="170px"
            leftIcon={<EmailIcon />}
          >
            Get In Touch
          </Button>
          <Tooltip label='Copy Email' placement='top'>
            <IconButton
              variant={'solid'}
              width="40px"
              aria-label="Copy Email"
              onClick={() => { navigator.clipboard.writeText(email) }}
              rounded="button"
              ml="10px" >
              <CopyIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider mt={'40px !important'} />
      </Main>
      <Footer>
      </Footer>
    </Container>
  )
}

export default Index
