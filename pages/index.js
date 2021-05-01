import CustomHead from '../components/CustomHead';
//API
import { startPage } from '../pages/api';
import { StructuredText } from 'react-datocms';
//STYLES
import styles from '../styles/home.module.css'

//todo byta ut så texten tar emot css
export default function Home({ homeProps }) {
  let { title, mainImage, content } = homeProps;


  return (
    <div className={styles.home}>
      <CustomHead />
      <h1>{title}</h1>
      <img
        className={styles.background}
        src={mainImage.url}
        alt="main" />
      <main>

        <StructuredText
          data={content}
          renderBlock={renderBlock}
          renderInlineRecord={renderInlineRecord}
        />
      </main>
    </div>
  )
}


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
  const homeProps = await startPage()
  return {
    props: {
      homeProps
    }
  }
}