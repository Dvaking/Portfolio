'use client';
import Image from 'next/image';
import styles from '@/styles/homePage.module.css';
import { InformationBox } from '@/components';
import { homeInfo } from '@/utils/homeInfo';

export default function Home() {
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
              style={{
                borderRadius: 100,
                border: 'solid 4px #ededed',
              }}
            />
          </div>
          <div>
            <h1>MARC MENDIA</h1>
            <p>DÉVELOPPEUR, GAMER, STREAMER</p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#110229',
          width: '100%',
          height: '40vh',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div style={{ marginLeft: '20%', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <h3>SHORTLY ABOUT ME</h3>
              <h1>WHO I AM ?</h1>
            </div>
            <div className={styles.loadingContainer}></div>
            <div className={styles.loadingBar}></div>
            <div style={{ marginTop: 20, width: '80%' }}>
              <p>
                My name is Marc, I'm a developer and a student at EPITECH Technology, where I'm
                learning and perfecting my computer skills, both technically and professionally.
                Always looking for new challenges, I'm motivated by the desire to learn and
                constantly evolve.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            width: '70%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5vh',
            gap: '5vh',
          }}>
          {homeInfo.map((info, index) => (
            <div style={{ width: 'calc(48% - 2.5vh)' }}>
              <InformationBox
                key={index}
                title={info.title}
                description={info.description}
                icon={info.icon}
                link={info.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
