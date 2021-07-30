import React from "react";
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function TodoFrom({
  handleSubmit,
  heading = false,
  text,
  setText,
  time,
  setTime,
  day,
  setDay,
  todoProject,
  setTodoProject,
  projects,
  showButtons = false,
  setShowModal = false,
}) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit} className="TodoForm">
        <div className="Text">
          {heading && <h3> {heading} </h3>}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="To do..."
            autoFocus
          />
        </div>
        <div className="Remind">
          <Bell />
          <p>Remind Me</p>
        </div>
        <div className="PickDay">
          <div className="Title">
            <CalendarDay />
            <p>Choose A Day</p>
          </div>
          <DatePicker value={day} onChange={(day) => setDay(day)} />
        </div>
        <div className="PickTime">
          <div className="Title">
            <Clock />
            <p>Choose A Day</p>
          </div>
          <TimePicker value={time} onChange={(time) => setTime(time)} />
        </div>
        <div className="PickProject">
          <div className="Title">
            <Palette />
            <p>Choose A Project</p>
          </div>
          <div className="Projects">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  className={`Project  ${
                    todoProject === project.name ? "Active" : ""
                  }`}
                  key={project.id}
                  onClick={() => setTodoProject(project.name)}
                >
                  {project.name}
                </div>
              ))
            ) : (
              <div style={{ color: "#ff0000" }}>
                {" "}
                Please Add A Project before Proceeding{" "}
              </div>
            )}
          </div>
        </div>
        {showButtons && (
          <div>
            <div className="Cancle" onClick={() => setShowModal(false)}>
              <X size="40" />
            </div>
            <div className="Confirm">
              <button>+ New Todo</button>
            </div>
          </div>
        )}
      </form>
    </MuiPickersUtilsProvider>
  );
}

export default TodoFrom;
