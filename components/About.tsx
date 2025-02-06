import styles from '@/styles/Components/aboutComponent.module.css';
import { InformationBox } from './InformationBox';
import { homeInfo } from '@/utils/homeInfo';

interface AboutProps {
  isMobile: boolean;
}

export function About({ isMobile }: AboutProps) {
  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
      <div className={`${styles.textSection} ${isMobile ? styles.mobile : ''}`}>
        <h3>Shortly About Me</h3>
        <h1>WHO I AM?</h1>
        <div className={`${styles.separator} ${isMobile ? styles.mobile : ''}`}></div>
        <p>
          My name is Marc, I'm a developer and a student at EPITECH Technology, where I'm learning
          and perfecting my computer skills, both technically and professionally. Always looking for
          new challenges, I'm motivated by the desire to learn and constantly evolve.
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
  );
}
