'use client';
import Image from 'next/image';
import styles from '@/styles/homePage.module.css';
import { InformationBox } from '@/components';
import { homeInfo } from '@/utils/homeInfo';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

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

      <div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
        <div className={`${styles.textSection} ${isMobile ? styles.mobile : ''}`}>
          <h3>Shortly About Me</h3>
          <h1>WHO I AM?</h1>
          <div className={styles.separator}></div>
          <p>
            My name is Marc, I'm a developer and a student at EPITECH Technology, where I'm learning
            and perfecting my computer skills, both technically and professionally. Always looking
            for new challenges, I'm motivated by the desire to learn and constantly evolve.
          </p>
        </div>

        <div className={`${styles.infoSection} ${isMobile ? styles.mobile : ''}`}>
          {homeInfo.map((info, index) => (
            <InformationBox
              description={info.description}
              icon={info.icon}
              title={info.title}
              isMobile={isMobile}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
