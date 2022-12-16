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


const Carousel7 = () => {
  return (
    <div className={styles.sb_main}>
    <Carousel responsive={responsive}>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/57fd4a23-1bd6-4a44-b538-974a636de92e.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/77dc552f-ec75-4bfb-b851-604a052eca69.png?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/0769ac4a-3dda-45bb-9995-bae2c2c41925.png?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/a6ffd5f1-6999-491e-861b-edea34bb2016.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/e1482d8b-a194-4229-be79-ad1e80851e23.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/f0ea4956-76d4-4b7c-95b5-ea1a1b8768b3.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
       backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"  
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">View All</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>Skincare</Text>
    </div>
  </Box>

</Carousel>
</div>
  )
}

export default Carousel7