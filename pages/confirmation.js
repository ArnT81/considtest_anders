import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
//STYLES
import styles from '../styles/confirmation.module.css';

const confirmation = () => {
    const router = useRouter();

    //LIFECYCLE HOOKS
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 4000)

        return () => {
            setTimeout(() => {
                router.push("/");
            }, 4000)
        }
    }, [])


    return (
        <div className={styles.confirmation}>
            <h1>Tack för att du handlar hos oss</h1>
            <h2>Du routas snart tillbaka till vår hemsida</h2>
        </div>
    )
}

export default confirmation;
