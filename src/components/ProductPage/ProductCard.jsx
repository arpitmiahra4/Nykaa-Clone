import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from "../ProductPage/products.module.css";

const ProductCard = ({ product }) => {
  const [stars, setStars] = useState(Number(product.rating));
  const navigate=useNavigate();
  const starArr = new Array(Math.floor(stars)).fill(0);
  const handleClick = (id) => {
     navigate(`/products/${id}`) ;
    
  }
  return (
    <div className={styles.productCard} onClick={() => handleClick(product.id)}>
      <img src={product.image1} alt={product.title} />
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
        <button className={styles.heartbtn}><BsHeart /></button>
        <button className={styles.primary}>Add to Bag</button>
      </div>
    </div>
  )
}

export default ProductCard