import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import Overview from "./Overview";


function ProductOverview() {
    const [{display}] = useStateValue();
    console.log("item id", display)

    return (
        <div className="checkout">
            <div className="checkout__left">
              {display?.length === 0 ? (
                  <div>
                   <h2>FULL PRODUCT DETAILS PAGE</h2>
                   <p>
                     YOU HAVE NOT SELECTED ANY PRODUCT.
                    </p>   
                  </div>
              ) : (
                  <div>
                      <h2 className="checkout__title">FULL PRODUCT DETAILS PAGE</h2>

                      {
                          display?.map(item => (
                              <Overview
                              key={item.id}
                               id={item.id}
                               description={item.description}
                               title={item.title}
                               image={item.image}
                               price={item.price}
                               rating={item.rating}
                              />
                          ))}
                  </div>
              )}
              </div>
    
        </div>
    )
}

export default  ProductOverview;
