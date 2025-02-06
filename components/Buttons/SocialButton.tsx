'use client';
import styles from '@/styles/Components/socialButtonComponent.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface SocialButtonProps {
  icon: { icon: IconDefinition; link: string; backgroundColor: string };
}

//#2B282B
export function SocialButton({ icon }: SocialButtonProps) {
  const [isHovered, setIsHovered] = useState<number>(-1);

  return (
    <div className={styles.socialButton}>
      <button
        className={styles.animatedButton}
        onClick={() => window.open(icon.link)}
        onMouseEnter={() => setIsHovered(0)}
        onMouseLeave={() => setIsHovered(-1)}
        style={{
          backgroundColor: isHovered === 0 ? icon.backgroundColor : '#2B282B',
        }}>
        <span>
          <FontAwesomeIcon icon={icon.icon} color='white' fontSize="25px" />
        </span>
        <span style={{ backgroundColor: icon.backgroundColor }}></span>
      </button>
    </div>
  );
}
