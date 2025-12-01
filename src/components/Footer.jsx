import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} PortraitArt. All rights reserved.</p>
                    <div className={styles.links}>
                        <a href="#" className={styles.link}>Instagram</a>
                        <a href="#" className={styles.link}>Twitter</a>
                        <a href="#" className={styles.link}>Email Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
