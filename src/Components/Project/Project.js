import React, { useContext, useState } from "react";
import { Pencil, XCircle } from "react-bootstrap-icons";
import Modal from "../Modal/Modal";
import RenameProject from "../RenameProject/RenameProject";
import { TodoContext } from "../Context/Index";

function Project({ project, edit }) {
  //CONTEXT
  const { setSelectedProject } = useContext(TodoContext);
  //STATE

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="Project">
      <div className="Name" onClick={() => setSelectedProject(project.name)}>
        {project.name}
      </div>
      <div className="Btns">
        {edit ? (
          <div className="EditDelete">
            <span className="Edit" onClick={() => setShowModal(true)}>
              <Pencil size="13" />
            </span>
            <span className="Delete">
              <XCircle size="13" />
            </span>
          </div>
        ) : (
          <div className="TotalTodos">{project.numOfTodos}</div>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject project={project} setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}

export default Project;
