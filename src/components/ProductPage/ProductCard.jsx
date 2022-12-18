import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../actions/cart";
import styles from "../ProductPage/products.module.css";
import { useToast } from "@chakra-ui/react";
const ProductCard = ({ product }) => {
  const [stars, setStars] = useState(Number(product.rating));
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data);
  const navigate = useNavigate();
  const starArr = new Array(Math.floor(stars)).fill(0);
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleCart = (product) => {
    toast({
      title: "Item Added To Bag",
      description: "Added Successfully.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch(addToCart(product));
  };
  const toast = useToast();
  return (
    <Box className={styles.productCard} w="300px" h="445px">
      <Image
        src={product.image1}
        alt={product.title}
        onClick={() => handleClick(product.id)}
        w="250px"
      />
      <Box>
        <Text h="80px" textAlign={"center"}>
          {product.title}
        </Text>
        <Text textAlign={"center"}>
          MRP :{" "}
          <span style={{ textDecoration: "line-through", marginRight: "8px" }}>
            ₹{product.price}{" "}
          </span>{" "}
          <span className={styles.title}>₹{product.off_price}</span> |{" "}
          <span style={{ color: "green", fontWeight: "medium" }}>
            {product.offer}% OFF
          </span>
        </Text>
      </Box>
      <Box className={styles.stars}>
        {starArr?.map((e) => {
          return <FaStar />;
        })}
      </Box>
      <Box className={styles.btns}>
        <button className={styles.heartbtn}>
          <BsHeart />
        </button>
        <button className={styles.primary} onClick={() => handleCart(product)}>
          Add To Bag
        </button>
      </Box>
    </Box>
  );
};

export default ProductCard;
