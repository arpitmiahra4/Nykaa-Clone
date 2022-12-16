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


const Carousel8 = () => {
  return (
    <div className={styles.sb_main}>
    <Carousel responsive={responsive}>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/1208f0cc-cb69-4c28-8aa7-fe8da2dc1ad4.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/c290dc0d-73c6-4999-b741-fedfc640a432.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/af1d8eba-e91b-4952-bae0-5c42f4080a94.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/7fe21db0-badf-4cb9-98e5-ef3f57523240.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/c788bac1-8369-433f-beb6-3bbf032f9bed.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
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
    <Image src="https://images-static.nykaa.com/uploads/b9984d64-309c-4ee2-829f-48376374ebaa.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
       backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"  
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">View All</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>More Beauty</Text>
    </div>
  </Box>

</Carousel>
</div>
  )
}

export default Carousel8