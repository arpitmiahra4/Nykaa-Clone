import { Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Carousel1 from "./Carousel1.1";
import Carousel2 from "./Carousel1.2";
import Carousel10 from "./Carousel10";
import Carousel3 from "./Carousel3";
import Carousel4 from "./Carousel4";
import Carousel5 from "./Carousel5";
import Carousel6 from "./Carousel6";
import Carousel7 from "./Carousel7";
import Carousel8 from "./Carousel8";
import Carousel9 from "./Carousel9";
// import Responsive from './Carousel1.2';
// import Crousel2 from './Carousel1.2';
import styles from "./Home.module.css";

const topCard = [
  {
    src: "https://images-static.nykaa.com/uploads/f95cb481-60cc-460c-8285-a5ca121baf8b.jpg?tr=w-400,cm-pad_resize",
    title: "Happy New Hair, From Salons to You!",
    dis: "Pick a travel combo kit on ₹1859, Mini on ₹1199",
  },
  {
    src: "https://images-static.nykaa.com/uploads/e9dff04b-ada2-4551-9247-3d81eecfe34f.jpg?tr=w-400,cm-pad_resize",
    title: "Up To 40% Off",
    dis: "on Makeup Must-Haves",
  },
  {
    src: "https://images-static.nykaa.com/uploads/50c276c6-3255-4d27-8ae2-6c83e59e4b92.jpg?tr=w-400,cm-pad_resize",
    title: "Up To 16% Off",
    dis: "Free Mini on ₹1100+",
  },
  {
    src: "https://images-static.nykaa.com/uploads/e84bcf3d-af8f-4744-9ac4-534f7358ff12.png?tr=w-400,cm-pad_resize",
    title: "Flat 25% Off on Combos + Free Face Scrub on Rs.799",
    dis: "Build your winter anti-dandruff routine",
  },
  {
    src: "https://images-static.nykaa.com/uploads/9aeb1bf5-ec70-4f24-8a50-6ba667b69d94.png?tr=w-400,cm-pad_resize",
    title: "Up To 15% Off",
    dis: "#1 Dermatologist Recommended Brand in India",
  },
  {
    src: "https://images-static.nykaa.com/uploads/f272b944-a691-4fea-b07f-c90e15dfd764.jpg?tr=w-400,cm-pad_resize",
    title: "Up To 15% Off",
    dis: "On Entire Range",
  },
  {
    src: "https://images-static.nykaa.com/uploads/70607aa1-82c9-4e91-bc23-60c8d74f88b9.jpg?tr=w-400,cm-pad_resize",
    title: "Up To 20% Off",
    dis: "+ Exciting Gifts On Bestsellers",
  },
  {
    src: "https://images-static.nykaa.com/uploads/bd878bad-fedd-431a-bb6c-a367c8a5a2a3.gif?tr=w-400,cm-pad_resize",
    title: "Professional Secret for Frizz Free Hair!",
    dis: "Free Bestseller Mini Serum on ₹599+",
  },
  {
    src: "https://images-static.nykaa.com/uploads/697352c8-e151-4e34-87ad-2ad6d5e4ed26.jpg?tr=w-400,cm-pad_resize",
    title: "Complete Your Party Look In Minutes",
    dis: "With Huda Beauty's Lovefest Collection",
  },
];
const only_nyk = [
  {
    src: "https://images-static.nykaa.com/uploads/180622a5-fc36-46e0-8656-65bb939987d3.png?tr=w-400,cm-pad_resize",
    title: "Upto 20% Off + Free Face Scrub on Rs. 799",
    dis: "Gold Infused Skincare",
  },
  {
    src: "https://images-static.nykaa.com/uploads/f35f5f7e-420b-4a50-b51f-d5720575265f.jpg?tr=w-400,cm-pad_resize",
    title: "3 Piece Kit",
    dis: "On All Orders!",
  },
  {
    src: "https://images-static.nykaa.com/uploads/39308dd5-7720-4c86-a683-a3bd624d48a0.jpg?tr=w-400,cm-pad_resize",
    title: "Min 20% Off; Combos Under 599",
    dis: "Specially Curated Gifts",
  },
];
const featureBrand = [
  {
    src: "https://images-static.nykaa.com/uploads/65813731-f3ba-493f-8bf9-bb0630e96f9e.jpg?tr=w-240,cm-pad_resize",
    title: "Up To 30% Off",
    dis: "",
  },
  {
    src: "https://images-static.nykaa.com/uploads/612e03d1-8194-4bfe-8c28-feba19da3672.jpg?tr=w-240,cm-pad_resize",
    title: "Pick Your Mini",
    dis: "On Orders ₹2000+",
  },
  {
    src: "https://images-static.nykaa.com/uploads/823b094f-4c35-44da-b698-4d0f374d3edb.jpg?tr=w-240,cm-pad_resize",
    title: "10% Off + Mini",
    dis: "On Full-Size Products",
  },
  {
    src: "https://images-static.nykaa.com/uploads/cbb66b48-8844-4003-8678-49e6cf6477bf.png?tr=w-240,cm-pad_resize",
    title: "Min 20% Off",
    dis: "Serum of ₹799 On ₹799",
  },
  {
    src: "https://images-static.nykaa.com/uploads/cfa7c7cb-f1e2-4dc2-8f97-a7cf447ef18d.jpg?tr=w-240,cm-pad_resize",
    title: "Up To 30% Off",
    dis: "On Entire Range",
  },
  {
    src: "https://images-static.nykaa.com/uploads/670b9afa-9940-4975-975f-a528d1a98f55.png?tr=w-240,cm-pad_resize",
    title: "Up To 30% Off",
    dis: "Face Scrub on ₹799",
  },
  {
    src: "https://images-static.nykaa.com/uploads/2a2e9393-52ae-4707-af69-58c5fc762277.jpg?tr=w-240,cm-pad_resize",
    title: "Up To 30% Off",
    dis: "A Free Gift On All Orders",
  },
  {
    src: "https://images-static.nykaa.com/uploads/47d0bf2f-572e-495b-b991-e9fbd3cd1724.jpg?tr=w-240,cm-pad_resize",
    title: "Up To 40% Off",
    dis: "Because You're Worth It",
  },
  {
    src: "https://images-static.nykaa.com/uploads/25befe83-dbbb-447e-bf78-75b9d8c9e51b.jpg?tr=w-240,cm-pad_resize",
    title: "Get 2 Gifts",
    dis: "On ₹6000",
  },
  {
    src: "https://images-static.nykaa.com/uploads/4e996e5d-267c-4e9c-bbb6-5a0a12cfb5cf.jpg?tr=w-240,cm-pad_resize",
    title: "UpTo 40% Off +",
    dis: "Free Face Serum Worth ₹625",
  },
];
const Influencer = [
  {
    src: "https://images-static.nykaa.com/uploads/af1b92dd-5e91-48c4-9fa0-d2ea24298d2a.jpg?tr=w-300,cm-pad_resize",
    title: "Aashi Adani''s",
    dis: "Wedding Glam Picks",
  },
  {
    src: "https://images-static.nykaa.com/uploads/0c6baa6a-1062-495b-b94e-62e351ce537e.jpg?tr=w-300,cm-pad_resize",
    title: "Aashi Adani''s",
    dis: "Wedding Glam Picks",
  },
  {
    src: "https://images-static.nykaa.com/uploads/b9b4d5a8-e407-4b00-ba16-87e6e55a8636.jpg?tr=w-300,cm-pad_resize",
    title: "Aashi Adani''s",
    dis: "Wedding Glam Picks",
  },
  {
    src: "https://images-static.nykaa.com/uploads/f2df709a-051d-4322-8a4c-d1eba3119fbc.jpg?tr=w-300,cm-pad_resize",
    title: "Aashi Adani''s",
    dis: "Wedding Glam Picks",
  },
];
const dis_nyka = [
  {
    src: "https://images-static.nykaa.com/uploads/722cbc0f-ca72-47a8-baa3-ecec4522eaf0.jpg?tr=w-400,cm-pad_resize",
    title: "Celebrating Indian Homegrown Brands",
    dis: "Shop Now",
  },
  {
    src: "https://images-static.nykaa.com/uploads/d4a3fc4d-3fb7-4303-b1e4-95fee8e06b50.jpg?tr=w-400,cm-pad_resize",
    title: "Exciting Brands and Latest Launches",
    dis: "Show New Brands",
  },
  {
    src: "https://images-static.nykaa.com/uploads/4ebe90ae-8b35-43a9-b307-fd16313f4f15.jpg?tr=w-400,cm-pad_resize",
    title: "Coveted Niche Brands For You",
    dis: "Shop Now",
  },
];
const Home = () => {
  axios
    .get("http://localhost:4000")
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
  return (
    <div className={styles.bahaar}>
      <div>
        <Text fontSize={30} fontWeight="bold">
          Best In Beauty
        </Text>
        <Text fontSize={20}>Today’s Top Offers</Text>
        <Carousel1 />
      </div>
      <Box display="flex" gap={30}>
        <Image
          src="https://images-static.nykaa.com/uploads/e7af5dd2-c046-4223-a7f7-96b7b478bb3c.jpg?tr=w-600,cm-pad_resize"
          alt="upper"
          w={700}
        />
        <Image
          src="https://images-static.nykaa.com/uploads/898f495b-4f78-4956-ac80-261eaf808d4f.jpg?tr=w-600,cm-pad_resize"
          alt="lower"
          w={700}
        />
      </Box>
      <Box mt={50}>
        <Image
          src="https://images-static.nykaa.com/uploads/ede59af5-1112-4c73-bbf8-e0aa0c08444b.jpg?tr=w-1200,cm-pad_resize"
          w="99%"
          borderRadius="20px"
        />
      </Box>
      <Box mt={50}>
        <Text fontWeight="bold" fontSize={30}>
          Top Brands
        </Text>
        <Text fontSize={20}>In The Spotlight</Text>
        <div className={styles.top_brands}>
          {topCard.map((el, i) => (
            <div key={i} className={styles.top_cont}>
              <Image
                src={el.src}
                alt={`error ${i}`}
                width="455px"
                borderRadius={10}
              />
              <div className={styles.top_content}>
                <Text fontWeight="bold">{el.title}</Text>
                <Text color="gray.700">{el.dis}</Text>
              </div>
            </div>
          ))}
        </div>
      </Box>
      <Box mt={10} w="100%">
        <Box display="flex" gap="30px">
          <Image
            src="https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize"
            w="48%"
            borderRadius={10}
          />
          <Image
            src="https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-600,cm-pad_resize"
            w="48%"
            borderRadius={10}
          />
        </Box>
        <Image
          m="auto"
          src="https://images-static.nykaa.com/uploads/14dab399-cf31-4731-992e-1845321187d6.jpg?tr=w-600,cm-pad_resize"
          mt="20px"
          w="48%"
          borderRadius={10}
        />
      </Box>

      <Box bg="#fff6f9" pb={10}>
        <Text fontWeight="bold" fontSize={30}>
          Only At Nykaa
        </Text>
        <Text fontSize={20}>Exciting Deals On Exclusive Brands</Text>
        <Box display="flex" gap="20px">
          {only_nyk.map((el, i) => (
            <div key={i} className={styles.top_cont}>
              <Image
                src={el.src}
                alt={`error ${i}`}
                w="460px"
                borderRadius={10}
              />
              <div className={styles.only_nyka}>
                <Text fontWeight="bold">{el.title}</Text>
                <Text>{el.dis}</Text>
              </div>
            </div>
          ))}
        </Box>
      </Box>
      <Box p="10px">
        <Carousel2 />
      </Box>
      <Box mt={30}>
        <Text fontWeight="bold" fontSize={30}>
          Featured Brands
        </Text>
        <Text fontSize={20}>Offers You Can’t Miss</Text>
        <div className={styles.f_brands}>
          {featureBrand.map((el, i) => (
            <div key={i} className={styles.f_inner}>
              <Image
                src={el.src}
                alt={`error ${i}`}
                width="300px"
                borderRadius={10}
              />
              <div className={styles.top_content}>
                <Text fontWeight="bold">{el.title}</Text>
                <Text color="gray.700">{el.dis}</Text>
              </div>
            </div>
          ))}
        </div>
      </Box>
      <Box display="flex" gap={"20px"} mt="30px">
        <Box w={"33%"} border={"1px solid grey"} borderRadius="10px">
          <Image
            src="https://images-static.nykaa.com/uploads/a21a0d6b-958c-4b8a-b02d-6c33844ef0bb.jpg?tr=w-400,cm-pad_resize"
            w={"100%"}
            borderRadius={10}
          />
          <div className={styles.top_content}>
            <Text fontWeight="bold">₹950 Gifts On ₹1100</Text>
            <Text color="gray.700">Sample On All Orders</Text>
          </div>
        </Box>
        <Box w={"33%"} border={"1px solid grey"} borderRadius="10px">
          <Image
            src="https://images-static.nykaa.com/uploads/d8e92831-dadd-41db-a5f0-873cbfeebbf6.jpg?tr=w-400,cm-pad_resize"
            w={"100%"}
            borderRadius={10}
          />
          <div className={styles.top_content}>
            <Text fontWeight="bold">Flat 15% Off</Text>
            <Text color="gray.700">Upto 25% Off on Combos</Text>
          </div>
        </Box>
        <Box w={"33%"} border={"1px solid grey"} borderRadius="10px">
          <Image
            src="https://images-static.nykaa.com/uploads/0a5105a3-c88e-4e35-ac1b-9e87752bd5bb.jpg?tr=w-400,cm-pad_resize"
            w={"100%"}
            borderRadius={10}
          />
          <div className={styles.top_content}>
            <Text fontWeight="bold">On ₹3000: 4 Piece Gift Set</Text>
            <Text color="gray.700">On ₹5000: 5 Piece Gift Set</Text>
          </div>
        </Box>
      </Box>
      <Box mt={30} bg="#e5f2f4" pb={10}>
        <Text fontWeight="bold" fontSize={30}>
          Everyday Essentials
        </Text>
        <Text fontSize={20}>Daily Deals On Beauty Needs</Text>
        <Image
          src="https://images-static.nykaa.com/uploads/f6f096d9-e16d-4442-9207-b4cfe79db784.jpg?tr=w-1200,cm-pad_resize"
          w="1360px"
          mt={5}
          borderRadius={10}
          ml="20px"
        />
        <Box p="10px">
          <Carousel3 />
        </Box>
        <Box mt={30}>
          <Text fontWeight="bold" fontSize={30}>
            Store In Focus
          </Text>
          <Image
            src="https://images-static.nykaa.com/uploads/308b1ea9-2063-4280-a219-c0e7b7f5771e.jpg?tr=w-1200,cm-pad_resize"
            w="1360px"
            mt={5}
            borderRadius={10}
            ml="20px"
          />
        </Box>
      </Box>
      <Box p="10px" bg="#ffe5eb" pb={10}>
        <Carousel4 />
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize={30}>
          Categories In Focus
        </Text>
        <Text fontSize={20}>Shop Our Special Curations</Text>
        <Box mt={2} display="flex" gap={30}>
          <Image
            src="https://images-static.nykaa.com/uploads/5da2d82e-6ea2-4ea8-92ce-3234e2209dc6.jpg?tr=w-600,cm-pad_resize"
            alt="upper"
            borderRadius={10}
            w={700}
          />
          <Image
            src="https://images-static.nykaa.com/uploads/18616ff7-b945-4dcb-9a3d-ba0bad444fc6.jpg?tr=w-600,cm-pad_resize"
            alt="lower"
            borderRadius={10}
            w={700}
          />
        </Box>
      </Box>
      <Box mt={10}>
        <Text fontWeight="bold" fontSize={30}>
          Brands You Can’t Miss
        </Text>
        <Text fontSize={20}>More Offer On Beauty</Text>
      </Box>
      <Box>
        <Text fontWeight="bold">Luxe</Text>
        <Carousel5 />
      </Box>
      <Box mt={5}>
        <Text fontWeight="bold">Makeup</Text>
        <Carousel6 />
      </Box>
      <Box mt={5}>
        <Text fontWeight="bold">Skin</Text>
        <Carousel7 />
      </Box>
      <Box mt={5}>
        <Text fontWeight="bold">More In Beauty</Text>
        <Carousel8 />
      </Box>
      <Box mt={5}>
        <Text fontWeight="bold">Global Faves</Text>
        <Carousel9 />
      </Box>
      <Box mt={10}>
        <Text fontWeight="bold" fontSize={30}>
          Influencer's Picks
        </Text>
        <Text fontSize={20}>What Your Favourites Love</Text>
        <Box display="flex" gap={5}>
          {Influencer.map((el, i) => (
            <div key={i} className={styles.influe}>
              <Image
                src={el.src}
                alt={`error ${i}`}
                width="340px"
                borderRadius={10}
              />
              <div className={styles}>
                <Text fontWeight="bold">{el.title}</Text>
                <Text color="gray.700">{el.dis}</Text>
              </div>
            </div>
          ))}
        </Box>
      </Box>
      <Box mt={10}>
        <Text fontWeight="bold" fontSize={30}>
          Buying Guides
        </Text>
        <Text fontSize={20}>Beauty How To’s And Trends</Text>
        <Box mt={2}>
          <Carousel10 />
        </Box>
        <Box mt={5}>
          <Image
            src="https://images-static.nykaa.com/uploads/f4c3f4d7-a236-4e7a-92f8-e5ba0417c05e.png?tr=w-1200,cm-pad_resize"
            w={"98%"}
          />
        </Box>
      </Box>
      <Box mt={10}>
        <Text fontWeight="bold" fontSize={30}>
          Game Zone
        </Text>
        <Text fontSize={20}>Play & Win</Text>
        <Image
          src="https://images-static.nykaa.com/uploads/c6048ef0-a501-451d-a4a5-e29f339e31a7.png?tr=w-1200,cm-pad_resize"
          w="1400px"
          borderRadius={10}
        />
      </Box>
      <Box mt={10}>
        <Text fontWeight="bold" fontSize={30}>
          Gifting At Nykaa
        </Text>
        <Text fontSize={20}>Give The Present of Beauty</Text>
        <Box display="flex" gap={10} pt="10px">
          <Image
            src="https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=w-600,cm-pad_resize"
            w="680px"
            borderRadius={10}
          />
          <Image
            src="https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-600,cm-pad_resize"
            w="680px"
            borderRadius={10}
          />
        </Box>
      </Box>
      <Box mt={10}>
        <Text fontWeight="bold" fontSize={30}>
          Discover More At Nykaa
        </Text>
        <Text fontSize={20}>Special Offerings</Text>
        <div className={styles.dis_nyka}>
          {dis_nyka.map((el, i) => (
            <div key={i} className={styles.dis_cont}>
              <Image
                src={el.src}
                alt={`error ${i}`}
                width="450px"
                borderRadius={10}
              />
              <div className={styles.top_content}>
                <Text fontWeight="bold">{el.title}</Text>
                <Text color="gray.700">{el.dis}</Text>
              </div>
            </div>
          ))}
        </div>
      </Box>
      <Box mt={10}>
        <Text fontWeight="bold" fontSize={30}>
          Pop-Up Stores
        </Text>
        <Text fontSize={20}>From Nykaa Fashion</Text>
        <Box mt={5} display="flex" gap={5}>
          <Image
            src="https://images-static.nykaa.com/uploads/386bd4dc-d11e-4117-aae2-b917127e8624.jpg?tr=w-600,cm-pad_resize"
            w="700px"
            borderRadius={10}
          />
          <Image
            src="https://images-static.nykaa.com/uploads/efec51c7-9c99-4f4f-a697-fd00caf8b548.jpg?tr=w-600,cm-pad_resize"
            w="700px"
            borderRadius={10}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
