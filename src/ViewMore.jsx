import React from 'react'
import MoreCard from './component/MoreCard';
import "./component/ViewMore.css"

const ViewMore = ({ products,toCartButton}) => {
  return (
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
  )
}

export default ViewMore