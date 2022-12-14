import React from 'react'
import {Box,Text,Image, Center} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

const Orders = () => {
  return (
    <>
        <Box display="flex" fontFamily="italics" fontWeight="bold">
            <NavLink to="/">
            <Text fontSize="25px" mr="10px">⇐ </Text>
            </NavLink>
            <Text fontSize="25px">My Orders</Text>
        </Box>
        <hr />

        <Box p="200px">
            <Center>
                <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA/AEADASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDBAEH/8QAKBAAAgECAwcFAQAAAAAAAAAAAAECAxEEFGESISIxUVKRIzJxgaFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcQM2Yl2oelWc5bLVgLAAAAAAAAAAuxDsj4M1T0614q39RrM+KXtl9ALmJ6eAzE9PBIAK5iengMxPTwSAC9OtOU0mlvNBnwsd7l03GgAJ4hXpPTeUOSs4u/KwGEDsWk+JXXyV9DX9AiBe2H6v8ARJOknwxbXyBoox2aaX2OJTmpxuvA4ALUTlCSXNoYAMimo03Bx3jww94pybT6F7K97HQIZZdzEhJUpSU43NRxpPmrgRwyfFK1k+RcAA//2Q==" height="300px"/>
            </Center>
            <Center>
                <Text>No recent orders</Text>
            </Center>
            <Center>
                <Text color="red">Start Shopping</Text>
            </Center>
        </Box>
    </>
  )
}

export default Orders