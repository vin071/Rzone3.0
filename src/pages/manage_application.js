import * as React from 'react'
import { useState, useEffect } from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { IconButton, Button, ButtonGroup } from '@chakra-ui/react'
import {
  FormConTrol,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import { Component } from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

const first_note = "Note: red background means the application was rejected and green means it was approved. You may update your decision anytime during Round 1B. Applicants will only see the outcome in round C."

class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMember: []
    }
    this.setSelectedMember = this.setSelectedMember.bind(this)
    this.handleRowAccept = this.handleRowAccept.bind(this)
    this.handleRowReject = this.handleRowReject.bind(this)
  }

  setSelectedMember(new_arr) {
    this.setState = {
      selectedMember : new_arr
    }
  } 

  handleRowAccept(e) {
    const members_ = this.state.selectedMember
    if (!members_.includes(e.target.value)) {
      members_.push(e.target.value)
      this.setSelectedMember(members_)
    }
    console.log("accept")
    console.log(this.state.selectedMember)
  }

  handleRowReject(e) {
    const curr_members = this.state.selectedMember
    if (curr_members.includes(e.target.value)) {
      const index = curr_members.indexOf(e.target.value)
      const x = curr_members.splice(index, 1)
      this.setSelectedMember(curr_members)
    }
    console.log("reject")
    console.log(this.state.selectedMember)
  }

  render() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Sex</Th>
          <Th>Phone</Th>
          <Th>Email</Th>
          <Th>Blk</Th>
          <Th>Course</Th>
          <Th>Application Remarks</Th>
          <Th>Offer</Th>
        </Tr>
      </Thead>
      <Tbody>
        
        {this.props.data.map((row, index) => (
          // <ButtonGroup variant="ghost" id={row.name}>
          <Tr className="clickable" key={index} styles={{display:"block", backgroundColor: row.offer == 1 ? "teal" : "white"}}>
            <Td>{row.name}</Td>
            <Td>{row.sex}</Td>
            <Td>{row.phone}</Td>
            <Td>{row.email}</Td>
            <Td>{row.blk}</Td>
            <Td>{row.course}</Td>
            <Td>{row.app_remark}</Td>
            <Td>
            <Stack direction='row' spacing={4}>
              <IconButton
                colorScheme='teal'
                aria-label='Accept'
                size='lg'
                icon={<CheckIcon />}
                value={row.id}
                onClick={this.handleRowAccept}
              />
              <IconButton
                colorScheme='gray'
                aria-label='Reject'
                size='lg'
                icon={<CloseIcon />}
                value={row.id}
                onClick={this.handleRowReject}
              />
            </Stack>
            </Td>
          </Tr>
          //</ButtonGroup>
        ))}
      </Tbody>
    </Table>
  );
  }
}

class Manage_application extends React.Component {
  render() {
  const curr_cca = "RAG";
  const num_slots = 52;
  const data = [
    { id: "1", name: 'Alice', sex: "F", phone:84852145, email: 'alice@example.com', blk: 3, course:"ISE", app_remark: "", offer:0 },
    { id: "2", name: 'Bob', sex: "M", phone:94562845, email: 'bob@example.com', blk: 8, course:"ME", app_remark: "", offer:1 },
    { id: "3", name: 'Charlie', sex: "M", phone:87254645, email: 'charlie@example.com', blk: 3, course:"CS", app_remark: "", offer:0 },
    { id: "4", name: 'Dan', sex: "M", phone:84040005, email: 'dan@example.com', blk: 6, course:"ISE", app_remark: "", offer:0 },
    { id: "5", name: 'Ellie', sex: "F", phone:87362545, email: 'ellie@example.com', blk: 5, course:"ME", app_remark: "", offer:1 },
    { id: "6", name: 'Frank', sex: "M", phone:84250135, email: 'frank@example.com', blk: 5, course:"CS", app_remark: "", offer:0 }
  ];
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
        <Container width={800}>
            <Heading as='h3' size='lg'>Application Management/ {curr_cca}</Heading>
        </Container>
        <Container padding={5} width={800}>
            <Text fontSize='md'>
              {first_note}
            </Text>
        </Container >
        <Container padding={5} width={800}>
            <Text fontSize='md'>
              You are to issue {num_slots} offer(s) in this round unless there are insufficient applicants
            </Text>
        </Container>
          <MyTable data={data} />
    </ChakraProvider>
  )}
}


export default Manage_application;