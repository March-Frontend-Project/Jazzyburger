import React from 'react'

const CheckOut = () => {
    return (
        <div className='App'>
            <div className='sam'>
            <div className='thed'>
                <h2>Review and place order </h2>
                <p className='rev'>Review / Add address and fulfill payments to complete your purchase</p>
            </div>
            <div className='thed'>
                <h2>Recipient information</h2>
                <button className='add'>Add Recipient</button>
            </div>
            <div className='thed'>
                <h2>Delivery Address</h2>
                <button className='add'>Add Delivery Address</button>
            </div>

            <button className='place'>Place Your Order</button>
        </div>

        </div>
        
        
    )
}

export default CheckOut