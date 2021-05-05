import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
//REDUX
import { wrapper } from '../redux/store';
//STYLES
import '../styles/globals.css';

//! Main source if truth
console.log(wrapper)
function MyApp({ Component, pageProps }) {
  //VARIABLES & STATES
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
      {pageProps.productsProps && toggle && <Cart toggleCartComponent={toggleCartComponent}/>}
      <Component {...pageProps} />
    </>
  )
}
export default wrapper.withRedux(MyApp);
