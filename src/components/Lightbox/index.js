import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <span className={styles.closeButton}>&times;</span>
      <img src={src} alt={alt} className={styles.modalImage} />
    </div>,
    document.body
  );
}
