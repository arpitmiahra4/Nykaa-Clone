import React from 'react'
import {Button,Text, VStack} from "@chakra-ui/react"
import {CgProfile} from "react-icons/cg"
import {FaWallet,FaTruck} from "react-icons/fa"
import {RiLogoutCircleRLine} from "react-icons/ri"
import {AiTwotoneHeart} from "react-icons/ai"
import {RxDashboard} from "react-icons/rx"
import {NavLink} from "react-router-dom"

const ProfileOption = () => {
  return (
    <>
        <VStack p="50px">
            <NavLink to="/">
            <Button w="200px" border="none" >
                <Text mr="50%" display="flex" alignItems="center"> <RxDashboard/><Text ml="10px">Dashboard</Text> </Text> 
            </Button>
            </NavLink>
            <NavLink to="Mydatee">
            <Button w="200px" border="none" >
                <Text mr="50%" display="flex" alignItems="center"> <CgProfile/><Text ml="10px">My Profile</Text> </Text>
            </Button>
            </NavLink>
            <NavLink to="wallet">
            <Button w="200px" border="none">
                <Text mr="50%" display="flex" alignItems="center"> <FaWallet/> <Text ml="10px">My Wallet</Text> </Text>
            </Button>
            </NavLink>
            <NavLink to="orders">
            <Button w="200px"  border="none" >
                <Text mr="50%" display="flex" alignItems="center"> <FaTruck/> <Text ml="10px">My Orders</Text></Text>
            </Button>
            </NavLink>
            <NavLink to="wishlist">
            <Button w="200px"  border="none" >
                <Text mr="50%" display="flex" alignItems="center"> <AiTwotoneHeart/> <Text ml="10px">My Wishlist</Text></Text>
            </Button>
            </NavLink>
            <NavLink to="savedpayment">
            <Button w="200px"   border="none" >
                <Text mr="15%" display="flex" alignItems="center"> <CgProfile/> <Text ml="10px">My Saved Payment</Text></Text>
            </Button>
            </NavLink>
            <NavLink to="/">
            <Button w="200px" border="none" >
                <Text mr="70% "display="flex" alignItems="center" > <RiLogoutCircleRLine/> <Text ml="10px">Logout</Text></Text>
            </Button>
            </NavLink>
        </VStack>
    </>
  )
}

export default ProfileOption