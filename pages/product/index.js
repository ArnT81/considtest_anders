import CustomHead from '../../components/CustomHead';
import Card from '../../components/Card';
//API
import { allProducts } from '../api';
//REDUX
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
//STYLES
import styles from '../../styles/product.module.css';


//todo addToCart, removeFromcart and send as props to Card
const product = ({ productsProps, redux, addToCart }) => {

    console.log('IN COMPONENT', redux.products)
    

    function add(product) {
        // console.log('adding', product.name)
        addToCart(product)
    }

    function removeFromCart(product) {
        console.log('removing', product.name)
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
                        cart={redux.cart}
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
    redux: state.cart.state
})
const mapDispatchToProps = {
    addToCart
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