import CustomHead from '../components/CustomHead';
//API
import { contactPage } from './api';
import { StructuredText } from 'react-datocms';
//STYLES
import styles from '../styles/contact.module.css';


const contact = ({ contactProps }) => {
    // console.log(contactProps);
    const { title, mainImage, content } = contactProps;
    return (
        <div className={styles.contact}>
            <CustomHead
                title="contact"
                keywords="about us, consid, web, development, frontend"
                description="Welcome to Consid, read all about us"
            />

            <h1>{title}</h1>
            <div style={{ display: 'flex' }}>
                <StructuredText
                    data={content}
                    renderBlock={renderBlock}
                    renderInlineRecord={renderInlineRecord}
                />
                <img src={mainImage.url} alt="main" />
            </div>
        </div>
    )
}
export default contact;


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


export async function getStaticProps() {
    const contactProps = await contactPage()
    return {
        props: {
            contactProps
        }
    }
}

