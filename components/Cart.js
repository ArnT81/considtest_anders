//STYLES
import styles from '../styles/cart.module.css';


function Cart({ toggleCartComponent }) {
    // console.log('In Cart', props);

    return (
        <div className={styles.cart}>
            <div className={styles.head}>
                <div onClick={toggleCartComponent}
                    className={styles.closecart}
                >
                    X
            </div>
                <h2>Cart</h2>
            </div>

        </div>
    )
}

export default Cart;
