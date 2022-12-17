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

const Carousel2 = () => {
  return (
    <div className={styles.sb_main}>
      <Carousel responsive={responsive}>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/0d1737ff-11ae-42e4-95df-937ef71a752b.jpg?tr=w-240,cm-pad_resize"
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
              Face Serums
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/abfde2f7-4d53-4e07-b9f7-4f088b801595.jpg?tr=w-240,cm-pad_resize"
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
              Fragrances
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/144c95cd-e1d3-4b0d-8d5a-a9ecda42e737.jpg?tr=w-240,cm-pad_resize"
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
              Body Lotions
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize"
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
              Foundations
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/7d79d30f-b511-459c-872b-2cad46a7eee6.jpg?tr=w-240,cm-pad_resize"
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
              Gift Sets
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize"
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
              Feminine Hygiene
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/b21dc0cc-ff53-44e6-988c-624c0cc95c18.jpg?tr=w-240,cm-pad_resize"
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
            src="https://images-static.nykaa.com/uploads/8d0d6d65-4c38-461a-8fa2-81c43b4e3052.jpg?tr=w-240,cm-pad_resize"
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
              Eyeliners & kajals
            </Text>
          </div>
        </Box>
        <Box h="380px" w="250px">
          <Image
            src="https://images-static.nykaa.com/uploads/92447a8b-4cbc-4cfa-9c65-818137cbddf7.jpg?tr=w-240,cm-pad_resize"
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
            src="https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize"
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
              Highlighters
            </Text>
          </div>
        </Box>
      </Carousel>
    </div>
  );
};

export default Carousel2;
