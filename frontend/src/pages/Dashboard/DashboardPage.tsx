import { useState } from "react";
import ProjectHeader from "../../components/Project/ProjectHeader";
import type { Project } from "../../types/project";
import "./DashboardPage.css";
import TaskList from "../../components/Task/TaskList";

const projectList: Project[] = [
  {
    id: 1,
    title: "Probando",
    tasks: [
      { id: 1, projectId: 1, text: "Testeando frontend", userId: 1 },
      { id: 2, projectId: 1, text: "Testeando backend", userId: 1 },
    ],
    users: [{ id: 1, email: "test@test.com", name: "test" }],
  },
  {
    id: 2,
    title: "Test",
    tasks: [
      { id: 2, projectId: 1, text: "Testeando backend", userId: 1 },
      {
        id: 3,
        projectId: 1,
        text: "Testeando otra cosa",
        userId: 1,
      },
    ],
    users: [{ id: 1, email: "test@test.com", name: "test" }],
  },
];

function DashboardPage() {
  const [project, setProject] = useState<Project>(projectList[0]);

  const updateSelectedProject = (id: number) => {
    const selected = projectList.find((p) => p.id == id);

    if (selected) {
      setProject(selected);
    }
  };

  return (
    <div className="dashboard-layout">
      <header>
        <ProjectHeader
          project={project}
          projectList={projectList}
          updateSelectedProject={updateSelectedProject}
        />
      </header>
      <main className="tasks-container">
        <TaskList Tasks={project.tasks} />
      </main>
    </div>
  );
}

export default DashboardPage;
