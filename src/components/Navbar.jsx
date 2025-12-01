import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} glass`}>
            <div className={`container ${styles.navContainer}`}>
                <Link to="/" className={styles.logo}>
                    PortraitArt
                </Link>
                <div className={styles.links}>
                    <Link to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>Home</Link>
                    <Link to="/portraits" className={`${styles.link} ${location.pathname === '/portraits' ? styles.active : ''}`}>Portraits</Link>
                    <Link to="/order" className={`${styles.cta} ${location.pathname === '/order' ? styles.activeCta : ''}`}>Order Now</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
