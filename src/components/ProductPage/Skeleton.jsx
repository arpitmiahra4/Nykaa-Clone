import React from 'react';
import styles from "../ProductPage/products.module.css";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
const Skeleton = () => {
    return (
        <div className={styles.skeleton}>
            <Box padding='6' boxShadow='lg'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />
               
            </Box>
        </div>
    )
}

export default Skeleton;