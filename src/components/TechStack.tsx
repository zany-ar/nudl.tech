import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { IoApps, IoDesktop, IoHardwareChip, IoPizza, IoPlanet, IoGameController, IoDice, IoHammer, IoServer } from "react-icons/io5"
import { tabs } from "../../details"
import { TechCard } from "./TechCard"



export const TechStack = ({ techstack }) => {
  const [selected, setSelected] = useState('all')
  const icons = [<IoPlanet />, <IoPizza />, <IoServer />, <IoDice />, <IoGameController />]

  return (
    <>
      <Box textAlign={'center'}>
        <Button
          size={'sm'}
          variant={selected === 'all' ? 'solid' : 'outline'}
          colorScheme={'accent'}
          m='5px'
          rounded={'button'}
          leftIcon={<IoHardwareChip />}
          onClick={() => setSelected('all')}
        >
          All
        </Button>
        {tabs.map((tab, i) => (
          <Button
            size={'sm'}
            key={i}
            variant={selected === tab ? 'solid' : 'outline'}
            colorScheme={'accent'}
            m='5px'
            rounded={'button'}
            leftIcon={icons[i % icons.length]}
            onClick={() => setSelected(tab)}
          >
            {tab}
          </Button>
        ))}
      </Box>
      <br />
      <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        spacing='20px'>
        {techstack.map((tech, i) => {
          if (selected === 'all' || selected === tech.tab) {
            return (
              <TechCard key={i} tech={tech} />
            )
          }
        })}
      </SimpleGrid>
    </>
  )
}