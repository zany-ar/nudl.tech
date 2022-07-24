import { Box, Heading, Icon, Image, Skeleton, Text } from "@chakra-ui/react";
import { usePalette } from "react-palette";
export const TechCard = ({ tech }) => {
  const { data, loading } = usePalette(tech.image)

  return (
    <Box
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
      <Box width={'40px'} height={'40px'} top={'20px'} left={'12px'} opacity={'40%'} rounded='button' bgColor={data.lightVibrant} position='absolute'>
      </Box>
      {loading ? (
        <Skeleton width={'40px'} height={'40px'} top={'20px'} left={'12px'} rounded={'button'} position={'absolute'} />
      ) : (
        <Image src={tech.image} width="24px" height="24px" top={'28px'} left={'20px'} position={'absolute'} />
      )}
      <Box margin={'10px'} ml={'60px'} textAlign='left'>
        <Heading as={'h3'} fontFamily='mono' size='sm'>{tech.name}</Heading>
        <Text color={'text'}>{tech.tab}</Text>
      </Box>
    </Box>
  )
}