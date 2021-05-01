import CustomHead from '../../components/CustomHead';
import { product, allProducts } from '../api';


const producDetail = () => {
    return (
        <div>
            <CustomHead
                title="product"
                keywords="about us, consid, web, development, frontend"
                description="Welcome to Consid, read all about us"
            />



        </div>
    )
}
export default producDetail;


export async function getStaticProps(context) {
    const productProps = await product(context.params.name);
    console.log('GETSTATICPROPS LOADS');

    console.log(context.params);
    return {
        props: {
            productProps
        }
    }
}

export async function getStaticPaths() {
    const response = await allProducts();
    const paths = response.map(product => ({ params: { name: product.name.toString() } }))

    return {
        paths,
        fallback: false
    }
}
