import CustomHead from '../components/CustomHead';
import { startPage } from '../pages/api';
//STYLES
import styles from '../styles/home.module.css'

export default function Home({ homeProps }) {
  let { title, mainImage } = homeProps;
  let paragraphOne = homeProps.content.value.document.children[0].children[0].value;
  let paragraphTwo = homeProps.content.value.document.children[1].children[0].value;

  return (
    <div className={styles.home}>
      <CustomHead />
      <h1>{title}</h1>
      <img
        className={styles.background}
        src={mainImage.url}
        alt="main" />
      <main>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>
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