import styles from '@/styles/Components/aboutComponent.module.css';
import { homeInfo } from '@/utils/homeInfo';
import { DefaultButton, InformationBox } from '@/components';
import { faFile } from '@fortawesome/free-solid-svg-icons';

interface AboutProps {
  isMobile: boolean;
}

export function About({ isMobile }: AboutProps) {

  const cvButton = () => {
    const newWindow = window.open('/cv.jpg', '_blank');
      if (newWindow) {
        newWindow.focus();
      }
  }

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
      <div className={`${styles.textSection} ${isMobile ? styles.mobile : ''}`}>
        <h3>Shortly About Me</h3>
        <h1>WHO I AM?</h1>
        <div className={`${styles.separator} ${isMobile ? styles.mobile : ''}`}></div>
        <p style={{ marginBottom: '20px' }}>
          My name is Marc, I'm a developer and a student at EPITECH Technology, where I'm learning
          and perfecting my computer skills, both technically and professionally. Always looking for
          new challenges, I'm motivated by the desire to learn and constantly evolve.
        </p>
        <DefaultButton
          color='#110229'
          text='See my CV'
          onClick={cvButton}
          icon={faFile}
        />
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
