import React from "react";
import Todo from "../Todo/Todo";
import Next7Days from "../Next7Days/Next7Days";

function Todos() {
  return (
    <div className="Todos">
      <Todo />
      <Next7Days />
    </div>
  );
}

export default Todos;
