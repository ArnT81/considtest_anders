import styles from '../styles/card.module.css';

function Card({ name, price, description, mainImage, alternativeImages }) {
    console.log(description);

    //todo singleProductPage onClick with alternative images
    //todo description from slug?

    return (
        <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <img src={mainImage.url} alt="product" />
            </div>
            <h1>{name}</h1>
            <h1>price: {price}$</h1>
            {/* <p>{description.value}</p> */}
        </div>
    )
}

export default Card;
