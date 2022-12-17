import React, { useEffect, useState } from 'react'
import { Box, FormControl, FormLabel, Select, useToast } from "@chakra-ui/react";
import styles from "../ProductPage/products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../actions/products';
// import {Navigate} from "react-router-dom"
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';
import DataNotFound from './DataNotFound';

const brands = [
    "Phillips India", "Agaro", "Nykaa Naturals", "Nova", "Braun", "Nykaa", "Flawless", "Alan Truman", "Bronson Professional", "Kayali", "Yves", "Versaca"
];

const Products = () => {
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState("asc");
   
    const [sort, setSort] = React.useState('');
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");

    const handleSort = (event) => {
        setSort(event.target.value);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleBrand = (e) => {
        setBrand(e.target.value);
    }

    const handleOrder=(e)=>{
        setOrder(e.target.value);
    }

    // console.log(sort, category, brand);
    const toast=useToast();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productsManager);

    // console.log(data);
    const getUrl = (page, order, sort, category, brand) => {

        let baseUrl = `https://nyka-json.onrender.com/products?_limit=12&_order=${order}&_page=${page}`;

        if (sort && category && brand) {
            baseUrl = `${baseUrl}&_sort=${sort}&category=${category}&brand=${brand}`;
        }
        else if (sort && category) {
            baseUrl = `${baseUrl}&_sort=${sort}&category=${category}`;
        }
        else if (sort && brand) {
            baseUrl = `${baseUrl}&_sort=${sort}&brand=${brand}`;
        }

        else if (category && brand) {
            baseUrl = `${baseUrl}&category=${category}&brand=${brand}`;
        }
        else if (sort) {
            baseUrl = `${baseUrl}&_sort=${sort}`;
        }
        else if (brand) {
            baseUrl = `${baseUrl}&brand=${brand}`;
        }
        else if (category) {
            baseUrl = `${baseUrl}&category=${category}`;
        }
        return baseUrl;

    }

    useEffect(() => {
        const url = getUrl(page, order, sort, category, brand);
        dispatch(getProducts(url));
    }, [page, order, sort, category, brand])


    if (data.loading) {
        return <Skeleton/>
    }

    else if(page>1 && data.products.length===0){
      return <DataNotFound/>
       
    }

    else if((category || sort || brand) &&  data.products.length===0){
        
        return  <DataNotFound/>
       
    }

    return (
        <div className={styles.productMain}>
            <div className={styles.filterBoxs}>
                <Box mb={5}>
                    <FormControl >

                        <Select variant='filled' onChange={handleSort} placeholder="Sort By :" fontSize={20} borderColor='gray.400' >
                            <option value='price'>Price</option>
                            <option value='rating'>Ratings</option>
                            <option value='offer'>Discount</option>
                            <option value="reviews">Reviews</option>
                            <option value="ratingNum">Rating Count</option>
                        </Select>

                    </FormControl>
                </Box>
                <Box  >
                    <Box>

                        <FormControl >
                            <FormLabel fontSize={20} color={'blackAlpha.700'}>Filter By :</FormLabel>
                            <Select variant='filled' onChange={handleCategory} placeholder="Category" fontSize={20} borderColor='gray.400' >
                                <option value='HairCare'>Hair Care</option>
                                <option value='Lipsticks'>Lipstick</option>
                                <option value='Shaving'>Shaving</option>
                                <option value="Facial">Facial</option>
                                <option value="Perfumes">Perfume </option>

                            </Select>

                        </FormControl>
                    </Box>
                    <Box>

                        <FormControl >

                            <Select variant='filled' onChange={handleBrand} placeholder="Brands" fontSize={20} borderColor='gray.400' >
                                {
                                    brands?.map((brand) => {
                                        return <option value={brand} key={brand}>{brand}</option>
                                    })
                                }

                            </Select>

                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <Select variant='filled' onChange={handleOrder} placeholder="Price" fontSize={20} borderColor='gray.400' >
                                
                                <option value="asc">0 - 999</option>
                                
                                <option value="desc">999 - 0</option>

                            </Select>
                        </FormControl>
                    </Box>
                </Box>

            </div>

            <div className={styles.productsContainer}>

                <h1 className={styles.prodHeading}>All Products</h1>
                <div className={styles.products}>
                    {
                        data.products?.map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })
                    }
                </div>
                <div className={styles.paginate}>
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}>-</button>
                    <button className={styles.stBtn}>{page}</button>
                    <button onClick={() => setPage(page + 1)} >+</button>
                </div>
            </div>

        </div>
    )
}

export default Products