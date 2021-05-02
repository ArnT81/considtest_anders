import React, { useState, useEffect } from 'react';

import Button from './Button';
import Link from 'next/link';
//STYLES
import styles from '../styles/card.module.css';


//todo change text and functionality och button depending on cart
function Card({ name, price, mainImage, product, cart, addToCart, removeFromCart }) {
    console.log('In Card', cart)

    //!TEMP MOCKED CART
    let arne = [
        { name: 'Jacket' },
        { name: 'Notebook' }
    ]

    console.log(arne);

    // VARIABLES & STATES
    const [inCartAlready, setInCartAlready] = useState(false);
    const [buttonText, setButtonText] = useState('lägg i kundvagn');

    useEffect(() => {
        determenIfAlreadyInCart();
        return () => {
            determenIfAlreadyInCart();
        }
    }, [])

    // FUNCTIONS
    function determenIfAlreadyInCart() {
        setButtonText('lägg i kundvagn');
        setInCartAlready(false);

        arne.forEach((item) => {
            if (item.name === product.name) {
                setButtonText('vald');
                setInCartAlready(true);
            }
        });
    }

    function buttonFunctionality(thisProduct) {
        inCartAlready ? removeFromCart(thisProduct) : addToCart(thisProduct);
    }


    return (
        <div className={styles.card}>
            <div>
                <Link href="/product/[name]" as={`/product/${[product.name]}`}>
                    <img src={mainImage.url} alt="product" />
                </Link>
                <div className={styles.information}>
                    <h2>{name}</h2>
                    <h2>price: {price}$</h2>
                </div>
            </div>

            <Button
                function={() => buttonFunctionality(product)}
                text={buttonText}
                width="100%"
                color="black"
                borderColor="black"
            />
        </div>
    )
}

export default Card;
