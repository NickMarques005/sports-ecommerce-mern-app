// MobileCart.js
import React from 'react';
import { IoTrash } from 'react-icons/io5';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive_cart_screen from '../component_functions/Cart_Carousel_Responsive';

function MobileCart(props) {

    /*****************/
    /*    RENDER 
    /*****************/

    return (
        <Carousel className="checkout_carousel" responsive={responsive_cart_screen}>
            {props.groupedData && props.group_data ?
                Object.values(props.groupedData).map((data, key) => (

                    <div className="cartItem_main" key={key}>

                        <div className="cartItem_img">
                            <img src={`/product_imgs/${data.img}`} alt={`${data.name}_image`} />
                        </div>
                        <div className="cartItem_info">
                            <span className="cartItem_name">{data.name}</span>
                            <span>Tamanho: {data.size}</span>
                            <span>Cor: {data.color}</span>
                        </div>
                        <div className="cartItem_quantity">
                            <button className="cartItem_buttonMinus" onClick={() => props.handleDecrement(data.id, data.size, data.color)}>-</button>
                            <div className="cartItem_quantityValue_div">
                                <span>{data.count}</span>
                            </div>
                            <button className="cartItem_buttonPlus" onClick={() => props.handleIncrement(data)}>+</button>
                        </div>
                        <div className="cartItem_price">
                            <span>R${data.final_price}</span>
                        </div>
                        <div className="cartItem_delete">
                            <IoTrash className="cartItem_deleteIcon" onClick={() => { props.handleDeleteItems(data.id, data.size, data.color) }} />
                        </div>

                    </div>)
                )
                : ""
            }
        </Carousel>
    );
}

export default MobileCart;