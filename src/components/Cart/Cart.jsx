
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../../actions/cart';
import styles from "../Cart/Cart.module.css";

const Cart = ({placement,onClose,isOpen}) => {
    const dispatch=useDispatch();
    const CartData=useSelector((state)=>state.cartsManager.carts);
    console.log("drawer",CartData);

    useEffect(()=>{
       dispatch(getCartData());
    },[dispatch]);
   
    

  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >

        <DrawerOverlay />
        <DrawerContent>
        <br />
        <br />
        
          <DrawerHeader borderBottomWidth='1px'>Bag ( {CartData.length} Items )</DrawerHeader>
          <div className={styles.cartContainer}>
           {
            CartData.length?CartData.map((item)=>{
                return <div key={item.id} className={styles.item}>
                    <img src={item.image1} alt={item.title} />
                    <div>
                    <h2>{item.title}</h2>
                    <h3>Price:- {item.price}</h3>
                    <h2>Quantity:- {item.quan}</h2>
                    
                    <button style={{"padding":"5px 8px","backgroundColor":"#FA34DC","borderRadius":"5px","color":"white"}} >Remove</button>
                    
                    </div>

                </div>
            }):<h1 style={{"fontSize":"larger"}}>Your Bag is Empty ! </h1>
           }
          </div>
        </DrawerContent>
      </Drawer>
  )
}

export default Cart