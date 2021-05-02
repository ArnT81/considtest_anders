import CustomHead from '../../components/CustomHead';
import Card from '../../components/Card';
//API
import { allProducts } from '../api';
//REDUX
import { connect } from 'react-redux';
import { setCart } from '../../redux/actions/cart';
//STYLES
import styles from '../../styles/product.module.css';


//todo addToCart, removeFromcart and send as props to Card
const product = ({ productsProps, redux, setCart }) => {

    console.log(redux)

    function addToCart(product) {
        console.log('adding', product)
    }

    function removeFromCart(product) {
        console.log('removing', product)
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
                        addToCart={addToCart}
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
    redux: state
})
const mapDispatchToProps = {
    setCart
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