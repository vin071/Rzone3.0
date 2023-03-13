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

function MyTable(props) {
  const [selectedMember, setSelectedRow] = useState([]);

  const handleRowAccept = (name) => {
    const curr_members = selectedMember
    curr_members.push(name)
    // setSelectedRow(curr_members)
    return
  }

  const handleRowReject = (name) => {
    const curr_members = selectedMember
    const index = curr_members.indexOf(name)
    const x = curr_members.splice(index, 1)
    setSelectedRow(curr_members)
    return
  }
  
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
        
        {props.data.map((row, index) => (
          // <ButtonGroup variant="ghost" id={row.name}>
          <Tr className="clickable" key={index} styles={{display:"block"}}>
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
                onClick={handleRowAccept(row.name)}
              />
              <IconButton
                colorScheme='gray'
                aria-label='Reject'
                size='lg'
                icon={<CloseIcon />}
                onClick={handleRowReject(row.name)}
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

const Manage_application = () => {
  const curr_cca = "RAG";
  const num_slots = 52;
  const data = [
    { name: 'Alice', sex: "F", phone:845, email: 'alice@example.com', blk: 3, course:"ISE", app_remark: "", offer:0 },
    { name: 'Bob', sex: "M", phone:845, email: 'alice@example.com', blk: 3, course:"ME", app_remark: "", offer:0 },
    { name: 'Charlie', sex: "M", phone:845, email: 'alice@example.com', blk: 3, course:"CS", app_remark: "", offer:0 }
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
  )
}


export default Manage_application;