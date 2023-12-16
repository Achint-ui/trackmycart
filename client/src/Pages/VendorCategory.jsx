import React, { useContext } from 'react'
import { VendorContext } from '../Contexts/VendorContext'

import Item from '../Components/Item/Item'
import './Css/VendorCategory.css'

const VendorCategory = (props) => {
  const { vendors } = useContext(VendorContext)

  return (
    <div className='vendor-category-container'>
      {vendors.map((item, i) => {
        if (item.category === props.category) {
          return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} description={item.description} />
        } else return null
      })}
    </div>
  )
}

export default VendorCategory