import React from 'react'
import trash from "../assets/vector-images/trash.png"


const CartOrder = ({ order,toCartButton }) => {
  return (
    <div className='order'>
        <div className='order-1 d-flex'>
        <h5>{order.count}</h5>
        <h5 >{order.title}</h5>
        </div>
        <div className='order-2 d-flex'>
            <div onClick={()=>toCartButton(order.id)}><img src={trash} alt="trash" /></div>
            <h5 className='text-end'>{order.price*order.count}.00</h5>
        </div>
    </div>
  )
}

export default CartOrder