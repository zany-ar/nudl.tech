import { Badge, Stack, useColorModeValue } from "@chakra-ui/react";


export const Tags = ({ techstack }) => (
  <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
    {techstack.map((tech, i) => (
      <Badge
        key={i}
        px={2}
        py={1}
        bgColor={'tag'}
        color="helper"
        textTransform={'none'}
        borderWidth={'2px'}
        fontWeight={'600'}>
        {tech}
      </Badge>
    ))}
  </Stack>
) 