import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";

function EditTodos() {
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState();

  const handleSubmit = () => {};

  const projects = [
    { id: 1, name: "Personal", numOfTodos: "0" },
    { id: 2, name: "Work", numOfTodos: "1" },
    { id: 3, name: "Others", numOfTodos: "2" },
  ];
  return (
    <div className="EditTodos">
      <div className="Header">Edit Todo</div>
      <div className="Container">
        <TodoForm
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          todoProject={todoProject}
          setTodoProject={setTodoProject}
          projects={projects}
        />
      </div>
    </div>
  );
}

export default EditTodos;
