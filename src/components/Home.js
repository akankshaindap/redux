import React from 'react'

function Home(props) {
  
    return (
        <div>
          
            <div className="cart-wrapper">
           
                <div className="img-wrapper item">
                    <img src='https://cdn.mos.cms.futurecdn.net/AGAchT9544GSte9XA3cxFe-1200-80.jpg'/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeCartHandler()}
                        }>
                        Remove</button>
                     
                </div>
            </div>
        </div>
    )
}
export default Home
