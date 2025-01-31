'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

import { SocialButton } from '@components';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLink = [
  {
    icon: faLinkedinIn,
    link: 'https://www.linkedin.com/in/marc-mendia/',
    backgroundColor: '#0077B5',
  },
  { icon: faGithub, link: 'https://github.com/Dvaking', backgroundColor: '#333' },
];

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        {!isMobile && (
          <div>
            <Link href='/'>
              <Image src={'/logo.png'} alt={'logo'} width={50} height={50} />
            </Link>
          </div>
        )}
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href='/' className={styles.colors}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/project'>Project</Link>
          </li>
        </ul>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          {SocialLink.map((icon, index) => (
            <SocialButton key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
