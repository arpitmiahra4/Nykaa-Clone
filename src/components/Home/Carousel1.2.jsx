import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Home.module.css";
import { Box, Image, useColorModeValue } from "@chakra-ui/react";

function Carousel2() {
  return (
    <>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          centerMode={false}
          className=""
          containerClass="container"
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          renderArrowsWhenDisabled={true}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          <div className={styles.cardwidth}>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/92447a8b-4cbc-4cfa-9c65-818137cbddf7.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
          <div>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
          <div>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/7d79d30f-b511-459c-872b-2cad46a7eee6.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
          <div>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/b21dc0cc-ff53-44e6-988c-624c0cc95c18.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
          <div>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
          <div>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/8d0d6d65-4c38-461a-8fa2-81c43b4e3052.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
          <div>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/abfde2f7-4d53-4e07-b9f7-4f088b801595.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
          <div>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
          <div>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/144c95cd-e1d3-4b0d-8d5a-a9ecda42e737.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
          <div>
            <Box
              maxW={"235px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"312.25px"}
                w={"233.46"}
                src={
                  "https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize"
                }
                objectFit={"cover"}
              />
            </Box>
          </div>
        </Carousel>
      </div>
      ;
    </>
  );
}

export default Carousel2;
