import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useState} from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Component } from 'react'

// function MyList(props) {
//   const myDictionary = {
//     Adhoc: ['Auditor', 'Finance Team', 'Secretariat', 'Vacation Storage'],
//     Comm: ["Bash", 'Green Committee'],
//     Cultural: ['Culture Committee', 'RH Dance', 'RH Unplugged'],
//     Media: ["AnG", 'Phoenix Press'],
//   };

//   const items = ['Auditor', 'Finance Team', 'Secretariat', 'Vacation Storage']

//   for (let i = 0; i < props.numItems; i++) {
//     items.push(<Box key={i} />);
//   }

//   return <div>{items}</div>;
// }



const Cca_application = () => {
  // 2. Wrap ChakraProvider at the root of your app
  const [clicked, setClicked] = useState(false);
  const item = ["test", "main", "you"];
  const myDictionary = {
    "Ad-hoc": ['Auditor', 'Finance Team', 'Secretariat', 'Vacation Storage'],
    "Comm": ["Bash", 'Green Committee'],
    "Cultural": ['Culture Committee', 'RH Dance', 'RH Unplugged'],
    "Media": ["AnG", 'Phoenix Press'],
  };
  const cca_selection = (cca_list) => {
    const cca_render = [];
    for (const [key, value] of Object.entries(cca_list)) {
       const cca_cat = <Container bg='white.500'>
              <Text>{key}</Text>
              <br></br>
              <Box style={{display:"flex", flexWrap: "wrap", flexDirection:"column"}}>
              {value.map((cca, i) =>{return <Button onClick={handleClick(cca)} id={cca} value={cca} variant="ghost" styles={{width:"10vw", margin:"20px", backgroundColor: clicked ? "white" : "teal"}}>{cca}</Button>})}
              </Box>
              </Container>
      cca_render.push(cca_cat)
    }
    return cca_render
  };

  const cca_selected = [] // would need to make this a function to initialise the page and selected cca

  const handleClick = (cca) => {
    // this.setActive(!this.active);
    // this.active = true
    // setClicked(!clicked)
    if (cca_selected.includes(cca)) {
      const index = cca_selected.indexOf(cca);
      const x = cca_selected.splice(index, 1)
    } else {
      cca_selected.push(cca)
    }
  };
  return (
      <div>
        <Container>
            <Heading as='h3' size='lg' color="teal">Activities Application</Heading>
            <Text fontSize="md">Select activities by clicking their names</Text>
        </Container>
        <Container backgroundColor={"white"}> 
            {/* <Box w='70px' h='10' bg='white.500' style={{display:"flex", flexWrap: "wrap", flexDirection:"column"}}>
              {item.map((n, i) =>{return <Button styles={{width:"10vw", margin:"20px"}}>{n}</Button>})}
            </Box> */}
            <FormControl>
            {cca_selection(myDictionary)}
            </FormControl>
            <Button type="submit">Save Selection</Button>
        </Container>
        {/* <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <GridItem w='100%' h='10'>
        <Container>
          <FormControl id="nusnetid">
            <Input type='text' placeholder="NUSNET ID"/>
          </FormControl>
          <FormControl id="nusnetpass">
            <Input type='password' placeholder="NUSNET Password"/>
          </FormControl>
          <Button colorScheme='teal' variant='solid' type="submit">
            LOGIN
          </Button>
        </Container>
        </GridItem>
        <GridItem>
          <Heading as='h3' size='lg'>Announcement</Heading>
          <Text fontSize='md'>For any enquiries or reports.</Text>
        </GridItem>
        </Grid> */}
      </div>
  )
}


export default Cca_application;