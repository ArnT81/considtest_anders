//COMPONENTS
import CustomHead from '../components/CustomHead';
//API
import { contactPage } from './api';
import { StructuredText } from 'react-datocms';
//STYLES
import styles from '../styles/contact.module.css';


const contact = ({ contactProps }) => {
    const { title, mainImage, content } = contactProps;


    return (
        <div className={styles.contact}>
            <CustomHead
                title="contact"
                keywords="about us, consid, web, development, frontend"
                description="Welcome to Consid, read all about us"
            />
            <h1>{title}</h1>
            <main>
                <StructuredText
                    data={content}
                />
                <img
                    className={styles.image}
                    src={mainImage.url}
                    alt="main" />
            </main>
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

