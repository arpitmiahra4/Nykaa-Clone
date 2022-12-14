import { Box, Button, Center, Image,Text } from '@chakra-ui/react'
import React from 'react'
import Pic from "../Assets/Capture.PNG"

const Wishlist = () => {
  return (
    <>
      <Box>
        <Box p="250px">
        <Center>
          <Image src={Pic} height="200px"/>
        </Center>
        <Center>
          <Text fontWeight="bold">NO ITEMS IN THE WISHLIST</Text>
        </Center>
        <Center>
          <Text>Add now, Buy Later.</Text>
        </Center>
        <Center>
          <Text>Save your favourite beauty items </Text>
        </Center>
        <Center>
          <Text>here!</Text>
        </Center>
        <Center mt="50px">
          <Button color="red" bgColor="white">START SHOPPING</Button>
        </Center>
        </Box>
      </Box>
    </>
  )
}

export default Wishlist