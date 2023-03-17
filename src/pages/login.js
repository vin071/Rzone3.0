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
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setId = this.setId.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.state = {
      apiURL: "http://localhost:8080/members/login",
      items: "",
      nusnetId: "",
      password: "",
      fail: false,
      found: false,
      logindata: login_data
    }
  }
  
  componentDidMount() {
        fetch(this.state.apiURL)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

  setId(val) {
    this.setState({
      nusnetId: val.target.value
    })
  }
  setPassword(val) {
    this.setState({
      password: val.target.value
    })
  }
  // const [nusnetid, setId] = useState("");
  // const [password, setPassword] = useState("");
  // const [found, setFound] = useState(false);
    // 2. Wrap ChakraProvider at the root of your app
  handleSubmit() {
    const login_val = {
      "username" : this.state.nusnetId,
      "password" : this.state.password
    }
    fetch(this.state.apiURL,
      {method: "POST", mode: 'cors', body:JSON.stringify(login_val)})
  //   this.setState({
  //     found: false
  //   })
  //   for (let i=0; i < this.state.logindata.length; i++) {
  //     if (this.state.logindata[i]["nusnetid"] == this.state.nusnetid) {
  //       if (this.state.logindata[i]["password"] == this.state.password) {
  //         this.setState({
  //           found: true,
  //           fail: false
  //         })
  //     }
  //   }
  // };
  // if (!this.state.found) {
  //   this.setState({
  //     fail: true
  //   })
  // } 
  console.log("Updated")
}
  render() {
    const placeholderSuccess = <p></p>;
    const extra = <p>{this.state.nusnetId}</p>;
    const loginFail = <Alert status='error'>
    <AlertIcon />
    <AlertTitle>Login fail</AlertTitle>
    <AlertDescription>Wrong NUSNETID or NUSNET Password</AlertDescription>
  </Alert>;
    const report = "RZone is Raffles Hall's student activities portal, developed and maintained by ComMotion. For troubleshooting and bug report, please contact e0773508@u.nus.edu."
  return (
    <div>
      <Container width="100%">
        <img alt="RZONE" />
      </Container>
      <Container maxWidth={820} width='100%' h='10' style={{display:"flex", flexDirection: "column", flexWrap: "wrap"}}>
        <Box width="45vw" maxWidth={400} minWidth={100} align="right" style={{padding:"10px"}}>
        <Text fontSize='2xl' style={{display: "flex", alignItems: "end", height: "60px", padding:"20px", color: "teal"}}>RZone 3.0</Text>
          <FormControl id="login" paddingLeft="20px" isRequired>
            <Input type='text' id="nusnetid" value={this.state.nusnetId} placeholder="NUSNET ID" onChange={(this.setId)}/>
            <Input type='password' id="password" placeholder="NUSNET Password" value={this.state.password} onChange={(this.setPassword)}/>
            <Button colorScheme='teal' variant='solid' type="submit" padding="20px" onClick={this.handleSubmit}>
              LOGIN
            </Button>
          </FormControl>
          {this.state.fail ? loginFail : placeholderSuccess}
        </Box>
      <Box width='45vw'  maxWidth={400} minWidth={100} style={{padding:"10px"}}>
        <Heading as='h6' size='lg' style={{display: "flex", alignItems: "center", height: "60px", paddingLeft:"20px", color: "white", backgroundColor: "teal"}}>Announcement</Heading>
        <Text fontSize='md' style={{display: "flex", alignItems: "center", padding: "20px", backgroundColor: "white"}}>{report}</Text>
      </Box>
      </Container>
    </div>
  )
  }
}


export default Login;