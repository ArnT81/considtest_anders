import { useRouter } from 'next/router';
//COMPONENTS
import CartItem from './CartItem';
import Button from './Button';
//STYLES
import styles from '../styles/cart.module.css';


function Cart({ toggleCartComponent, redux }) {
    const router = useRouter();

    //FUNCTIONS
    const goToCheckout = () => {
        router.push("checkout");
        toggleCartComponent();
    }


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
            <CartItem/>
            <Button
                function={goToCheckout}
                position="right"
                text={'ta mig vidare'}
                width="200px"
                color="white"
                background="green"
                borderColor="black"
            />
        </div>
    )
}

export default Cart;

