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
  UnorderedList,
  ListItem,
  ListIcon,
  List,
  SimpleGrid,
  Icon,
  VStack,
} from '@chakra-ui/react'
import { CheckCircleIcon, ChevronRightIcon, CopyIcon, EmailIcon, LinkIcon } from '@chakra-ui/icons'
import { Container } from '../components/layout/Container'
import { Main } from '../components/layout/Main'
import { Footer } from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import NextLink from 'next/link'
import { email, projects, sideProjects } from '../../details'
import { IoFileTrayFull, IoFolderOpenOutline, IoIdCard, IoLink, IoLogoGithub, IoLogoYoutube, IoTerminal } from 'react-icons/io5'
import ProjectCard from '../components/ProjectCard'
import { Tags } from '../components/Tags'
import { SideProjectCard } from '../components/SideProjectCard'


const Helper = (props) => (
  <Text color={'helper'} as='span' {...props} />
)


const Index = () => {
  return (
    <Container>
      <Navbar />
      <Main>

        {/* Intro */}

        <Box>
          <Text color={'helper'} fontFamily={'mono'}>
            Hi, my name is
          </Text>
          <Heading as='h1' size={'2xl'} mt='20px !important' >
            Zanyar Jamal
          </Heading>
          <Heading as='h1' color={'text'} size={'lg'} mt='30px !important' >
            I build web applications.
          </Heading>
          <Text color="text" maxW={'600px'} mt='30px !important'>
            I'm a full stack developer and a freelancer who likes to build digital products and services, alias {' '}
            <NextLink href={'https://github.com/0xCN/'} passHref>
              <Link>nudlツ</Link>
            </NextLink>.
            If you want to partner up on a project or just want to talk:
          </Text>
          <Box mt={'55px !important'}>
            <Button
              as={Link}
              isExternal
              href={`mailto:${email}`}
              variant="outline"
              colorScheme="orange"
              rounded="button"
              width="190px"
              leftIcon={<EmailIcon />}
              size={'lg'}
            >
              Get In Touch
            </Button>
            <Tooltip label='Copy Email' placement='top'>
              <IconButton
                variant={'solid'}
                width="40px"
                aria-label="Copy Email"
                onClick={() => navigator.clipboard.writeText(email)}
                rounded="button"
                ml="10px" >
                <CopyIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box mt={'30px !important'}>
            <Button
              mr={"5px"}
              as={'a'}
              href="https://github.com/0xCN"
              variant={'outline'}
              rounded={'button'}
              leftIcon={<IoLogoGithub />}
              size="sm"
              target={"_blank"}
            >
              GitHub
            </Button>
            <Button
              as={'a'}
              href="https://www.youtube.com/channel/UCjHuPi8CE4U_5BbnpyYvjQg"
              variant={'outline'}
              rounded={'button'}
              leftIcon={<IoLogoYoutube />}
              size="sm"
              target={"_blank"}
            >
              YouTube
            </Button>
          </Box>
        </Box>

        {/* About Me */}

        <Box textAlign={'left'} mt={'150px !important'}>
          <Heading as='h1' size={'md'} alignItems='center' display="inline-flex">
            <Text color={"helper"} mr='10px'><IoIdCard /></Text> About Me
          </Heading>
          <br />
          <br />
          <Text color="text" maxW={'600px'}>
            Hello! My name is <Helper>Zanyar</Helper>, I build web applications, freelance, tutor programming, and live off eating instant ramen 🍜.
            <br />
            <br />
            I first started out as a <Helper>cyber-security enthusiast</Helper> — and learned programming only to build automated tools to make hacking easier and faster.
            <br />
            <br />
            Since then, I’ve updated my repertoire with the <Helper>latest technologies</Helper>, and have even become a jack of all trades and worked in most fields including {' '}
            <Helper>System Design</Helper>, <Helper>Mobile App Development</Helper>, and my current occupation a <Helper>Full Stack Developer</Helper>.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </Text>
          <Box mt={'30px'}>
            <List display={'grid'} gap={'5px 10px'} gridTemplateColumns={'repeat(2, minmax(100px, 200px))'} >
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="helper" />
                Next.js
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="helper" />
                TypeScript
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="helper" />
                MongoDB
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="helper" />
                Redis
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="helper" />
                Digital Ocean
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="helper" />
                Chakra-UI
              </ListItem>
            </List>
          </Box>
        </Box>

        {/* Projects */}

        <Box textAlign={'center'} mt={'150px !important'}>
          <Heading as='h1' size={'md'} alignItems='center' display="inline-flex">
            <Text color={"helper"} mr='10px'><IoTerminal /></Text> Projects
          </Heading>
          <br />
          <Text color={'text'}>
            Some of my public projects.
          </Text>
          <br />
          <Box>
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                right={i % 2 == 0 ? true : false}
                title={project.title}
                description={project.description}
                fontFamily={'gugi'}
                fontWeight={200}
                techstack={project.techstack}
                imgsrc={project.imgsrc}
                link={project['link']}
                github={project['github']} />
            ))}

          </Box>
        </Box>

        {/* Side Projects */}

        <Box textAlign={'center'} mt={'150px !important'}>
          <Heading as='h1' size={'md'} alignItems='center' display="inline-flex">
            <Text color={"helper"} mr='10px'><IoFileTrayFull /></Text> Side Projects
          </Heading>
          <br />
          <Text color={'text'}>
            Projects which made me smile!
          </Text>
          <br />
          <br />
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing='20px'
          >
            {sideProjects.map((data, i) => (
              <SideProjectCard
                key={i}
                title={data.title}
                description={data.description}
                techstack={data.techstack}
                github={data['github']}
                link={data['link']}
                youtube={data['youtube']}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Footer></Footer>
      </Main>
    </Container>
  )
}

export default Index
