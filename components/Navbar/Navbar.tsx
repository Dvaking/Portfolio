import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

import { SocialButton } from '@components';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          <text>MARC</text>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href='#' className={styles.colors}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='#'>Project</Link>
          </li>
        </ul>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <SocialButton hoverColor='blue' socialName='linkedin' />
          </li>
          <li className={styles.navItem}>
            <SocialButton hoverColor='blue' socialName='github' />
          </li>
          <li className={styles.navItem}>
            <SocialButton hoverColor='blue' socialName='linkedin' />
          </li>
        </ul>
      </div>
    </div>
  );
}
