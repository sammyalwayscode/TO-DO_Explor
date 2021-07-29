import React, { useState } from "react";
import ProjectForm from "../ProjectForm/ProjectForm";

function RenameProject({ project, setShowModal }) {
  const [newProjectName, setNewProjectName] = useState(project.name);

  function handleSummit(e) {}
  return (
    <div className="RenameProject">
      <ProjectForm
        handleSummit={handleSummit}
        heading="Edit Project Name"
        value={newProjectName}
        setValue={setNewProjectName}
        setShowModal={setShowModal}
        confirmButtonText="Confirm"
      />
    </div>
  );
}

export default RenameProject;
