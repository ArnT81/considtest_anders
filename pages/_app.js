import Navbar from '../components/Navbar';
//STYLES
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  // Shows the CartIcon only in the product page 
  let showCart;
  pageProps.productsProps ? showCart = true : showCart = false


  return (
    <>
      <Navbar showCart={showCart} />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp;
