import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import style from "../ProductPage/products.module.css";
import styles from "../SingleProduct/product.module.css";
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
    console.log(product, images);
    console.log(stars)
    useEffect(() => {
        getProduct(id)
    }, []);

    if (loading) {
        return <h1 className={style.prodHeading}>Loading.....</h1>
    }

    return (
        <div className={styles.singleProdCont}>
            <h1 className={style.prodHeading}>Single Product id {id}</h1>

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
                        <p className={styles.inc}>Inclusive all taxes</p>
                    </div>
                    <div className={styles.btnAddress}>
                        <div >

                        </div>
                        <div className={styles.address}>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct