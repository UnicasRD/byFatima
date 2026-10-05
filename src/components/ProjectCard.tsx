import type { Project } from '../types/project'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card reveal">
      <div className="project-media">
        {project.cover_url ? (
          <img src={project.cover_url} alt={project.title} />
        ) : (
          <div className="project-placeholder">
            <span>{project.category}</span>
          </div>
        )}
      </div>
      <div className="project-copy">
        <span className="eyebrow">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.short_description}</p>
      </div>
    </article>
  )
}
