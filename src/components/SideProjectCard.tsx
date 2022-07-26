import { Box, Heading, Icon, IconButton, VStack, Text, useColorModeValue, SlideFade } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IoFolderOpen, IoFolderOpenOutline, IoLink, IoLogoGithub, IoLogoYoutube } from "react-icons/io5";
import { Tags } from "./Tags";


export const SideProjectCard = ({ title, description, techstack, link = null, github = null, youtube = null }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const color = useColorModeValue('accent', 'gray');
  const icon = useColorModeValue(<IoFolderOpen />, <IoFolderOpenOutline />)
  return (
    <SlideFade in={isInView} delay={0.2}>
      <Box
        ref={ref}
        borderWidth="1px"
        borderRadius="lg"
        padding={'10px 4px'}
        css={{ backdropFilter: 'blur(30px)' }}
        bgColor='navbg'
        display={'flex'}
        height="100%"
        overflow={'none'}
        paddingTop="80px"
        paddingBottom={"40px"}
        px={'1rem'}
        position={'relative'}>
        <Icon width={'70px'} top={'15px'} height={'70px'} position='absolute' color={'helper'}>
          {icon}
        </Icon>
        <Box top={'25px'} right={'1rem'} position='absolute'>
          {link && (
            <IconButton colorScheme={color} as={'a'} target='_blank' href={link} ml={'5px'} size={'sm'} aria-label={'project-link'}>
              <IoLink />
            </IconButton>
          )}
          {github && (
            <IconButton colorScheme={color} as={'a'} target='_blank' href={github} ml={'5px'} size={'sm'} aria-label={'github-link'}>
              <IoLogoGithub />
            </IconButton>
          )}
          {youtube && (
            <IconButton colorScheme={color} as={'a'} target='_blank' href={youtube} ml={'5px'} size={'sm'} aria-label={'youtube-link'}>
              <IoLogoYoutube />
            </IconButton>
          )}
        </Box>
        <VStack textAlign={'left'} alignItems='left'>
          <Heading as={'h3'} size={'md'} mb={'10px'} textAlign='left' fontFamily='mono'>
            {title}
          </Heading>
          <Text color={'text'} width='100%' mb={'20px !important'}>
            {description}
          </Text>
        </VStack>
        <Box position={'absolute'} bottom={'10px'}>
          <Tags techstack={techstack} />
        </Box>
      </Box>
    </SlideFade>

  )
}