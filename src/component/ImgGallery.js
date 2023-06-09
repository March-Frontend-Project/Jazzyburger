import React from 'react'
import img1 from "../assets/fruit-group/group1.png"
import img2 from "../assets/fruit-group/group2.png"
import img3 from "../assets/fruit-group/group3.png"
import img4 from "../assets/fruit-group/group4.png"
import img5 from "../assets/fruit-group/group6.png"

const ImgGallery = () => {
  return (
    <div className='img-gallery'>
        <img src={img1} alt="group1" />
        <img src={img2} alt="group2" />
        <img src={img3} alt="group3" />
        <img src={img4} alt="group4" />
        <img src={img5} alt="group6" />
    </div>
  )
}

export default ImgGallery