import Image from 'next/image';
import styles from '@/styles/informationBoxComp.module.css';

interface InformationBoxProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export function InformationBox({description, icon, link, title}: InformationBoxProps) {
  return (
    <div style={{ gap: 20 }}>
      <Image
        className={styles.boxIcon}
        src={icon}
        alt={'profilePicture'}
        width={60}
        height={60}
      />
      <h2>{title}</h2>
      <text>
        {description}
      </text>
    </div>
  );
}
