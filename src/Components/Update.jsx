import React, { useState } from 'react'

const Update = () => {
  const iniatialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  }
  const [updateData, setUpdateData] = useState(iniatialState);
  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target);
    const { name, value } = e.target
    setUpdateData({ [name]: value })
  }
  const { firstName, lastName, email, phoneNumber } = updateData
  return (
    <div className='cont'>
      <div className="ink">
        <h1 className="osho">Update <br /> Recipient</h1>
        <div className="mb-3">
          <label className='sand d-block' htmlFor="">First Name</label>
          <input
            className="form-control "
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className='sand d-block' htmlFor="">Last Name</label>
          <input
            className="form-control"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className='sand d-block' htmlFor="">Email</label>
          <input
            className="form-control "
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className='sand d-block' htmlFor="">Phone Number</label>
          <div className='d-flex num-inp'>
            <input type="text" placeholder="+234" className="inpp" disabled />
            <input
            className="form-control number"
            type="text"
            id="PhoneNumber"
            name="phoneNumber"
            placeholder="818 000 0000"
            value={phoneNumber}
            onChange={handleChange}
          />
          </div>
        </div>
        <button className='btn sub text-white'>Submit</button>
      </div>
    </div>
  )
}

export default Update