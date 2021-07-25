import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";
import User from "./Components/User/User";
import AddNewTodo from "./Components/AddNewTodo/AddNewTodo";
import Calendar from "./Components/Calendar/Calendar";
import Projects from "./Components/Projects/Projects";
import Todos from "./Components/Todos/Todos";
import EditTodos from "./Components/EditTodos/EditTodos";

function App() {
  return (
    <div className="App">
      <SideBar>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </SideBar>
      <Main>
        <Todos />
        <EditTodos />
      </Main>
    </div>
  );
}

export default App;
