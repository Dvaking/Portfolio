"use client";
import styles from './SocialButton.module.css';
import Image from 'next/image';

interface SocialButtonProps {
  socialName: string;
  hoverColor: string;
}

//#2B282B
export function SocialButton({ hoverColor, socialName }: SocialButtonProps) {

  const redirectToSocial = () => {
    switch (socialName) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/marc-mendia/');
        break;
      default:
        break;
    }
  };

  return (
    <button className={styles.animatedButton} onClick={redirectToSocial}>
      <span>
        <Image src={`${socialName}.svg`} alt={socialName} width={24} height={24} />
      </span>
      <span></span>
    </button>
  );
}
