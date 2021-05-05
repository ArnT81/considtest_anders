import { useRouter } from 'next/router';
//COMPONENTS
import Button from '../components/Button';
import CartItem from '../components/CartItem';
//STYLES
import styles from '../styles/checkout.module.css';


const checkout = () => {
    const router = useRouter();

    //FUNCTIONS
    const goBack = () => {
        router.push("/product");
    }

    const goToCheckout = () => {
        router.push("/confirmation");
    }


    return (
        <div className={styles.checkout}>
            <h1>CHECKOUT PAGE</h1>
            <div>
                <CartItem />
            </div>
            <div className={styles.buttoncontainer}>
                <Button
                    function={goBack}
                    position="center"
                    text={'avbryt'}
                    width="200px"
                    color="white"
                    background="maroon"
                    borderColor="black"
                />
                <Button
                    function={goToCheckout}
                    position="center"
                    text={'köp'}
                    width="200px"
                    color="white"
                    background="#8ac926"
                    borderColor="black"
                />
            </div>
        </div>
    )
}

export default checkout;

