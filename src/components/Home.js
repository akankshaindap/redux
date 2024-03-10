import React from 'react'
import Header from './Header'
function Home(props) {
    return (
        <div>
           
            <h1>Home Component</h1>
            <Header/> 
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="data:image/jpeg;base64,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" />
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
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home
