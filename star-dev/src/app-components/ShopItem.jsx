import React from 'react'

export default function ShopItem({card, id, onRemove}){

  return (

    <div key={id} className="shopping-cart">

      <div>

        {/*<img src={card.image} className="shopping-cart-img" alt="rental"/>*/}

      </div>

      <div className="rental-description">

        <div>

          <div>

            <p>{card.name}</p>

          </div>

        </div>

      </div>

      <div>

        {/*<p className="rental-city"> {card.description} </p>*/}

      </div>

      <div>

        <p className="rental-price">Price:  ${card.price} </p>

        <div>
          <button className="btn btn-danger" onClick={onRemove}>Remove</button>
        </div>

      </div>

    </div>

  )


}
