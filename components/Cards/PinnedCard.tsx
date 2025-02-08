import styles from '@/styles/Components/pinnedCardComponent.module.css';
import { DefaultButton } from '../Buttons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface CardProps {
  name: string;
  description: string;
  buttonText: string;
  isMobile: boolean;
  onClick?: () => void;
}

export function PinnedCard({ name, description, isMobile, onClick }: CardProps) {
  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
      <div className={`${styles.textSection} ${isMobile ? styles.mobile : ''}`}>
        <h1>{name}</h1>
        <div className={`${styles.separator} ${isMobile ? styles.mobile : ''}`}></div>
        <p>{description}</p>
      </div>
      {onClick && (
        <DefaultButton text='View on github' icon={faGithub} color='#110229' onClick={onClick} />
      )}
    </div>
  );
}
