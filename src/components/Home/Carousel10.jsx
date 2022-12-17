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
    items: 3,
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

const Carousel10 = () => {
  return (
    <div className={styles.sb_main}>
      <Carousel responsive={responsive}>
        <Box h="250px" w="450px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/0d07e5a4-2dc3-4ff7-8a8d-04f9986b540a.jpg?tr=w-400,cm-pad_resize"
            alt="error"
            w={450}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "30px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              color="black"
              fontSize="20px"
              fontWeight="bolder"
            >
              From Salons To You
            </Text>
          </div>
        </Box>
        <Box h="250px" w="450px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/0d07e5a4-2dc3-4ff7-8a8d-04f9986b540a.jpg?tr=w-400,cm-pad_resize"
            alt="error"
            w={450}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "30px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              color="black"
              fontSize="20px"
              fontWeight="bolder"
            >
              From Salons To You
            </Text>
          </div>
        </Box>
        <Box h="250px" w="450px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/0d07e5a4-2dc3-4ff7-8a8d-04f9986b540a.jpg?tr=w-400,cm-pad_resize"
            alt="error"
            w={450}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "30px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              color="black"
              fontSize="20px"
              fontWeight="bolder"
            >
              From Salons To You
            </Text>
          </div>
        </Box>
        <Box h="250px" w="450px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/0d07e5a4-2dc3-4ff7-8a8d-04f9986b540a.jpg?tr=w-400,cm-pad_resize"
            alt="error"
            w={450}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "30px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              color="black"
              fontSize="20px"
              fontWeight="bolder"
            >
              From Salons To You
            </Text>
          </div>
        </Box>
        <Box h="250px" w="450px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/0d07e5a4-2dc3-4ff7-8a8d-04f9986b540a.jpg?tr=w-400,cm-pad_resize"
            alt="error"
            w={450}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "30px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              color="black"
              fontSize="20px"
              fontWeight="bolder"
            >
              From Salons To You
            </Text>
          </div>
        </Box>
        <Box h="250px" w="450px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/0d07e5a4-2dc3-4ff7-8a8d-04f9986b540a.jpg?tr=w-400,cm-pad_resize"
            alt="error"
            w={450}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "30px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              color="black"
              fontSize="20px"
              fontWeight="bolder"
            >
              From Salons To You
            </Text>
          </div>
        </Box>
        <Box h="250px" w="450px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/0d07e5a4-2dc3-4ff7-8a8d-04f9986b540a.jpg?tr=w-400,cm-pad_resize"
            alt="error"
            w={450}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "30px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              color="black"
              fontSize="20px"
              fontWeight="bolder"
            >
              From Salons To You
            </Text>
          </div>
        </Box>
        <Box h="260px" w="450px" borderRadius={10} border="1px solid gray">
          <Image
            src="https://images-static.nykaa.com/uploads/0d07e5a4-2dc3-4ff7-8a8d-04f9986b540a.jpg?tr=w-400,cm-pad_resize"
            alt="error"
            w={450}
            borderRadius="10px"
          />
          <div
            style={{
              backgroundColor: "white",
              opacity: 0.9,
              height: "40px",
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              color="black"
              fontSize="20px"
              fontWeight="bolder"
            >
              From Salons To You
            </Text>
          </div>
        </Box>
      </Carousel>
    </div>
  );
};

export default Carousel10;
