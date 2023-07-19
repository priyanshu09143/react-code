import React from 'react'
import pizzaData from './data'
import './pizza.css'

function Pizza() {
 
    return (
        <>
        <div className="had">
            <h1>Order Pizza Now</h1>

        </div>
            <div className="box">
                {pizzaData.map((e, index) => {
                    return (<div key={index} className='boxes' id={(e.soldOut === false)?(""):"fade"}>
                        <div className="image">
                            <img src={e.photoName} alt="piz" />
                        </div>
                        <div className="info">
                            <h4>{e.name}</h4>
                            <p>{e.ingredients}</p>
                            <p> {(e.soldOut === false)?("Price $."+e.price):"SoldOut"}</p>
                        </div></div>
                    )
                })}
            </div>

            <div className="credit">
                <p>All &copy;Copyright Reserved</p>
            </div>
        </>
    )
}

export default Pizza