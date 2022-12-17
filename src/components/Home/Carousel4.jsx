import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousel4 = () => {
  return (
    <div className={styles.sb_main}>
      <Carousel responsive={responsive}>
        <Box h="300px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/f2c42fe2-c9f9-440f-8be3-3a7fb5e440c7.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius={10}
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              style={{ color: "#000000" }}
              fontSize="20px"
              fontWeight="bolder"
            >
              Makeup
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              Up To 30% Off
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/6213c0ee-b970-455a-befd-82bbdd9ed246.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius={10}
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Skincare
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              Up To 30% Off
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/88f15a35-6e1e-4b4a-8e8f-5d90041bd286.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius={10}
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              New Arrivals
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              Up To 50% Off
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/6cc4a1ac-36ab-42a9-bcf8-77fc88d0b2f9.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius={10}
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Luke Minis
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              Free Shipping
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/2d355c9b-0d4d-45e8-a3c4-43a981a82e7c.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius={10}
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Hair
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              Up To 30% Off
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/df2b5d98-17f7-4e40-bd93-4bb037e69229.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius={10}
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Bestsellers
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              Up To 30% Off
            </Text>
          </div>
        </Box>
      </Carousel>
    </div>
  );
};

export default Carousel4;
