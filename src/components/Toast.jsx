import React, { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Auto close after 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={styles.toast}>
            <div className={styles.icon}>✓</div>
            <span className={styles.message}>{message}</span>
        </div>
    );
};

export default Toast;
