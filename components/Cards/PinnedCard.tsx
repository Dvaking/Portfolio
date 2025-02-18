'use client';

import styles from '@/styles/Components/pinnedCardComponent.module.css';
import { DefaultButton } from '../Buttons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface CardProps {
  name: string;
  description: string;
  buttonText: string;
  isMobile: boolean;
  onClick?: () => void;
}

export function PinnedCard({ name, description, isMobile, onClick }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`${styles.container} ${isMobile ? styles.mobile : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {isHovered && (
        <div className={styles.backgroundIcon}>
          <FontAwesomeIcon icon={faCode} />
        </div>
      )}
      <div className={`${styles.textSection} ${isMobile ? styles.mobile : ''}`}>
        <h1>{name}</h1>
        <div className={`${styles.separator} ${isMobile ? styles.mobile : ''}`}></div>
        <p>{description}</p>
      </div>
      {onClick && (
        <DefaultButton text='View on github' icon={faGithub} color='#110229' onClick={onClick} />
      )}
    </div>
  );
}
