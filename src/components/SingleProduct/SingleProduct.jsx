import axios from 'axios';
import React from 'react';
import {FcCheckmark} from "react-icons/fc"
import { useEffect } from 'react';
import { useState } from 'react';
import {CiLocationOn} from "react-icons/ci/"
import {  FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import style from "../ProductPage/products.module.css";
import styles from "../SingleProduct/product.module.css";
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const SingleProduct = () => {
    const params = useParams();
    console.log(params);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(0);
    

   
    let id = Number(params.id);
    const getProduct = async (id) => {
        try {
            setLoading(true)
            let res = await axios.get(`https://nyka-json.onrender.com/products/${id}`);
            setLoading(false);
            let data = res.data;

            setProduct(data);
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }

    let images = [product.image1, product.image2, product.image3];
    let stars = Math.floor(product.rating);
    let starArr;
    if (stars) {
        starArr = new Array(stars).fill(1);
    }
   
      
      

    useEffect(() => {
        getProduct(id)
    }, []);

    

    if (loading) {
        return <div className={style.skeleton}>
        <Box padding='6' boxShadow='lg'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

        </Box>
        <Box padding='6' boxShadow='lg' >
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

        </Box>
        <Box padding='6' boxShadow='lg' >
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

        </Box>
        </div>
    }

    return (
        <div className={styles.singleProdCont}>
            

            <div className={styles.singleMain}>
                <div className={styles.imageCard}>
                    <div className={styles.multiImg}>
                        {
                            images?.map((image, ind) => {
                                return <img src={image} alt={ind} key={ind} style={{ "border": ind === active ? "2px solid #ff57db" : "1px solid #969696" }} onClick={() => setActive(ind)} />
                            })
                        }
                    </div>
                    <div className={styles.singleImage}>
                        <img src={images[active]} alt="image" />
                    </div>
                </div>

                <div className={styles.detailsCard}>
                    <div className={styles.prodDetails}>
                        <h1 style={{"fontSize":"25px","marginBottom":"15px"}}>{product.title}</h1>
                        <div className={styles.starRating}>
                            <div className={styles.stars}>
                                {
                                    starArr?.map((star) => {
                                        return <FaStar />
                                    })
                                }
                            </div>
                            <p>{product.rating}/5&nbsp; {product.ratingNum} ratings  & {product.reviews} reviews  &nbsp; Q&As</p>
                        </div>
                        <p className={styles.mrp}>
                            MRP: <span style={{"textDecoration":"line-through"}}>{product.price}</span>&nbsp; <span style={{"fontSize":"larger","fontWeight":"bold"}}> ₹{product.off_price}</span> &nbsp;<span style={{"color":"green"}}>{product.offer}% Off</span>
                        </p>
                        <p className={styles.inc}>inclusive all taxes</p>
                    </div>
                    <div className={styles.btnAddress}>
                        <div className={styles.btn}>
                             <button className={styles.cart}>Add to cart</button> 
                             <button className={styles.wish}></button>
                        </div>
                        <div className={styles.address}>
                               <div className={styles.pin}><CiLocationOn/> &nbsp; <p>  Delivery options for: <span style={{"color":"#f337c7"}}> 752031 </span></p></div>
                               <div className={styles.pin}>
                               <FcCheckmark/>&nbsp;<p> Shipping to Balugaon , India</p>
                               </div>
                               <div className={styles.pin}>
                               <FcCheckmark/>&nbsp;<p> Delivery by 25th Dec</p>
                               </div>
                               <div className={styles.pin}>
                               <FcCheckmark/>&nbsp;<p> Cash on Delivery available on orders above 499/-</p>
                               </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct