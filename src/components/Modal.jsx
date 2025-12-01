import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, portrait }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !portrait) return null;

    return (
        <div className={`${styles.overlay} fade-in`} onClick={onClose}>
            <div className={`${styles.modal} glass`} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                <div className={styles.imageContainer}>
                    <img src={portrait.image} alt={portrait.title} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <span className={styles.category}>{portrait.category}</span>
                    <h2 className={styles.title}>{portrait.title}</h2>
                    <p className={styles.description}>{portrait.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
