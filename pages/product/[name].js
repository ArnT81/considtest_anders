import CustomHead from '../../components/CustomHead';
//API
import { productByName, allProducts } from '../api';
import { StructuredText } from 'react-datocms';
//STYLES
import styles from '../../styles/productdetail.module.css';

//todo byta ut så texten tar emot css
//todo description ser givetvis olika ut för varje produkt (måste hitta ett dynamiskt sätt)

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
            <h1>price: {price}$</h1>
            <StructuredText
                data={description}
                renderBlock={renderBlock}
                renderInlineRecord={renderInlineRecord}
            />

            <img src={mainImage.url} alt="productimage 1" />
            { alternativeImages[0] && <img src={alternativeImages[0].url} alt="productimage 2" />}
            { alternativeImages[1] && <img src={alternativeImages[1].url} alt="productimage 3" />}
        </div>
    )
}
export default producDetail;


const renderBlock = ({ record }) => {
    switch (record.__typename) {
        case 'MyarticleblockRecord':
            return (
                <div>
                    <h1>{record.articleBlockTitle}</h1>
                    <p><img src={record.image.url} /></p>
                </div>
            )
        default:
            return ''
    }
}


const renderInlineRecord = ({ record }) => {
    switch (record.__typename) {
        case 'ArticleRecord':
            return <strong>{record.title}</strong>
        default:
            return ''
    }
}


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
