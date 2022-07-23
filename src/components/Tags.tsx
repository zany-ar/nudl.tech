import { Badge, Stack, useColorModeValue } from "@chakra-ui/react";


export const Tags = ({ techstack }) => (
  <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
    {techstack.map((tech, i) => (
      <Badge
        key={i}
        px={2}
        py={1}
        bg={useColorModeValue('gray.50', 'gray.800')}
        color="helper"
        textTransform={'none'}
        fontWeight={'400'}>
        {tech}
      </Badge>
    ))}
  </Stack>
) 