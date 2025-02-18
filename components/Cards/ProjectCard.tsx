import Image from 'next/image';
import styles from '@/styles/projectPage.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
  isMobile: boolean;
}

export function ProjectCard({ demoLink, description, githubLink, image, title, isMobile }: ProjectCardProps) {
  return (
    <div style={{ margin: '1rem', width: '100%', backgroundColor: '#28214D', padding: 10 }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <Image src={image} alt={title} width={300} height={200} />
        <div>
          <h2>{title}</h2>
          <div className={`${styles.separator} ${isMobile ? styles.mobile : ''}`}></div>
          <text style={{ whiteSpace: 'pre-wrap' }}>{description}</text>
        </div>
      </div>
    </div>
  );
}
