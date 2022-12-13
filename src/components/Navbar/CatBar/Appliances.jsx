import React from 'react'
import styled from 'styled-components'

const Popup = styled.div`
width:75%;
display:flex;
justify-content:center;
margin:auto;
text-align:left;
padding:2vh 0 3vh 0;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
border:1px solid #e6dede;
background-color:#fafafa;
.all_items_in_appli{
    display:flex;
    justify-content:center;
    margin:auto;
    gap:4vw; 
}
.all_items_in_appli>div:nth-child(even){
    background-color: #f4f4f4;
    padding:0px 14px 0px 14px ;
}
 
.all_items_in_appli>div>p{
    line-height:1.2;
    font-size:15px;
}
.all_items_in_appli>div>p:hover{
    color:#fc3581;
    cursor:pointer;
}
`

const Appliances = () => {
  return (
    <Popup>
    <div className='all_items_in_appli'>
        
    </div>
    </Popup>
  )
}

export default Appliances;