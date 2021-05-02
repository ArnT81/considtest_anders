import Button from './Button';
import Link from 'next/link';
//STYLES
import styles from '../styles/card.module.css';


//todo change text and functionality och button depending on cart
function Card({ name, price, mainImage, product, cart }) {
    console.log('In Card', cart)

    const buttonText = 'lägg i kundvagn'



    function buttonFunctionality() {
        console.log('Happens')
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
