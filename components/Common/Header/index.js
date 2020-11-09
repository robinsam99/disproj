import React from 'react';
import Image from 'react-bootstrap/Image';
import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <Image src="/HomePage/Logo.svg" className={styles.logo} />
            {/* <div className={styles.rightSection}>
                <a href="/">About Us</a>
            </div> */}
        </div>
    )
}
export default Header;