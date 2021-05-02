import CustomHead from '../components/CustomHead';
//API
import { startPage } from '../pages/api';
import { StructuredText } from 'react-datocms';
//STYLES
import styles from '../styles/home.module.css'


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
        />
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const homeProps = await startPage()
  return {
    props: {
      homeProps
    }
  }
}