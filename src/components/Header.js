import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div>
        <span className="add-to-cart ">
          
                <span className='cart-count'>  {props.data.length}</span>
                <h1>Home Component</h1>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                </span>
                
    </div>
  )
}


export default Header

