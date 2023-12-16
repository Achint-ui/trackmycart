import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {

  return (
    <div className='item-container'>
      <div className="item-top">
        <Link to={`/vendor/${props.id}`}><img src={`/images/${props.image}`} alt="" /></Link>
        <h3>{props.name}</h3>
        <p>{props.description}</p>

      </div>
      <div className="item-bottom">
        <Link to={`/location/${props.id}`}><button>See Location</button></Link>
      </div>

    </div>
  )
}

export default Item