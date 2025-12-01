import React, { useState } from 'react';
import styles from './Order.module.css';
import Toast from '../components/Toast';

const Order = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        size: 'A4',
        style: 'Color',
        notes: ''
    });
    const [showToast, setShowToast] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const data = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data).toString(),
        })
            .then(() => {
                setShowToast(true);
                setFormData({
                    name: '',
                    email: '',
                    size: 'A4',
                    style: 'Color',
                    notes: ''
                });
                form.reset();
                setTimeout(() => setShowToast(false), 3000);
            })
            .catch((error) => alert(error))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <div className="container section-padding">
            {showToast && <Toast message="Your order has been submitted!" onClose={() => setShowToast(false)} />}

            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <h1 className={`${styles.title} fade-in`}>Start Your Commission</h1>
                    <p className={`${styles.subtitle} fade-in`} style={{ animationDelay: '0.1s' }}>
                        Fill out the form below to get started. We'll review your request and get back to you with a quote.
                    </p>
                </div>

                {/* 
          NETLIFY FORMS SETUP:
          - The form must have `name="order"`.
          - `data-netlify="true"` enables Netlify Forms.
          - `data-netlify-honeypot="bot-field"` adds spam protection.
          - The hidden input `form-name` is required.
          
          EMAIL NOTIFICATIONS:
          - By default, submissions are sent to the site owner's email (configured in Netlify Dashboard).
          - To change the recipient, go to Netlify Site Settings > Forms > Form Notifications.
        */}
                <form
                    name="order"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    encType="multipart/form-data"
                    className={`${styles.form} glass fade-in`}
                    style={{ animationDelay: '0.2s' }}
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="order" />
                    <p hidden>
                        <label>
                            Don’t fill this out if you’re human: <input name="bot-field" />
                        </label>
                    </p>

                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Your full name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.formGroup}>
                            <label htmlFor="size" className={styles.label}>Paper Size</label>
                            <select
                                id="size"
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="A3">A3 (Large)</option>
                                <option value="A4">A4 (Standard)</option>
                                <option value="A5">A5 (Small)</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="style" className={styles.label}>Style</label>
                            <select
                                id="style"
                                name="style"
                                value={formData.style}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="Color">Color</option>
                                <option value="Black & White">Black & White</option>
                                <option value="Sketch">Sketch</option>
                                <option value="Digital">Digital Art</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="image" className={styles.label}>Upload Image</label>
                        <div className={styles.fileUpload}>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                required
                                className={styles.fileInput}
                            />
                            <p className={styles.fileHelp}>Please upload a high-quality image (JPG, PNG)</p>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="notes" className={styles.label}>Additional Notes</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="4"
                            className={styles.textarea}
                            placeholder="Any specific details or requests?"
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Order;
