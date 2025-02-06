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
            <Image
              src={'/profilePicture.jpg'}
              alt={'profilePicture'}
              width={200}
              height={200}
              className={styles.profilePicture}
            />
          </div>
          <div>
            <h1>MARC MENDIA</h1>
            <p>DÉVELOPPEUR, GAMER, STREAMER</p>
          </div>
        </div>
      </div>
      <About isMobile={isMobile} />
      <PinnedRepository isMobile={isMobile} />
    </div>
  );
}
