import CustomHead from '../components/CustomHead';
import Card from '../components/Card';

import { allProducts } from '../pages/api';
//STYLES
import styles from '../styles/shop.module.css';

const shop = ({ productsProps }) => {
    // console.log(productsProps);

    //MAPPING PRODUCTS
    const RenderProducts = () => {
        return (
            productsProps.map((product, index) => {
                return (
                    <Card
                        key={index}
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
        <div className={styles.shop}>
            <CustomHead
                title="contact"
                keywords="about us, consid, web, development, frontend"
                description="Welcome to Consid, read all about us"
            />
            <h1 className={styles.header}>Products</h1>
            <div className={styles.productcontainer}>
                <RenderProducts />
            </div>

        </div>
    )
}
export default shop


export async function getStaticProps() {
    console.log(allProducts);
    const productsProps = await allProducts()
    return {
        props: {
            productsProps
        }
    }
}