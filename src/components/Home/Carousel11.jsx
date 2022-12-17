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

const Carousel11 = () => {
  return (
    <div className={styles.sb_main}>
      <Carousel responsive={responsive}>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/fb7ade3e-737f-4f2c-94f2-7c3726df87c4.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              style={{ color: "#000000" }}
              fontSize="20px"
              fontWeight="bolder"
            >
              Upto 50% Off
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/720b7002-2278-4c47-a25a-3497f7c8a29f.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Upto 80% Off
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/f918e299-3184-4170-9952-64ebd85ae2ed.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Upto 70% Off
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/8484e0a6-fd1b-43cf-8f31-c38d684af4d4.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Upto 70% Off
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/92806b9a-69b4-48bb-8a9a-4a8c480a7c84.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Upto 70% Off
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/3e446743-2508-43c3-9f57-ad804e627e6c.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Upto 70% Off
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/cbd59372-a488-4297-9e47-559005f86a97.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Moisturisers
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/57cc4dfa-e17b-4b79-a354-b1bc3cc73e26.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Upto 70% off
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/7acf55f2-df86-49ba-a143-5243ea052e4b.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Bridal Makeup
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/56217caf-9fd3-4c2f-85ce-23b7659e4844.jpg?tr=w-200,cm-pad_resize"
            alt="error"
            w={300}
          />
          <div
            style={{
              backgroundColor: "white",
              marginTop: "-30px",
              opacity: 0.6,
            }}
          >
            <Text
              pl={3}
              bg={"whiteAlpha.100"}
              fontSize="20px"
              color="black"
              fontWeight="bold"
            >
              Upto 70% Off
            </Text>
          </div>
        </Box>
      </Carousel>
    </div>
  );
};

export default Carousel11;
