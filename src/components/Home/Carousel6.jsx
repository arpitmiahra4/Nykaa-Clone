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

const Carousel6 = () => {
  return (
    <div className={styles.sb_main}>
      <Carousel responsive={responsive}>
        <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/9543baff-6b4e-4d1d-ab9c-e7bded753c9c.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius="10px"
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
              color="black"
              fontSize="20px"
              fontWeight="bolder"
            >
              Up To 40% Off
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              On Entire Range
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/5e2197ef-8b05-4db6-8b5c-f92e3bd4b867.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
              borderRadius: "10px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Up To 30% Off
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              On All Orders
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/23951d99-e2f3-48e2-ac05-49d88e4d52f1.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
              borderRadius: "10px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Up To 20% Off
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              On Bestsellers
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/d41fca7d-2790-45bb-bf9c-f405e8fd9cdd.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
              borderRadius: "10px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Up To 20% Off
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              Huda & MonaKattan
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/eba1d227-bc0c-4d26-aa63-dd1fdabd553d.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
              borderRadius: "10px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Up To 40% Off+
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              On Rs.900
            </Text>
          </div>
        </Box>
        <Box h="300px" w="250px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/27d2c518-32f0-4d8a-a956-6baf9a27d00a.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "50px",
              borderRadius: "10px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              View All
            </Text>
            <Text pl={3} mt="-5px" bg={"whiteAlpha.100"}>
              Makeup
            </Text>
          </div>
        </Box>
      </Carousel>
    </div>
  );
};

export default Carousel6;
