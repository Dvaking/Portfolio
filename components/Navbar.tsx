'use client';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';

import { SocialButton } from '@components';
import { useAppContext } from '@/context/AppContext';
import { SocialLink } from '@/utils/social';

export function Navbar() {
  const { isMobile } = useAppContext();
  const str = '<D/> ';

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div>
          <Link href='/'>
            <text style={{ fontSize: 31, color: '#00e6e6', fontWeight: 'bold' }}>{str}</text>
            <text className={styles.navbarTitle}>Marc MENDIA</text>
          </Link>
        </div>
        <div>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          {SocialLink.map((icon, index) => (
            <SocialButton key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
