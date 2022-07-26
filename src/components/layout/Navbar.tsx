import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { DarkModeSwitch } from './DarkModeSwitch'
import { IoIdCard, IoLayers, IoLogoGithub, IoTerminal } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        rounded={'button'}
        p={2}
        color={inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bgColor={"navbg"}
      css={{ backdropFilter: 'blur(30px)' }}
      zIndex={2}
      fontFamily={'mono'}
      boxShadow={"0 2px 3px -2px rgba(0,0,0,.5)"}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Link href='/#intro'>
              nudlツ
            </Link>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            target="_self"
            href="/#about-me"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}>
            <Text color={"helper"}><IoIdCard /></Text>
            About Me
          </LinkItem>
          <LinkItem
            target="_self"
            href="/#projects"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}>
            <Text color={"helper"}><IoTerminal /></Text>
            Projects
          </LinkItem>
          <LinkItem
            target="_self"
            href="/#tech-stack"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}>
            <Text color={"helper"}><IoLayers /></Text>
            Tech Stack
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/0xCN/nudl.tech"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <Text color={"helper"}><IoLogoGithub /></Text>
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <DarkModeSwitch />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/#about-me" passHref>
                  <MenuItem as={Link}>About Me</MenuItem>
                </NextLink>
                <NextLink href="/#projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/#tech-stack" passHref>
                  <MenuItem as={Link}>Tech Stack</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/0xCN/nudl-tech"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar