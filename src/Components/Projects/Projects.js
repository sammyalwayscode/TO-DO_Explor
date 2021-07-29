import React, { useState } from "react";
import AddNewProject from "../AddNewProject/AddNewProject";
import Project from "../Project/Project";
import { CaretUp, Palette, PencilFill } from "react-bootstrap-icons";

function Projects() {
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false);
  const pencilColor = edit ? "#1ec94c" : "#000000";

  const projects = [
    { id: 1, name: "Personal", numOfTodos: "0" },
    { id: 2, name: "Work", numOfTodos: "1" },
    { id: 3, name: "Others", numOfTodos: "2" },
  ];

  return (
    <div className="Projects">
      <div className="Header">
        <div className="Title">
          <Palette size="18" />
          <p>Projects</p>
        </div>
        <div className="Btns">
          {showMenu && projects.length > 0 && (
            <span className="Edit" onClick={() => setEdit((edit) => !edit)}>
              <PencilFill size="15" color={pencilColor} />
            </span>
          )}
          <AddNewProject />
          <span className="Arrow">
            <CaretUp size="20" />
          </span>
        </div>
      </div>
      <div className="Items">
        {projects.map((project) => (
          <Project project={project} key={projects.id} edit={edit} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
