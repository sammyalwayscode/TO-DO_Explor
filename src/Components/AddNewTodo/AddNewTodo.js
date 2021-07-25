import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}> + New Todo</button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form>
            <div className="Text">
              <h3>Add New Todo !</h3>
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
                <div className="Project Active">Personal</div>
                <div className="Project">Work</div>
              </div>
            </div>
            <div className="Cancle" onClick={() => setShowModal(false)}>
              <X size="40" />
            </div>
            <div className="Confirm">
              <button>+ New Todo</button>
            </div>
          </form>
        </MuiPickersUtilsProvider>
      </Modal>
    </div>
  );
}

export default AddNewTodo;
