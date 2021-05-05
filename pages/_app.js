import React, { useState } from 'react';
//COMPONENTS
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
//REDUX
import { wrapper } from '../redux/store';
//STYLES
import '../styles/globals.css';


const MyApp = ({ Component, pageProps }) => {
  let showCartIcon;
  const [toggle, setToggle] = useState(false)

  //FUNKTIONER
  //note: anonym självkörande funktion inte tillåten här
  function showIcon() {
    pageProps.productsProps ? showCartIcon = true : showCartIcon = false;
  }
  showIcon();

  const toggleCartComponent = () => {
    setToggle(!toggle)
  }


  return (
    <>
      <Navbar
        showCartIcon={showCartIcon}
        toggleCartComponent={toggleCartComponent}
      />
      {pageProps.productsProps && toggle && <Cart toggleCartComponent={toggleCartComponent} />}
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp);
