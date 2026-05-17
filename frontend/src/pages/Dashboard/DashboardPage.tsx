import { useEffect, useState } from "react";
import ProjectHeader from "../../components/Project/ProjectHeader";
import type { Project } from "../../types/project";
import TaskList from "../../components/Task/TaskList";
import * as ProjectService from "../../services/project.service.ts";
import "./DashboardPage.css";

function DashboardPage() {
  const [project, setProject] = useState<Project>();
  const [listProject, setListProject] = useState<Project[]>();

  useEffect(() => {
    const getProjects = async () => {
      const projects = await ProjectService.getProjects();

      if (projects) {
        setListProject(projects);
      }
    };

    getProjects();
  }, []);

  const updateSelectedProject = async (id: number) => {
    if (listProject) {
      const selected = listProject.find((p) => p.id == id);

      if (selected) {
        const project = await ProjectService.getProjectById(id);

        if (project) {
          setProject(project);
        }
      }
    }
  };

  return (
    <div className="dashboard-layout">
      <header>
        <ProjectHeader
          project={project}
          projectList={listProject}
          updateSelectedProject={updateSelectedProject}
        />
      </header>
      <main className="tasks-container">
        {project && <TaskList Tasks={project.tasks} />}
      </main>
    </div>
  );
}

export default DashboardPage;
