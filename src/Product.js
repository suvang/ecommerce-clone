import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom";

function Product({id, title, image, price, rating,description}) {

    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    const addToDisplay = () => {
        dispatch({
            type: "SHOW_ITEMS",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                description: description,
                rating: rating,
            },
            
        });

    };

    return (
        <div className="product">
                <div className="product__info">
               <Link to={`/productoverview/${id}`} style={{textDecoration: 'none', color: 'black'}}> 
               <p onClick={addToDisplay}>{title}</p>
               </Link>
                <p className="product__price">
                <small>$</small> 
                <strong>{price}</strong> 
                </p>
                <div className="product__rating">
                    {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐️</p>
                    ))
                    }
              </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
            
        </div>
    )
}

export default Product
