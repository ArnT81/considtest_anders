import CustomHead from '../components/CustomHead';
//API
import { aboutPage } from './api';
import { StructuredText } from 'react-datocms';
//STYLES
import styles from '../styles/about.module.css';

const about = ({ aboutProps }) => {
    // console.log(aboutProps)
    const { title, mainImage, content } = aboutProps;

    return (
        <div className={styles.about}>
            <CustomHead
                title="about"
                keywords="about us, consid, web, development, frontend"
                description="Welcome to Consid, read all about us"
            />

            <h1>{title}</h1>
            <div style={{ display: 'flex' }}>
                <img src={mainImage.url} alt="main" />
                <StructuredText
                    data={content}
                    renderBlock={renderBlock}
                    renderInlineRecord={renderInlineRecord}
                />
            </div>
        </div>
    )
}
export default about;


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
    const aboutProps = await aboutPage()
    return {
        props: {
            aboutProps
        }
    }
}