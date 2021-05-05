//COMPONENTS
import CustomHead from '../../components/CustomHead';
//API
import { productByName, allProducts } from '../api';
import { StructuredText } from 'react-datocms';
//STYLES
import styles from '../../styles/productdetail.module.css';


const producDetail = ({ productProps }) => {
    const { name, price, description, mainImage, alternativeImages } = productProps;


    return (
        <div className={styles.productdetail}>
            <CustomHead
                title={`Consid ${name}`}
                keywords="about us, consid, web, development, frontend"
                description={"Welcome to our webshop"}
            />
            <h1>{name}</h1>
            <div className={styles.imagecontainer}>
                <img src={mainImage.url} alt="productimage 1" />
                {alternativeImages[0] && <img src={alternativeImages[0].url} alt="productimage 2" />}
                {alternativeImages[1] && <img src={alternativeImages[1].url} alt="productimage 3" />}
            </div>
            <main>
                <h2>price: {price}$</h2>
                <StructuredText
                    data={description}
                />
            </main>
        </div>
    )
}

export default producDetail;

export async function getStaticProps(context) {
    const productProps = await productByName(context.params.name);

    return {
        props: {
            productProps
        }
    }
}

export async function getStaticPaths() {
    const response = await allProducts();
    const paths = response.map(product => ({ params: { name: product.name.toString() } }));

    return {
        paths,
        fallback: false
    }
}