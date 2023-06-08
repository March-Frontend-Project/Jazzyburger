import React from 'react'
import img1 from "../assets/fruit-group/group1.png"
import img2 from "../assets/fruit-group/group2.png"
import img3 from "../assets/fruit-group/group3.png"
import img4 from "../assets/fruit-group/group4.png"
import img5 from "../assets/fruit-group/group6.png"

const ImgGallery = ({a,b,c,d,e}) => {
  return (
    <div className='img-gallery'>
        <img src={a} alt="group1" />
        <img src={b} alt="group2" />
        <img src={c} alt="group3" />
        <img src={d} alt="group4" />
        <img src={e} alt="group6" />
    </div>
  )
  
}
ImgGallery.defaultProps= {
  a:img1,
  b:img2,
  c:img3,
  d:img4,
  e:img5
}

export default ImgGallery