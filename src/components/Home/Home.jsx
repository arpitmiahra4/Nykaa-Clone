import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Home.module.css";
import Carousel1 from "./Carousel1.1";
import Carousel2 from "./Carousel1.2";
import Horizontal from "./Horizontal";
import {
  Box,
  Text,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const cardImages1 = [
  {
    url: "https://images-static.nykaa.com/uploads/046de71f-4797-44bc-b7d2-1c198e65d050.png?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/57c0cdd9-3cbc-470e-a47b-c08ee7ca0144.png?tr=w-1200,cm-pad_resize",
  },
];

const cardImages2 = [
  {
    url: "https://images-static.nykaa.com/uploads/45e77657-2fba-49f1-b077-437dc02b978c.gif?tr=w-1200,cm-pad_resize",
    tittle: "For Every Skin Type",
    discount: " Upto 35% Off%",
  },
  {
    url: "https://images-static.nykaa.com/uploads/2aaabbf7-64bb-4ec8-b73c-671074554789.jpg?tr=w-1200,cm-pad_resize",
    tittle: "On Entire Range",
    discount: " Upto 25% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/ebbf5f5b-9f8c-4839-9063-d4b3d4fb5656.gif?tr=w-1200,cm-pad_resize",
    tittle: "For Every Skin Type",
    discount: "Upto 35% Off%",
  },
  {
    url: "https://images-static.nykaa.com/uploads/1555b61a-a163-408a-ab3d-3a666832acfb.jpg?tr=w-1200,cm-pad_resize",
    tittle: " Explore Waterproof Makeup +",
    discount: "Exciting Gifts On Orders!",
  },

  {
    url: "https://images-static.nykaa.com/uploads/83247895-0a7e-4141-9b86-ce7b039e7c3a.gif?tr=w-1200,cm-pad_resize",
    tittle: "For Every Skin Type",
    discount: "Exciting Gifts On Orders!",
  },
  {
    url: "https://images-static.nykaa.com/uploads/3856736f-82d6-45c0-a10e-8bc90e891bb2.gif?tr=w-1200,cm-pad_resize",
    tittle: "On Entire Range",
    discount: "Upto 25% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/b1189a45-6537-415f-ae55-bdd500d074b0.gif?tr=w-1200,cm-pad_resize",
    tittle: " worth Rs. 525 on Rs. 800",
    discount: "Upto 40% Off + Free lipstick",
  },
  {
    url: "https://images-static.nykaa.com/uploads/64c65727-2d07-41a5-b4a5-6e0dbfee8b98.jpg?tr=w-1200,cm-pad_resize",
    tittle: "SKY HIGH Mascara Has Landed In India !",
    discount: "Upto 30% Off On Maybelline Bestsellers  ",
  },
];
const cardImages3 = [
  {
    url: "https://images-static.nykaa.com/uploads/db316f35-4e1f-49a2-942e-c730599ff776.gif?tr=w-1200,cm-pad_resize",
    tittle: "Moisturizer Worth Rs. 399 On Rs. 1000",
    discount: "Upto 15% Off + Free 5% Niacinamide",
  },
  {
    url: "https://images-static.nykaa.com/uploads/4e85e306-4fcf-463a-ae04-d0066fb010de.gif?tr=w-1200,cm-pad_resize",
    tittle: "explore more+",
    discount: "Upto 20% Off",
  },
];
const cardImages31 = [
  {
    url: "https://images-static.nykaa.com/uploads/4c447fa5-0de0-4c69-a138-177321485adf.gif?tr=w-1200,cm-pad_resize",
    tittle: "Complimentary Gifts On International Favourites",
    discount: " Upto 30% Off +",
  },
];
const cardImages4 = [
  {
    url: "https://images-static.nykaa.com/uploads/1ca5ddd3-c263-40b7-9713-d8dede28b4be.jpg?tr=w-1200,cm-pad_resize",
    tittle: "explore more+",
    discount: "Additional 5% Off On Rs. 399",
  },
];
const cardImages5 = [
  {
    url: "https://images-static.nykaa.com/uploads/5c11bb71-1500-477e-9943-491d57a1ec57.gif?tr=w-1200,cm-pad_resize",
    tittle: "explore more+",
    discount: " Grab SUGAR Favorites On Purchase Of Rs.799",
  },
  {
    url: "https://images-static.nykaa.com/uploads/62eb4f26-ccb1-4a18-82e0-28b99368314b.jpg?tr=w-1200,cm-pad_resize",
    tittle: "Additional 5% Off On Rs. 399",
    discount: "  Upto 30% Off",
  },
];