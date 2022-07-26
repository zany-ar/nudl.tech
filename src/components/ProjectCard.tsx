import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link,
  SlideFade,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { IoLink, IoLogoGithub } from 'react-icons/io5';
import { Tags } from './Tags';


export default function ProjectCard({ imgsrc, title, description, techstack, link, fontFamily = "mono", fontWeight = 400, github = null, right = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const color = useColorModeValue('accent', 'gray')
  return (
    <SlideFade in={isInView} offsetY="50px" delay={0.2} >
      <Center py={6}>
        <Stack
          ref={ref}
          w={{ base: '100%', md: '50rem' }}
          height={{ sm: '400px', md: '15rem' }}
          direction={{ base: 'column', md: right ? 'row' : 'row-reverse' }}
          textAlign="center"
          position='relative'
          overflow={'none'}
          padding={4}>
          <Link
            maxW={{ md: '450px' }} minW={'300px'}
            position={{ base: 'absolute', md: 'relative' }}
            href={link}
            target="_blank"
            transition="all 0.3s ease"
            filter={{ "base": "brightness(20%)", md: "brightness(60%)" }}
            _hover={{ filter: { md: "brightness(100%)" } }}
          >
            <Image
              zIndex={0}
              objectFit="cover"
              src={imgsrc}
              rounded="button"
            />
          </Link>
          <Stack
            zIndex={1}
            position={{ base: 'relative', md: 'absolute' }}
            maxW={{ md: '400px' }}
            mt="0px"
            left={{ base: 'unset', md: right ? "unset" : "0px" }}
            right={{ base: 'unset', md: right ? "0px" : "unset" }}
            top={{ sm: "-20px", md: "unset" }}
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            verticalAlign={'top'}
            p={1}
            pt={2}>
            <Box verticalAlign={'top'}>
              <Heading
                fontSize={'2xl'}
                fontFamily={fontFamily}
                fontWeight={fontWeight}
                color='white'
                textShadow={`
                -1px -1px 0px #000,
                0px -1px 0px #000,
                1px -1px 0px #000,
                -1px  0px 0px #000,
                1px  0px 0px #000,
                -1px  1px 0px #000,
                0px  1px 0px #000,
                1px  1px 0px #000
              `}
                _dark={{ color: 'body' }}>
                {title}
              </Heading>
            </Box>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              padding={'10px 4px'}
              css={{ backdropFilter: 'blur(30px)' }}
              bgColor='navbg'
              boxShadow={"0 2px 5px -2px rgba(0,0,0,1)"}
              position={'relative'}
              minH="100px"
              paddingBottom="70px"
              px={'10px'}
            >
              <Text
                textAlign={'left'}
                color="text">
                {description}
              </Text>
              <Button colorScheme={color} leftIcon={<IoLink />} aria-label='go-to-website' position={'absolute'} left="10px" bottom="10px" size={'sm'} as="a" target={'_blank'} href={link}>
                Link
              </Button>
              {github && (
                <Button colorScheme={color} leftIcon={<IoLogoGithub />} aria-label='go-to-website' position={'absolute'} left="95px" bottom="10px" size={'sm'} as="a" target={'_blank'} href={github}>
                  GitHub
                </Button>
              )}
            </Box>
            <Tags techstack={techstack} />
          </Stack>
        </Stack>
      </Center >
    </SlideFade>
  );
}