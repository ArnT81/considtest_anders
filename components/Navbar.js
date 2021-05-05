
import Link from 'next/link';
//REDUX
import { connect } from 'react-redux';
// STYLES
import styles from '../styles/navbar.module.css';


const Navbar = (props, redux) => {
    // console.log('in Navbar', redux);

    
    const RenderCartIcon = () => {
        return (
            <svg
                onClick={props.toggleCartComponent}
                className={styles.cart}
                viewBox="0 0 74 60" fill="none">
                <path d="M3 3H11.0302L16.0862 28.6362L13.6931 36.6299L63.7047 36.6505L71 12.5598H20.9088" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.7375 36.4271L10.3576 47.209H60.4492" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M66.1905 28.3335H24.1272" strokeLinecap="round" />
                <path d="M68.9625 20.1121H22.4542" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M37.6385 12.751L30.341 36.5549" />
                <path d="M53.4104 12.751L46.3059 36.4593" />
                <path d="M54.8905 57.8893C56.9027 57.8893 58.5335 56.2585 58.5335 54.2462C58.5335 52.234 56.9027 50.6028 54.8905 50.6028C52.8782 50.6028 51.2472 52.234 51.2472 54.2462C51.2472 56.2585 52.8782 57.8893 54.8905 57.8893Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.795 57.8837C13.8072 57.8837 15.4383 56.2529 15.4383 54.2406C15.4383 52.2284 13.8072 50.5973 11.795 50.5973C9.78294 50.5973 8.15175 52.2284 8.15175 54.2406C8.15175 56.2529 9.78294 57.8837 11.795 57.8837Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }


    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/product">Shop</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            {props.showCartIcon && <RenderCartIcon />}
        </nav>
    )
}

//REDUX
const mapStateToProps = state => ({
    redux: state.cart
})



export default connect(mapStateToProps)(Navbar);


// export default Navbar;
