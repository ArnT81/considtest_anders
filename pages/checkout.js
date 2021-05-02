import { useRouter } from 'next/router';
//COMPONENTS
import Button from '../components/Button';
//STYLES
import styles from '../styles/checkout.module.css';


const checkout = () => {
    const router = useRouter();

    const cancel = () => {
        router.push("/product");
    }

    const goToCheckout = () => {
        router.push("/confirmation");
    }

    return (
        <div className={styles.checkout}>
            <h1>CHECKOUT PAGE</h1>

            <h2>Låtsasvaror</h2>
            <div className={styles.buttoncontainer}>
                <Button
                    function={cancel}
                    position="center"
                    text={'avbryt'}
                    width="200px"
                    color="white"
                    background="red"
                    borderColor="black"
                />
                <Button
                    function={goToCheckout}
                    position="center"
                    text={'köp'}
                    width="200px"
                    color="white"
                    background="green"
                    borderColor="black"
                />
            </div>
        </div>
    )
}

export default checkout;
