import React from 'react';

//css
import styles from './Loding.module.css'


const Loding = () => {
    return (
        <div className={styles.back}>

        <div className={styles.bar}>
             <div className={styles.circle}></div>
             <p>Loading</p>
         </div>

        </div>
    );
};

export default Loding;