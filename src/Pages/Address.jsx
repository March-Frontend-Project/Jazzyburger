import React from 'react'

const Address = () => {
  return (
    <div className='App'>
      <div className='addy'>
        <div className='ress'>
          <h2>Add Address</h2>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="city">Select city</label>
            <input type="text" className="form-control" id="city" />
          </div>
          <div className="mb-3">
            <label htmlFor="houseNumber">House number</label>
            <input type="text" className="form-control" id="houseNumber" />
          </div>

          <div className="mb-3">
            <label htmlFor="street">Street</label>
            <input type="text" className="form-control" id="street" />
          </div>

          <button type="submit" className="btn btn-danger form-control mb-5">Use this address</button>
        </form>
      </div>
    </div>
  )
}

export default Address;
