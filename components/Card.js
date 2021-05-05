import React, { useState, useEffect } from 'react';
import Button from './Button';
import Link from 'next/link';
//STYLES
import styles from '../styles/card.module.css';


function Card({ name, price, mainImage, product, cart, addToCart, removeFromCart }) {
      // VARIABLES & STATES
    const [inCartAlready, setInCartAlready] = useState(false);
    const [buttonText, setButtonText] = useState('');

    //LIFECYCLE HOOKS
    useEffect(() => {
        determenIfAlreadyInCart();
        return () => {
            determenIfAlreadyInCart();
        }
    }, [cart])

    // FUNCTIONS
    function determenIfAlreadyInCart() {
        setButtonText('lägg i kundvagn');
        setInCartAlready(false);

        cart.forEach((item) => {
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
                <Link
                    href="/product/[name]"
                    as={`/product/${[product.name]}`}
                >
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
