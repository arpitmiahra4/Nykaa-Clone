
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, removeCart } from '../../actions/cart';
import styles from "../Cart/Cart.module.css";

const Cart = ({placement,onClose,isOpen}) => {
    const dispatch=useDispatch();
    
    
    const handleRemove=(id)=>{
      dispatch(removeCart(id));
      dispatch(getCartData());
    }

 const handleAlert=()=>{
  alert("Payment Done ...");
  alert("Product on the way ..");
   
 }
     
    
   
    useEffect(()=>{
       dispatch(getCartData());
    },[dispatch]);


    const CartData=useSelector((state)=>state.cartsManager.carts);
    const load=useSelector((state)=>state.cartsManager.loading);
     
    const total=CartData.reduce((acc,curr)=>acc+curr.price,0);
    


    if(load){
      return <h1 style={{"color":"red","fontSize":"25px"}}>LOADING...</h1>
    }

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
                    
                    <button style={{"padding":"5px 8px","backgroundColor":"#FA34DC","borderRadius":"5px","color":"white"}} onClick={()=>handleRemove(item.id)}>Remove</button>
                    
                    </div>

                </div>
            }):<h1 style={{"fontSize":"23px","color":"#FA34DC"}}>Your 👜 is Empty 😒 ! </h1>
           }
          </div>
          <div style={
            {
              "display":"flex"
              ,"alignItems":"center"
              ,"justifyContent":"space-between"
            }
          }>
            <h1 style={{"fontSize":"23px","color":"#FA34DC"}}>Total Price :- {total}</h1> 
            {
              total?<button style={{"padding":"5px 8px","backgroundColor":"#FA34DC","borderRadius":"5px","color":"white"}} onClick={handleAlert}>Proceed</button>:null
            }
          </div>
        </DrawerContent>
      </Drawer>
  )
}

export default Cart