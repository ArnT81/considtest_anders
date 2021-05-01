import Button from './Button';
import Link from 'next/link';

import styles from '../styles/card.module.css';

function Card({ name, price, description, mainImage, alternativeImages, product }) {
    // console.log(description);
    const buttonText = 'lägg i kundvagn'
    //todo singleProductPage onClick with alternative images
    //todo description from slug?

    function buttonFunctionality() {
        console.log('Happens')
    }

    return (
        <div className={styles.card}>
            <Link href="/product/[name]" as={`/product/${[product.name]}`}>
                <div className={styles.imagecontainer}>
                    <img src={mainImage.url} alt="product" />
                </div>
            </Link>
            <h1>{name}</h1>
            <h1>price: {price}$</h1>
            {/* <p>{description.value}</p> */}

            <Button
                function={buttonFunctionality}
                text={buttonText}
                width="100%"
                color="black"
                borderColor="black"
            />
        </div>
    )
}

export default Card;
