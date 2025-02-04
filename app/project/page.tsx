import { ProjectCard } from '@/components';
import { Projects } from '@/utils/project';

export default function ProjectPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>
      {Projects.map(project => (
        <ProjectCard
          key={project.title}
          demoLink={project.demoLink}
          description={project.description}
          githubLink={project.githubLink}
          image={project.image}
          title={project.title}
        />
      ))}
    </div>
  );
}
