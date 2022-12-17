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

const Carousel3 = () => {
  return (
    <div className={styles.sb_main}>
      <Carousel responsive={responsive}>
        <Box h="260px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.9,
              height: "40px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              style={{ color: "#000000" }}
              fontSize="20px"
              fontWeight="bolder"
            >
              Moisturisers
            </Text>
          </div>
        </Box>
        <Box h="260px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.9,
              height: "40px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Bath & Body
            </Text>
          </div>
        </Box>
        <Box h="260px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.9,
              height: "40px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Face Washes
            </Text>
          </div>
        </Box>
        <Box h="260px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.9,
              height: "40px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Budget Makeup
            </Text>
          </div>
        </Box>
        <Box h="260px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.9,
              height: "40px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Value Combos
            </Text>
          </div>
        </Box>
        <Box h="260px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-240,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.9,
              height: "40px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Shampoos
            </Text>
          </div>
        </Box>
      </Carousel>
    </div>
  );
};

export default Carousel3;
