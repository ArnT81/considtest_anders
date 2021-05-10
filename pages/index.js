//COMPONENTS
import CustomHead from '../components/CustomHead';
//API
import { startPage } from '../pages/api';
import { StructuredText } from 'react-datocms';
//STYLES



export default function Home({ homeProps }) {
  let { title, mainImage, content } = homeProps;


  return (
    <div className="home">
      <CustomHead />
      <h1>{title}</h1>
      <img
        className="background"
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