import React from 'react'

const SubTotal = ({ cart }) => {
  return (
    <div className='sub-total'>
        <h4>items SubTotal</h4>
        <h4>&#8358;{cart.reduce((total,item)=>{
            return total + item.price * item.count
        },0)}.00</h4>
    </div>
  )
}

export default SubTotal