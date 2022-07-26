import { Button, useColorModeValue } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoYoutube } from "react-icons/io5";

export const Social = ({ github = null, youtube = null }) => (
  <>
    {github && (
      <Button
        mr={"5px"}
        as={'a'}
        href={github}
        variant={'outline'}
        rounded={'button'}
        leftIcon={<IoLogoGithub />}
        size="sm"
        target={"_blank"}
        borderColor={useColorModeValue('black', 'gray.600')}
      >
        GitHub
      </Button>
    )}
    {youtube && (
      <Button
        mr={"5px"}
        as={'a'}
        href={youtube}
        variant={'outline'}
        rounded={'button'}
        leftIcon={<IoLogoYoutube />}
        size="sm"
        target={"_blank"}
        borderColor={useColorModeValue('black', 'gray.600')}
      >
        YouTube
      </Button>
    )}
  </>
)