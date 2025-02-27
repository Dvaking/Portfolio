'use client';
import styles from '@/styles/Components/socialButtonComponent.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface SocialButtonProps {
  icon: { icon: IconDefinition; link: string; backgroundColor: string };
}

export function SocialButton({ icon }: SocialButtonProps) {
  const [isHovered, setIsHovered] = useState<number>(-1);

  const openLink = () => {
    if (icon.link.endsWith('.pdf') || icon.link.match(/\.(jpg|jpeg|png|gif)$/)) {
      const newWindow = window.open(icon.link, '_blank');
      if (newWindow) {
        newWindow.focus();
      }
    } else {
      window.open(icon.link, '_blank');
    }
  };

  return (
    <div className={styles.socialButton}>
      <button
        className={styles.animatedButton}
        onClick={openLink}
        onMouseEnter={() => setIsHovered(0)}
        onMouseLeave={() => setIsHovered(-1)}
        style={{
          backgroundColor: isHovered === 0 ? icon.backgroundColor : '#2B282B',
        }}>
        <span>
          <FontAwesomeIcon icon={icon.icon} color='white' fontSize='25px' />
        </span>
        <span style={{ backgroundColor: icon.backgroundColor }}></span>
      </button>
    </div>
  );
}
