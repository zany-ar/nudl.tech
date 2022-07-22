import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  LinkBox,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoLink, IoLogoGithub } from 'react-icons/io5';

export default function ProjectCard({ imgsrc, title, description, techstack, link, github = null, right = false }) {
  const [hover, setHover] = useState(false);

  return (
    <Center py={6}>
      <Stack
        w={{ base: '100%', md: '50rem' }}
        height={{ sm: '400px', md: '15rem' }}
        direction={{ base: 'column', md: right ? 'row' : 'row-reverse' }}
        textAlign="center"
        position='relative'
        overflow={'none'}
        padding={4}>
        <Link
          maxW={{ md: '400px' }} minW={'300px'}
          position={{ base: 'absolute', md: 'relative' }}
          href={link}
          target="_blank"
          transition="all 0.7s ease"
          filter={{ "base": "brightness(20%)", md: !hover ? "brightness(50%)" : "brightness(100%)" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
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
            <Heading fontSize={'2xl'} fontFamily="mono">
              {title}
            </Heading></Box>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            padding={'10px 4px'}
            css={{ backdropFilter: 'blur(30px)' }}
            bgColor='navbg'
            boxShadow={"0 2px 10px -2px rgba(0,0,0,1)"}
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
            <Button leftIcon={<IoLink />} aria-label='go-to-website' position={'absolute'} left="10px" bottom="10px" size={'sm'} as="a" target={'_blank'} href={link}>
              Link
            </Button>
            {github && (
              <Button leftIcon={<IoLogoGithub />} aria-label='go-to-website' position={'absolute'} left="95px" bottom="10px" size={'sm'} as="a" target={'_blank'} href={github}>
                GitHub
              </Button>
            )}
          </Box>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {techstack.map((tech, i) => (
              <Badge
                key={i}
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                color="helper"
                fontWeight={'400'}>
                {tech}
              </Badge>
            ))}

          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}