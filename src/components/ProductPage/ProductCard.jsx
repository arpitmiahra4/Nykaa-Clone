import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../actions/cart';
import { addToWishlist } from '../../actions/wishlist';
import styles from "../ProductPage/products.module.css";

const ProductCard = ({ product }) => {
  const [stars, setStars] = useState(Number(product.rating));

  const dispatch=useDispatch();
  const data=useSelector((state)=>state);
  console.log(data);
  const navigate=useNavigate();
  const starArr = new Array(Math.floor(stars)).fill(0);
  const handleClick = (id) => {
     navigate(`/products/${id}`) ;
    
  }

  const handleCart=(product)=>{
       dispatch(addToCart(product));

  }

  const handleWishList=(product)=>{
    dispatch( addToWishlist(product));

}
 

  return (
    <div className={styles.productCard} >
      <img src={product.image1} alt={product.title} onClick={() => handleClick(product.id)}/>
      <p className={styles.title}>{product.title}</p>
      <p className={styles.price}>MRP : <span style={
        { "textDecoration": "line-through", "marginRight": "8px" }
      }>₹{product.price} </span> <span className={styles.title}>₹{product.off_price}</span> | <span style={{ "color": "green", "fontWeight": "medium" }}>{product.offer}% OFF</span></p>

      <div className={styles.stars}>
        {
          starArr?.map((ele) => {
            return <FaStar />
          })

        }
      </div>

      <div className={styles.btns}>
        <button className={styles.heartbtn} onClick={()=>handleWishList(product)}><BsHeart /></button>
        <button className={styles.primary} onClick={()=>handleCart(product)}>Add to Bag</button>
      </div>
    </div>
  )
}

export default ProductCard