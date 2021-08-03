import React, { useState } from "react";
import {
  ArrowClockwise,
  CheckCircleFill,
  Circle,
  Trash,
} from "react-bootstrap-icons";

function Todo({ todo }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="Todo">
      <div
        class="TodoContainer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="CheckTodo">
          {todo.checked ? (
            <span className="Checked">
              <CheckCircleFill color="#ebebeb" />
            </span>
          ) : (
            <span className="UnChecked">
              <Circle color={todo.color} />
            </span>
          )}
        </div>
        <div className="Text">
          <p style={{ color: todo.checked ? "#ebebeb" : "#000000" }}>
            {" "}
            {todo.text}{" "}
          </p>
          <span>
            {" "}
            {todo.time} - {todo.projectName}{" "}
          </span>
          <div className={`line ${todo.checked ? "lineThrough" : ""}`}></div>
        </div>
        <div className="AddToNextDay">
          {todo.checked && (
            <span>
              <ArrowClockwise />
            </span>
          )}
        </div>
        <div className="DeleteTodo">
          {(hover || todo.checked) && (
            <span>
              <Trash />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
