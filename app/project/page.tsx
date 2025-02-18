"use client";
import { ProjectCard } from '@/components';
import { useAppContext } from '@/context/AppContext';
import { Projects } from '@/utils/project';

export default function ProjectPage() {
  const { isMobile } = useAppContext();
  return (
    <div>
      <div
        style={{
          backgroundColor: '#110229',
          display: 'flex',
          width: '100%',
        }}>
        {Projects.map(project => (
          <ProjectCard
            key={project.title}
            demoLink={project.demoLink}
            description={project.description}
            githubLink={project.githubLink}
            image={project.image}
            title={project.title}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}
