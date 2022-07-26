import { Box, Heading, SlideFade, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";


export const TechCard = ({ tech }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
        px={'0.5rem'}
        position={'relative'}>
        <Box width={'40px'} color="helper" p={'4px'} height={'40px'} top={'20px'} left={'12px'} rounded='button' position='absolute'>
          {tech.icon}
        </Box>
        <Box margin={'10px'} ml={'60px'} textAlign='left'>
          <Heading as={'h3'} fontFamily='mono' size='sm'>{tech.name}</Heading>
          <Text color={'text'}>{tech.tab}</Text>
        </Box>
      </Box>
    </SlideFade>
  )
}