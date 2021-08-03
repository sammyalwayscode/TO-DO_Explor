import React, { useContext, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import TodoForm from "../TodoForm/TodoForm";
import { TodoContext } from "../Context/Index";
import { calendarItems } from "../Constants/Index";
import firebase from "../firebase";
import moment from "moment";
import randomcolor from "randomcolor";

function AddNewTodo() {
  //CONTEXT
  const { projects, selectedProject } = useContext(TodoContext);
  //STATE
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState(selectedProject);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text && !calendarItems.includes(todoProject)) {
      firebase
        .firestore()
        .collection("todos")
        .add({
          text: text,
          date: moment(day).format("MM/DD/YYYY"),
          day: moment(day).format("d"),
          time: moment(time).format("hh:mm A"),
          checked: false,
          color: randomcolor(),
          projectName: todoProject,
        });
      setShowModal(false);
      setText("");
      setDay(new Date());
      setTime(new Date());
    }
  };

  // const projects = [
  //   { id: 1, name: "Personal", numOfTodos: "0" },
  //   { id: 2, name: "Work", numOfTodos: "1" },
  //   { id: 3, name: "Others", numOfTodos: "2" },
  // ];

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
