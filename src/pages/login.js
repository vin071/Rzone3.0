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
import { Heading, Text } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react'
import { Component } from 'react';
import { useState } from 'react';
import { Box } from '@chakra-ui/react'
import login_data from '../data/login_data';

const Login = () => {
  const [nusnetid, setId] = useState("");
  const [password, setPassword] = useState("");
  const [found, setFound] = useState(false);
  const handleSubmit = () => {
    console.log("Updated")
    for (let i=0; i < login_data.length; i++) {
      if (login_data[i][nusnetid] == this.nusnetid) {
        if (login_data[i][password] == this.password) {
          this.setFound(true)
      }
    }
  };
}
  const placeholderSuccess = <p>Login is successful</p>;
  const extra = <p>{nusnetid}</p>;
  const placeholderFail = <p></p>
    // 2. Wrap ChakraProvider at the root of your app
  const report = "RZone is Raffles Hall's student activities portal, developed and maintained by ComMotion. For troubleshooting and bug report, please contact e0773508@u.nus.edu."
  return (
    <div>
      <Container width="100%">
        <img alt="RZONE" />
      </Container>
      <Container maxWidth={820} width='100%' h='10' style={{display:"flex", flexDirection: "column", flexWrap: "wrap"}}>
        <Box width="45vw" maxWidth={400} minWidth={100} align="right" style={{padding:"10px"}}>
        <Text fontSize='2xl' style={{display: "flex", alignItems: "end", height: "60px", padding:"20px", color: "teal"}}>RZone 3.0</Text>
          <FormControl id="login" paddingLeft="20px" onSubmit={handleSubmit}>
            <Input type='text' id="nusnetid" value={nusnetid} placeholder="NUSNET ID" onChange={({target}) =>setId(target.value)}/>
            <Input type='password' id="password" placeholder="NUSNET Password" value={password} onChange={({target}) =>setPassword(target.value)}/>
            <Button colorScheme='teal' variant='solid' type="submit" padding="20px">
              LOGIN
            </Button>
          </FormControl>
          {found ? placeholderSuccess : placeholderFail}
          {found ? extra : placeholderFail}
        </Box>
      <Box width='45vw'  maxWidth={400} minWidth={100} style={{padding:"10px"}}>
        <Heading as='h6' size='lg' style={{display: "flex", alignItems: "center", height: "60px", paddingLeft:"20px", color: "white", backgroundColor: "teal"}}>Announcement</Heading>
        <Text fontSize='md' style={{display: "flex", alignItems: "center", padding: "20px", backgroundColor: "white"}}>{report}</Text>
      </Box>
      </Container>
    </div>
  )
}


export default Login;