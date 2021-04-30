import { aboutPage } from './api';
import CustomHead from '../components/CustomHead';
//STYLES
import styles from '../styles/about.module.css';

const about = ({ aboutProps }) => {
    console.log(aboutProps)
    const { title, mainImage, content, slug, seo } = aboutProps;

    return (
        <div className={styles.about}>
            <CustomHead
                title="about"
                keywords="about us, consid, web, development, frontend"
                description="Welcome to Consid, read all about us"
            />

            <h1>{title}</h1>
            <img src={mainImage.url} alt="main" />
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