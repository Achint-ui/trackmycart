import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import './LocationDisplay.css'
import { VendorContext } from '../../Contexts/VendorContext';

const LocationDisplay = () => {
  const { vendors } = useContext(VendorContext)
  const { vendorId } = useParams();
  const vendor = vendors.find((item) => item.id === Number(vendorId));
  const lat = vendor.lat;
  const lon = vendor.lon;
  const zoom = 18;

  return (
    <div className='location-display'>
      <p>You can find your SABJIWAALA here</p>
      <div className="location-map">
        <iframe src={`https://www.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
          width="600"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  )
}

export default LocationDisplay