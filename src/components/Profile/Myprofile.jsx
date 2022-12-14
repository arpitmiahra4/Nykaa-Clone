import React from 'react'
import {Box, Button, HStack, Image, Input, Text, useDisclosure, VStack} from "@chakra-ui/react"
import {AiFillHome,AiTwotoneEdit} from "react-icons/ai"
import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const Myprofile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [address, setaddress] = useState("")
  const [update,setupdate]=useState("")
  // console.log(update)
  const handleChange=async()=>{
    setaddress(update)
  } 
  return (
    <>
      <Box>
      <Box bgColor="#0D324D" p={"150"}>
        <Box  bgColor="white" p={["10","10","10","10"]}>
          <HStack>
          <Image src="https://www.nykaa.com/assets/desktop/images/my_account/default_avatar.svg"/>
          <VStack>
          <Text fontWeight="bold">Arihant Jain</Text>
          <Text>Mobile: 9958394688</Text>
          <Text>Date Of Birth: dd-mm-yyyy</Text>
          </VStack>
          </HStack>
        </Box>
      </Box>
        <Box w="100%" mt="20px">
          <Text fontSize="30" display="flex" alignItems="center"><AiFillHome/><Text>MY ADDRESSES</Text></Text>
          <Button onClick={onOpen} ml="80%"><AiTwotoneEdit/>{address===""?"Add Address":"Edit"}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>New Address</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input placeholder="Enter new Address" onChange={(e)=>setupdate(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost' onClick={handleChange}>Update Address</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Box width="100%" height="200px" >
              <Text fontStyle="italic">{address===""? "No Address has been added add now!":address}</Text>
            </Box>
        </Box>
      </Box> 
    </>
  )
}

export default Myprofile