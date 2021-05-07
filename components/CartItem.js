//REDUX
import { connect } from 'react-redux';
//STYLES
import styles from '../styles/cartitem.module.css';

const CartItem = ({ redux }) => {

    return (
        <>
            {redux.map((item, index) => {
                return (
                    <div key={index} className={styles.cartitem}>
                        <img src={item.mainImage.url} style={{ height: "60px" }} />
                        <h2>{item.name}</h2>
                        <h2>{item.price}$</h2>
                    </div>
                )
            })
            }
        </>
    )
}

//REDUX
const mapStateToProps = state => ({
    redux: state.cart
})

export default connect(mapStateToProps)(CartItem);
