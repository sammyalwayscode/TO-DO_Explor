import React, { useContext } from "react";
import { CalendarDate, CaretUp } from "react-bootstrap-icons";
import { calendarItems } from "../Constants/Index";
import { TodoContext } from "../Context/Index";

function Calendar() {
  //CONTEXT
  const { setSelectedProject } = useContext(TodoContext);
  return (
    <div className="Calendar">
      <div className="Header">
        <div className="Title">
          <CalendarDate size="18" />
          <p>Calendar</p>
        </div>
        <div className="Btns">
          <span>
            <CaretUp size="20" />
          </span>
        </div>
      </div>
      <div className="Items">
        {calendarItems.map((item) => (
          <div
            className="Item"
            key={item}
            onClick={() => setSelectedProject(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
