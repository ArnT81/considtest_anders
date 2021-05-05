import { useRouter } from 'next/router';
//COMPONENTS
import Button from './Button';
//STYLES
import styles from '../styles/cart.module.css';

//REDUX
import { connect } from 'react-redux';

function Cart({ toggleCartComponent, redux }) {

    console.log(redux.length)
    const router = useRouter();

    //FUNCTIONS
    const goToCheckout = () => {
        router.push("checkout");
        toggleCartComponent();
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
        <div className={styles.cart}>
            <div className={styles.head}>
                <div onClick={toggleCartComponent}
                    className={styles.closecart}
                >
                    X
            </div>
                <h2>Cart</h2>
            </div>
            <DisplayCart/>
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

//REDUX
const mapStateToProps = state => ({
    redux: state.cart
})


export default connect(mapStateToProps)(Cart);
// export default Cart;
