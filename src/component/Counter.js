import React from 'react'


const Counter = ({ product,handleIncrease,handleReduce}) => {
  return (
    <div className='counter'>
        <button onClick={()=>handleReduce(product.id)} >-</button>
        <label>{product.count}</label>
        <button onClick={()=>handleIncrease(product.id)}>+</button>
    </div>
  )
}

export default Counter