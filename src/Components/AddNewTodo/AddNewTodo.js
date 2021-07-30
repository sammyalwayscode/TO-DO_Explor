import React, { useContext, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import TodoForm from "../TodoForm/TodoForm";
import { TodoContext } from "../Context/Index";

function AddNewTodo() {
  //CONTEXT
  const { selectedProject } = useContext(TodoContext);
  //STATE
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState(selectedProject);

  const handleSubmit = () => {};

  const projects = [
    { id: 1, name: "Personal", numOfTodos: "0" },
    { id: 2, name: "Work", numOfTodos: "1" },
    { id: 3, name: "Others", numOfTodos: "2" },
  ];

  useEffect(() => {
    setTodoProject(selectedProject);
  }, [selectedProject]);

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}> + New Todo</button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm
          handleSubmit={handleSubmit}
          heading="Add New Todo..."
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projects={projects}
          todoProject={todoProject}
          setTodoProject={setTodoProject}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
}

export default AddNewTodo;
