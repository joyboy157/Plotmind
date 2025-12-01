import React, { useState } from 'react';
import { portraits } from '../data/portraits';
import Modal from '../components/Modal';
import styles from './Portraits.module.css';

const Portraits = () => {
    const [selectedPortrait, setSelectedPortrait] = useState(null);

    return (
        <div className="container section-padding">
            <div className={styles.header}>
                <h1 className={`${styles.title} fade-in`}>Our Collection</h1>
                <p className={`${styles.subtitle} fade-in`} style={{ animationDelay: '0.1s' }}>
                    Explore our latest commissioned works and artistic explorations.
                </p>
            </div>

            <div className={styles.grid}>
                {portraits.map((portrait, index) => (
                    <div
                        key={portrait.id}
                        className={`${styles.card} fade-in`}
                        style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                        onClick={() => setSelectedPortrait(portrait)}
                    >
                        <div className={styles.imageWrapper}>
                            <img src={portrait.image} alt={portrait.title} className={styles.image} loading="lazy" />
                            <div className={styles.overlay}>
                                <span className={styles.viewText}>View Details</span>
                            </div>
                        </div>
                        <div className={styles.cardInfo}>
                            <h3 className={styles.cardTitle}>{portrait.title}</h3>
                            <span className={styles.cardCategory}>{portrait.category}</span>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedPortrait}
                onClose={() => setSelectedPortrait(null)}
                portrait={selectedPortrait}
            />
        </div>
    );
};

export default Portraits;
