//COMPONENTS
import CustomHead from '../components/CustomHead';
//API
import { aboutPage } from './api';
import { StructuredText } from 'react-datocms';
//STYLES
import styles from '../styles/about.module.css';


const about = ({ aboutProps }) => {
    const { title, mainImage, content } = aboutProps;


    return (
        <div className={styles.about}>
            <CustomHead
                title="about"
                keywords="about us, consid, web, development, frontend"
                description="Welcome to Consid, read all about us"
            />
            <h1>{title}</h1>
            <main>
                <img 
                className={styles.image}
                src={mainImage.url} 
                alt="main" />
                <StructuredText
                    data={content}
                />
            </main>
        </div>
    )
}

export default about;

export async function getStaticProps() {
    const aboutProps = await aboutPage()
    return {
        props: {
            aboutProps
        }
    }
}