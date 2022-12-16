import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Carousel9 = () => {
  return (
    <div className={styles.sb_main}>
    <Carousel responsive={responsive}>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/7c880d12-bf81-4385-bb2e-c53adeebc693.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
      backgroundColor:"white",
      opacity:0.9,
      height:"50px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"} color="black" fontSize="20px" fontWeight="bolder">Up To 40% Off</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>On Entire Range</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/90cb2b2f-ce05-4e9b-bbf7-c2c7d1498fe8.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
         backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">Up To 30% Off</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>On All Orders</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/6ae9a48a-6b79-4ac1-96d8-c24ee36b26fa.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
        backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">Up To 20% Off</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>On Bestsellers</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/af1ac090-6db8-4a71-9166-3a34d5c93db2.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
         backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">Up To 20% Off</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>Huda & MonaKattan</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/8f350915-b498-497b-b626-36bd29e98d2e.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
         backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">Up To 40% Off+</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>On Rs.900</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/a94ce07a-a504-45e3-9e97-d3bdb19bd24b.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
       backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"  
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">View All</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>Global Faves</Text>
    </div>
  </Box>

</Carousel>
</div>
  )
}

export default Carousel9