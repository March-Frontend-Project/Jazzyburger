import React from 'react'
import MoreCard from './component/MoreCard';
import Header from './component/Header';
import Footer2 from './component/Footer2';
import "./component/ViewMore.css"

const ViewMore = ({ products,toCartButton,cart}) => {
  return (
    <div>
      <Header cart={cart} toCartButton={toCartButton} />
    <div className="container-lg">
    <div className="view-more">
    <div className="card-con">
      {products.slice(6).map((product) => (
        <MoreCard
          product={product}
          key={product.id}
          toCartButton={toCartButton}
        />
      ))}
    </div>
    </div>
    </div>
    <Footer2/>
    </div>
  )
}

export default ViewMore