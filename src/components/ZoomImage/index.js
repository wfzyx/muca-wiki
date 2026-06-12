import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ZoomImage({ src, alt, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container} onClick={() => setIsOpen(true)}>
        <img src={src} alt={alt} title={title || alt} />
        {title && <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-600)' }}>{title}</p>}
      </div>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <img src={src} alt={alt} className={styles.fullImage} />
        </div>
      )}
    </>
  );
}
