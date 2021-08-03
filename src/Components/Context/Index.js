import React, { createContext, useState } from "react";
import { useTodos, useProjects } from "../Hooks/Index";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const defaultProject = "Today";
  const [selectedProject, setSelectedProject] = useState(defaultProject);

  const todos = useTodos();
  const projects = useProjects(todos);

  return (
    <TodoContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        todos,
        projects,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };
