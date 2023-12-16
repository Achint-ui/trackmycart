import React, { useState, useEffect, useContext } from 'react'
import { VendorContext } from '../Contexts/VendorContext'
import Item from '../Components/Item/Item'
import './Css/Home.css'
import Hero from '../Components/Hero/Hero'


const Home = () => {
  const [search, setSearch] = useState('');

  const { vendors } = useContext(VendorContext)

  return (
    <div className='home-container'>
      <Hero />
      <div className="home-search-div">
        <input className='home-search' placeholder='Search a Vendor' onChange={(e) => setSearch(e.target.value)}></input>
      </div>


      {vendors.filter((item) => {
        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
      }).map((item, i) => {
        return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} description={item.description} />
      })}

    </div>
  )
}

export default Home