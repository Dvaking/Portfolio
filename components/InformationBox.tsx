import Image from 'next/image';
import styles from '@/styles/informationBoxComp.module.css';

interface InformationBoxProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
  isMobile?: boolean;
}

export function InformationBox({ description, icon, link, title, isMobile }: InformationBoxProps) {
  return (
    <div
      style={{
        width: isMobile ? '100%' : '45%',
        display: 'flex',
        gap: '2vh',
        flexDirection: 'column',
        marginTop: '1vh',
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'left',
          borderRadius: '5px',
        }}>
        <Image src={icon} className={styles.boxIcon} alt={title} width={60} height={60} />
      </div>
      <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
        <h3 style={{ marginBottom: 5, fontSize: '1.1rem' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#BBBBBB', whiteSpace: 'pre-wrap' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
