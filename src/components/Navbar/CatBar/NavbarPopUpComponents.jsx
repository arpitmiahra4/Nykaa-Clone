import React from 'react'
import {Fade} from '@mui/material'
import Brands from './Brands'
import Luxe from './Luxe'
import NykaaFashion from './NykaaFashion'
import Beauty from './Beauty'
import Makeup from './Makeup'
import Hair from './Hair'
import Appliances from './Appliances'
import BodyBath from './BodyBath'
import Natural from './Natural'
import MomBaby from './MomBaby'
import Mens from './Mens'
import Fragrence from './Fragrence'
import Skin from './Skin'


const NavbarPopUpComponents = ({type}) => {
  return (
    <Fade in={type} timeout={1000} >
    <div>
        {type==='BRANDS' && <Brands/>}
        {type==='LUXE' && <Luxe/>}
        {type==='NYKAA' && <NykaaFashion/>}
        {type==='BEAUTY' && <Beauty/>}
        {type==="MAKEUP" && <Makeup/>}
        {type==="SKIN" && <Skin/>}
        {type==="HAIR" && <Hair/>}
        {type==="APPLIANCES" && <Appliances/>}
        {type==="BATH&BODY" && <BodyBath/>}
        {type==="NATURAL" && <Natural/>}
        {type==="MOM&BABY" && <MomBaby/>}
        {type==="HEALTH" && <BodyBath/>}
        {type==="MEN" && <Mens/>}
        {type==="FRAGRENCE" && <Fragrence/>}
        {type==="POPUPS" && <Hair/>}  
    </div>
</Fade>   
     
  )
}

export default NavbarPopUpComponents;
