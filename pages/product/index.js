import CustomHead from '../../components/CustomHead';
import Card from '../../components/Card';
//API
import { allProducts } from '../api';
//STYLES
import styles from '../../styles/product.module.css';


const product = ({ productsProps }) => {
  

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
export default product;


export async function getStaticProps() {
    const productsProps = await allProducts();
    return {
        props: {
            productsProps
        }
    }
}