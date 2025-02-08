'use client';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';

import { SocialButton } from '@components';
import { useAppContext } from '@/context/AppContext';
import { SocialLink } from '@/utils/social';

export function Navbar() {
  const { isMobile } = useAppContext();

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
            {/* <Link href='/project'>Project</Link> */}
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
