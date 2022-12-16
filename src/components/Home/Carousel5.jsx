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


const Carousel5 = () => {
  return (
    <div className={styles.sb_main}>
    <Carousel responsive={responsive}>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/fe745bcf-8887-4918-8dd6-1a7580f30931.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
      backgroundColor:"white",
      opacity:0.9,
      height:"50px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"} color="black" fontSize="20px" fontWeight="bolder">Get a Best Seller Trial</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>On All Orders</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/91c0e56e-535b-448d-a3ca-0b866643c448.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
         backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">Radiance Primer</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>On All Orders</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/78c539f1-c06c-4c1c-8bce-534f0b1a0ced.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
        backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">Exclusive Offers</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>On Bestsellers</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/90a3004f-79a5-4bf9-84ff-8d656c0c9c4b.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
         backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">Signature Scents</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>Huda & MonaKattan</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/75ad06b4-e18c-4258-a6ff-ce3d78ee4162.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
         backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">Gifts Worth Rs.590</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>On Rs.900</Text>
    </div>
  </Box>
  <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
    <Image src="https://images-static.nykaa.com/uploads/7fbe51fb-f11e-44bb-8188-5f624c1285e0.jpg?tr=w-240,cm-pad_resize" alt="error" w={300} borderRadius="10px"/>
    <div style={{
       backgroundColor:"white",
      opacity:0.9,
      height:"50px",
      borderRadius:"10px"  
    }}>
    <Text pl={3} bg={"whiteAlpha.100"}  fontSize="20px" color="black" fontWeight="bold">View All</Text>
    <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>Luxe</Text>
    </div>
  </Box>

</Carousel>
</div>
  )
}

export default Carousel5