import React, { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import Modal from "../Modal/Modal";
import ProjectForm from "../ProjectForm/ProjectForm";

function AddNewProject() {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleSummit = (e) => {};
  return (
    <div className="AddNewProject">
      <div className="AddButton">
        <span onClick={() => setShowModal(true)}>
          <Plus size="20" />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSummit={handleSummit}
          heading="New Project"
          value={projectName}
          setValue={setProjectName}
          setShowModal={setShowModal}
          confirmButtonText="+ Add Project"
        />
      </Modal>
    </div>
  );
}

export default AddNewProject;
