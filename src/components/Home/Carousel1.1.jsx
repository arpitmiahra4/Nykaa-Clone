import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Carousel.module.css";
const slideImages = [
  {
    url: "https://images-static.nykaa.com/uploads/db2d5607-d968-45f6-ba39-6b8eac6a54e4.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/1b502856-27fa-4013-b7ed-dedb07ab0f1a.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/ae238ad7-9d3a-48ec-b143-a9af8e1f1a0c.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/fe616105-d856-4ef7-9a91-22a68a988094.png?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/b5e477cd-478c-4f1d-b1a5-c2030c3d0615.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/7250c4ef-daf6-4f77-ab9d-ea897b773904.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/41cab243-d530-4f83-b083-6352b09f3a13.jpg?tr=w-1200,cm-pad_resize",
  },
];

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
const Carousel1 = () => {
  return (
    <div className={styles.slidecontainer}>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className={styles.eachslide} key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` ,borderRadius:"10px" , marginLeft:"10px",marginRight:"10px"}}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carousel1;
