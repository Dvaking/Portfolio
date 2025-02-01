import { Card } from './Card';
import Image from 'next/image';
import styles from '@/styles/projectPage.module.css';
import { DecryptedText } from './TextEffect';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
}

export function ProjectCard({ demoLink, description, githubLink, image, title }: ProjectCardProps) {
  return (
    <Card key={title}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className={styles.image}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</text>
          <div style={{ fontSize: 20 }}>
            <DecryptedText
              text={description}
              animateOn='view'
              revealDirection='center'
              speed={200}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
