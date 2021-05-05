import { useRouter } from 'next/router';
//COMPONENTS
import Button from '../components/Button';
//REDUX
import { connect } from 'react-redux';
//STYLES
import styles from '../styles/checkout.module.css';


const checkout = ({ redux }) => {
    const router = useRouter();

    const cancel = () => {
        router.push("/product");
    }

    const goToCheckout = () => {
        router.push("/confirmation");
    }

    const DisplayCart = () => {
        return (
            <>
                {redux.map((item, index) => {
                    return (
                        <div key={index} style={{ display: 'flex' }}>
                            <img src={item.mainImage.url} style={{ height: "100px" }} />
                            <h2>{item.name}</h2>
                            <h2>{item.price}$</h2>
                        </div>
                    )
                })
                }
            </>
        )
    }


    return (
        <div className={styles.checkout}>
            <h1>CHECKOUT PAGE</h1>
            <DisplayCart />
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

//REDUX
const mapStateToProps = state => ({
    redux: state.cart
})

export default connect(mapStateToProps)(checkout);

