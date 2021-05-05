import CustomHead from '../../components/CustomHead';
import Card from '../../components/Card';
//API
import { allProducts } from '../api';
//REDUX
import { connect } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../../redux/actions/cart_actions';
//STYLES
import styles from '../../styles/product.module.css';


//todo addToCart, removeFromcart and send as props to Card
const product = ({ productsProps, redux, addToCartAction, removeFromCartAction }) => {


    //!temp
    console.log(redux)

    //FUNCTIONS
    function add(product) {
        addToCartAction(product)
    }

    function removeFromCart(product) {
        removeFromCartAction(product)
    }

    //MAPPING PRODUCTS
    const RenderProducts = () => {
        return (
            productsProps.map((product, index) => {
                return (
                    <Card
                        key={index}
                        product={product}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        mainImage={product.mainImage}
                        alternativeImages={product.alternativeImages}
                        cart={redux}
                        addToCart={add}
                        removeFromCart={removeFromCart}
                    />
                )
            })
        )
    }


    return (
        <div className={styles.product}>
            <CustomHead
                title="product"
                keywords="shop, consid, merchandise"
                description="Welcome to our merchandise area"
            />
            <h1 className={styles.header}>Products</h1>
            <div className={styles.productcontainer}>
                <RenderProducts />
            </div>
        </div>
    )
}


//REDUX
const mapStateToProps = state => ({
    redux: state.cart
})
const mapDispatchToProps = {
    addToCartAction, removeFromCartAction
}


export default connect(mapStateToProps, mapDispatchToProps)(product);


export async function getStaticProps() {
    const productsProps = await allProducts();
    return {
        props: {
            productsProps
        }
    }
}