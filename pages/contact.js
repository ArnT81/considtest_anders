import { contactPage } from './api';
import CustomHead from '../components/CustomHead';
//STYLES
import styles from '../styles/contact.module.css';


const contact = ({ contactProps}) => {
    // console.log(contactProps);
    const { title, mainImage, content, slug, seo } = contactProps;
    return (
        <div className={styles.contact}>
            <CustomHead 
                title="contact"
                keywords="about us, consid, web, development, frontend"
                description="Welcome to Consid, read all about us"
            />

            <h1>{title}</h1>
            <img src={mainImage.url} alt="main" />
        </div>
    )
}
export default contact;


export async function getStaticProps() {
    const contactProps = await contactPage()
    return {
        props: {
            contactProps
        }
    }
}

