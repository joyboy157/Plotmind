import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={`${styles.title} fade-in`}>
                        Turn Your Photos Into <br />
                        <span className={styles.gradientText}>Stunning Portrait Art</span>
                    </h1>
                    <p className={`${styles.subtitle} fade-in`} style={{ animationDelay: '0.2s' }}>
                        Transform your cherished memories into timeless, hand-crafted digital masterpieces.
                    </p>
                    <div className={`${styles.ctaGroup} fade-in`} style={{ animationDelay: '0.4s' }}>
                        <Link to="/portraits" className={styles.primaryBtn}>
                            View Gallery
                        </Link>
                        <Link to="/order" className={styles.secondaryBtn}>
                            Start Order
                        </Link>
                    </div>
                </div>

                <div className={styles.backgroundBlur}></div>
            </section>
        </div>
    );
};

export default Home;
