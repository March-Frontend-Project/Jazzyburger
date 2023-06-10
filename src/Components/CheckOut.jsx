import React from 'react'

const CheckOut = () => {
    return (
        <div className='sam'>
            <div className='thed'>
                <h2 className='dutch'>Review and place order </h2>
                <p className='rev'>Review / Add address and fulfill payments to complete your purchase</p>
            </div>
            <div className='thed'>
                <h2 className='flat'>Recipient information</h2>
                <button className='add'>Add Recipient</button>
            </div>
            <div className='thed'>
                <h2 className='flat'>Delivery Address</h2>
                <button className='add'>Add Delivery Address</button>
            </div>

            <button className='place'>Place Your Order</button>
        </div>
    )
}

export default CheckOut