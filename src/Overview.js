import React from 'react'

import { useStateValue } from './StateProvider';

function Overview({id,title,price,rating,image,description}) {
    const [{display}, dispatch] = useStateValue();


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
            
                <div className="checkoutProduct__rating">
                    {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐️</p>
                    ))
                    }
              </div>
              <div className="checkoutProduct__description">
              <p>{description}</p>
              </div>
            </div>
          
        </div>
    )
}

export default Overview
