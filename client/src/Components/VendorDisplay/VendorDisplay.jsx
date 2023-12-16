import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import './VendorDisplay.css'
import { Link } from 'react-router-dom';
import { VendorContext } from '../../Contexts/VendorContext';

const VendorDisplay = () => {
  const { vendors } = useContext(VendorContext)
  const { vendorId } = useParams();
  const vendor = vendors.find((item) => {
    return item.id === Number(vendorId)
  });
  console.log("image:" + vendor.image)

  return (
    <div className='vendor-display-container'>
      <div className="vendor-display-left">
        <img src={`/images/${vendor.image}`} alt="" />
      </div>
      <div className="vendor-display-right">
        <h1>{vendor.name}</h1>
        <p className='vendor-description'>{vendor.description_long}</p>
        <div className="category">
          <span className='category-category'>Category: </span>
          <span>{vendor.category}</span>
        </div>
        <Link to={`/location/${vendor.id}`}><button>See Location</button></Link>
      </div>
    </div>
  )
}

export default VendorDisplay