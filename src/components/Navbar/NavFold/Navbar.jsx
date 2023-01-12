import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { FaRegUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import NavbarPopUpComponents from "../CatBar/NavbarPopUpComponents";
import { ShoppingBag } from "@mui/icons-material";
import { Route, Routes } from 'react-router-dom'
import MAIN from '../../../components/Profile/Main'
import Signin from "../../../logs/Signin";
import { Badge, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../../actions/cart";
import Cart from "../../Cart/Cart";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const cartTotal=useSelector((state)=>state.cartsManager.carts.length);
  // console.log("cart...",cartTotal)
  const [howerState, setHowerState] = useState("");
  const [login, setLogin] = useState(false);
  
  const hoverHandler = (type) => {
    setHowerState(type);
  };
  const handleLogin = () => {
    if (login) {
      setLogin(false);
      localStorage.removeItem("user");
      localStorage.removeItem("oAuth");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };
 
 

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("oAuth"));

    if (data) setLogin(true);
  }, []);

  useEffect(()=>{
    dispatch(getCartData());
  },[dispatch])
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
              className={style.card4}
              alt="nykka"
            />
            <p onClick={() => navigate("/products")}>Categories</p>
            <p onMouseOver={() => hoverHandler("BRANDS")}>Brands</p>
            <p onMouseEnter={() => hoverHandler("LUXE")}>Luxe</p>
            <p onMouseEnter={() => hoverHandler("NYKAA")}>Nykaa Fashion</p>
            <p onMouseEnter={() => hoverHandler("BEAUTY")}>Beauty Advice</p>
          </div>
          <div>
            <div className={style.inputContainer}>
              <input
                style={{ position: "relative" }}
                type="text"
                className={style.input}
                placeholder="Search on Nykaa"
              />
            </div>
            <div className={style.card2}>
              <p>
                <FaRegUser fontSize="2.5vh" cursor="pointer" />
              </p>
              <p onClick={() => handleLogin()}>{!login ? "Login" : "Logout"}</p>
            </div>
            <div className={style.card3}></div>
        
           <NavLink onClick={onOpen}>
            
            <Badge colorScheme='red' borderRadius={"full"} p="2px"><ShoppingBag /><span style={{"fontSize":"20px"}}>{cartTotal}</span></Badge>
            <Cart placement={placement} onClose={onClose} isOpen={isOpen}/>
            </NavLink>
          </div>
        
        </div>

        <div className={style.content} onMouseLeave={() => setHowerState("")}>
          {howerState && <NavbarPopUpComponents type={howerState} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
