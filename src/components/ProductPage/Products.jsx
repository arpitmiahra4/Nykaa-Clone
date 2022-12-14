import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import  styles from "../ProductPage/products.module.css";
import  {useDispatch,useSelector} from "react-redux"
import { getProducts } from '../../actions/products';
import ProductCard from './ProductCard';
const Products = () => {
    const [page,setPage]=useState(1);
    useEffect(()=>{
       dispatch(getProducts(page));
    },[])
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.productsManager);
    console.log(data);

    if(data.loading){
        return <h1 className={styles.prodHeading}>Loading.....</h1>
    }

  return (
    <div className={styles.productsContainer}>
        
        <h1 className={styles.prodHeading}>All Products</h1>
        <div className={styles.products}>
            {
                data.products?.map((product)=>{
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
    </div>
  )
}

export default Products