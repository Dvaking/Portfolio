'use client';
import Image from 'next/image';
import styles from '@/styles/homePage.module.css';
import { About, PinnedRepository } from '@/components';
import { useAppContext } from '@/context/AppContext';

export default function Home() {
  const { isMobile } = useAppContext();

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>

          </div>
        </div>
      </div>
      {/* <text style={{ fontSize: 50 }}>MARC MENDIA</text>
      <p>DÉVELOPPEUR, GAMER, STREAMER</p> */}
      <About isMobile={isMobile} />
      <PinnedRepository isMobile={isMobile} />
    </div>
  );
}
