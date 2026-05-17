// Selector + info del proyecto

import type { Project } from "../../types/project";
import "./ProjectHeader.css";

interface ProjectHeaderProps {
  project: Project;
  projectList: Project[];
  updateSelectedProject: (id: number) => void;
}

function ProjectHeader({
  project,
  projectList,
  updateSelectedProject,
}: ProjectHeaderProps) {
  return (
    <nav className="nav-header">
      <div>
        <p>Titulo: {project.title}</p>
        <p>Cantidad de tareas: {project.tasks.length}</p>
      </div>

      <div className="project-selector">
        <select
          value={project.id}
          onChange={(e) => {
            updateSelectedProject(+e.target.value);
          }}
        >
          {projectList.map((p) => {
            return (
              <option value={p.id} key={p.id}>
                {p.title}
              </option>
            );
          })}
        </select>
      </div>
    </nav>
  );
}

export default ProjectHeader;
