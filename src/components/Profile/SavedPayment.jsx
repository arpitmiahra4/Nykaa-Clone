import { Box,Center,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Pic from "../Assets/Capture1.PNG"

const SavedPayment = () => {
  return (
    <div style={{width:"100%"}}> 
        <Box>
        <Box>
            <Text fontSize="25px" fontWeight="bold">My Saved Payments</Text>
        </Box>
        <Box p="200px">
            <Center>
            <Image src={Pic}/>
            </Center>
            <Center>
                <Text fontSize="large" fontStyle="helvetics">You haved not saved any of your</Text>
            </Center>
            <Center>
                <Text fontSize="large" fontStyle="helvetics">payment modes yet.</Text>
            </Center>
            <Center>
                <Text mt="40px" fontSize="xl" fontStyle="helvetics">After you make a purchase with Cards,</Text>
            </Center>
            <Center>
                <Text fontSize="xl" fontStyle="helvetics">UPI or PayTM they will appear here.</Text>
            </Center>
        </Box>

        </Box>
    </div>
  )
}

export default SavedPayment